import React, { useState } from 'react'
import { useUsers } from '../hooks/useUsers'
import Modal from './Modal'

export default function Users() {
  const { users, loading, addUser, updateUser } = useUsers()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  })

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = await addUser({
      ...newUser,
      status: 'active',
      balance: 0,
      tariff: 'basic',
      created_at: new Date().toISOString()
    })
    
    if (result.success) {
      setIsModalOpen(false)
      setNewUser({ name: '', email: '', phone: '', address: '' })
      alert('Пользователь успешно добавлен!')
    } else {
      alert('Ошибка при добавлении пользователя')
    }
  }

  const toggleUserStatus = async (user: any) => {
    const newStatus = user.status === 'active' ? 'inactive' : 'active'
    await updateUser(user.id, { status: newStatus })
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl">Загрузка пользователей...</div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Пользователи</h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-primary hover:bg-secondary px-4 py-2 rounded transition"
        >
          Добавить пользователя
        </button>
      </div>

      <div className="bg-dark-800 rounded-lg p-6">
        {users.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-400">Пользователи не найдены</p>
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="text-left p-2">ID</th>
                <th className="text-left p-2">Имя</th>
                <th className="text-left p-2">Email</th>
                <th className="text-left p-2">Телефон</th>
                <th className="text-left p-2">Баланс</th>
                <th className="text-left p-2">Статус</th>
                <th className="text-left p-2">Действия</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id} className="border-b border-gray-700">
                  <td className="p-2">{user.id}</td>
                  <td className="p-2">{user.name}</td>
                  <td className="p-2">{user.email}</td>
                  <td className="p-2">{user.phone || '-'}</td>
                  <td className="p-2">{user.balance} ₸</td>
                  <td className="p-2">
                    <span className={`px-2 py-1 rounded ${
                      user.status === 'active' ? 'bg-green-500' : 'bg-red-500'
                    }`}>
                      {user.status === 'active' ? 'Активен' : 'Неактивен'}
                    </span>
                  </td>
                  <td className="p-2">
                    <button 
                      onClick={() => toggleUserStatus(user)}
                      className={`px-3 py-1 rounded ${
                        user.status === 'active' 
                          ? 'bg-red-500 hover:bg-red-600' 
                          : 'bg-green-500 hover:bg-green-600'
                      } transition`}
                    >
                      {user.status === 'active' ? 'Деактивировать' : 'Активировать'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <Modal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Добавить пользователя"
      >
        <form onSubmit={handleAddUser} className="space-y-4">
          <div>
            <label className="block mb-2">Имя</label>
            <input 
              type="text"
              value={newUser.name}
              onChange={(e) => setNewUser(prev => ({...prev, name: e.target.value}))}
              className="w-full p-3 rounded bg-dark-700 border border-gray-600"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Email</label>
            <input 
              type="email"
              value={newUser.email}
              onChange={(e) => setNewUser(prev => ({...prev, email: e.target.value}))}
              className="w-full p-3 rounded bg-dark-700 border border-gray-600"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Телефон</label>
            <input 
              type="tel"
              value={newUser.phone}
              onChange={(e) => setNewUser(prev => ({...prev, phone: e.target.value}))}
              className="w-full p-3 rounded bg-dark-700 border border-gray-600"
            />
          </div>
          <div>
            <label className="block mb-2">Адрес</label>
            <input 
              type="text"
              value={newUser.address}
              onChange={(e) => setNewUser(prev => ({...prev, address: e.target.value}))}
              className="w-full p-3 rounded bg-dark-700 border border-gray-600"
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-primary hover:bg-secondary py-3 rounded transition"
          >
            Добавить пользователя
          </button>
        </form>
      </Modal>
    </div>
  )
}
