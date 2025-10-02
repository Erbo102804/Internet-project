import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from './Modal'

export default function UserDashboard() {
  const [balance, setBalance] = useState(5000)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [paymentAmount, setPaymentAmount] = useState('')
  const navigate = useNavigate()

  const userData = {
    name: "Иван Иванов",
    tariff: "Стандарт (10 Mbps)",
    nextPayment: "15 января 2024",
    status: "Активен"
  }

  const handlePayment = () => {
    const amount = parseInt(paymentAmount)
    if (amount > 0) {
      setBalance(prev => prev + amount)
      setShowPaymentModal(false)
      setPaymentAmount('')
      alert(`Баланс пополнен на ${amount} ₸`)
    }
  }

  const handleChangeTariff = () => {
    navigate('/user/services')
  }

  const handleSupport = () => {
    navigate('/user/support')
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Мой кабинет</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-dark-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Мой профиль</h3>
          <div className="space-y-2">
            <p><span className="text-gray-400">Имя:</span> {userData.name}</p>
            <p><span className="text-gray-400">Баланс:</span> {balance.toLocaleString()} ₸</p>
            <p><span className="text-gray-400">Тариф:</span> {userData.tariff}</p>
            <p><span className="text-gray-400">Следующий платеж:</span> {userData.nextPayment}</p>
            <p><span className="text-gray-400">Статус:</span> 
              <span className="text-green-500 ml-2">{userData.status}</span>
            </p>
          </div>
        </div>

        <div className="bg-dark-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Быстрые действия</h3>
          <div className="space-y-3">
            <button 
              onClick={() => setShowPaymentModal(true)}
              className="w-full bg-primary hover:bg-secondary py-3 rounded transition font-semibold"
            >
              Пополнить баланс
            </button>
            <button 
              onClick={handleChangeTariff}
              className="w-full bg-secondary hover:bg-primary py-3 rounded transition font-semibold"
            >
              Сменить тариф
            </button>
            <button 
              onClick={handleSupport}
              className="w-full bg-gray-600 hover:bg-gray-700 py-3 rounded transition font-semibold"
            >
              Техподдержка
            </button>
          </div>
        </div>
      </div>

      <div className="bg-dark-800 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">История подключения</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-dark-700 rounded">
            <span>Подключение услуги</span>
            <span className="text-green-500 font-semibold">+15,000 ₸</span>
            <span className="text-gray-400">10.01.2024</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-dark-700 rounded">
            <span>Ежемесячный платеж</span>
            <span className="text-red-500 font-semibold">-15,000 ₸</span>
            <span className="text-gray-400">15.12.2023</span>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        title="Пополнение баланса"
      >
        <div className="space-y-4">
          <div>
            <label className="block mb-2">Сумма пополнения (₸)</label>
            <input 
              type="number"
              value={paymentAmount}
              onChange={(e) => setPaymentAmount(e.target.value)}
              className="w-full p-3 rounded bg-dark-700 border border-gray-600"
              placeholder="Введите сумму"
              min="100"
            />
          </div>
          <div className="flex space-x-3">
            <button 
              onClick={() => setPaymentAmount('1000')}
              className="flex-1 bg-gray-600 hover:bg-gray-700 py-2 rounded transition"
            >
              1,000 ₸
            </button>
            <button 
              onClick={() => setPaymentAmount('5000')}
              className="flex-1 bg-gray-600 hover:bg-gray-700 py-2 rounded transition"
            >
              5,000 ₸
            </button>
            <button 
              onClick={() => setPaymentAmount('10000')}
              className="flex-1 bg-gray-600 hover:bg-gray-700 py-2 rounded transition"
            >
              10,000 ₸
            </button>
          </div>
          <button 
            onClick={handlePayment}
            disabled={!paymentAmount || parseInt(paymentAmount) < 100}
            className="w-full bg-primary hover:bg-secondary py-3 rounded transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Пополнить на {paymentAmount || 0} ₸
          </button>
        </div>
      </Modal>
    </div>
  )
}
