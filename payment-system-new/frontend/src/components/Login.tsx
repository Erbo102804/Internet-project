import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Простая имитация авторизации
    if (email === 'admin@ruralnet.kz' && password === 'admin') {
      localStorage.setItem('userRole', 'admin')
      localStorage.setItem('isAuthenticated', 'true')
      navigate('/admin')
    } else if (email === 'user@ruralnet.kz' && password === 'user') {
      localStorage.setItem('userRole', 'user') 
      localStorage.setItem('isAuthenticated', 'true')
      navigate('/user')
    } else {
      alert('Неверные данные для входа')
    }
  }

  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center">
      <div className="bg-dark-800 p-8 rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">RuralNet - Вход</h1>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-2">Email</label>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded bg-dark-700 border border-gray-600"
              placeholder="admin@ruralnet.kz"
              required
            />
          </div>
          
          <div>
            <label className="block mb-2">Пароль</label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded bg-dark-700 border border-gray-600"
              placeholder="••••••••"
              required
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-primary hover:bg-secondary py-3 rounded font-semibold transition"
          >
            Войти
          </button>
        </form>

        <div className="mt-6 text-sm text-gray-400">
          <p>Тестовые аккаунты:</p>
          <p>Админ: admin@ruralnet.kz / admin</p>
          <p>Пользователь: user@ruralnet.kz / user</p>
        </div>
      </div>
    </div>
  )
}
