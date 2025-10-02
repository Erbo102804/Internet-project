import React from 'react'

export default function UserServices() {
  const currentService = {
    name: "Стандарт",
    speed: "10 Mbps",
    price: "15,000",
    status: "Активен",
    connected: "15.12.2023"
  }

  const availableTariffs = [
    {
      name: "Базовый",
      speed: "5 Mbps",
      price: "10,000",
      features: ["Для соцсетей и почты", "Безлимитный трафик"]
    },
    {
      name: "Премиум", 
      speed: "15 Mbps",
      price: "20,000",
      features: ["Максимальная скорость", "Приоритетная поддержка"]
    }
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Мои услуги</h1>

      <div className="bg-dark-800 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Текущий тариф</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p><strong>Название:</strong> {currentService.name}</p>
            <p><strong>Скорость:</strong> {currentService.speed}</p>
            <p><strong>Цена:</strong> {currentService.price} ₸/мес</p>
          </div>
          <div>
            <p><strong>Статус:</strong> <span className="text-green-500">{currentService.status}</span></p>
            <p><strong>Подключен:</strong> {currentService.connected}</p>
            <button className="mt-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition">
              Отключить услугу
            </button>
          </div>
        </div>
      </div>

      <div className="bg-dark-800 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Доступные тарифы</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {availableTariffs.map((tariff, index) => (
            <div key={index} className="border border-primary rounded-lg p-4">
              <h3 className="text-xl font-bold text-primary mb-2">{tariff.name}</h3>
              <p className="text-2xl font-bold mb-2">{tariff.speed}</p>
              <p className="text-secondary text-xl mb-3">{tariff.price} ₸/мес</p>
              <ul className="space-y-1 mb-4">
                {tariff.features.map((feature, idx) => (
                  <li key={idx} className="text-sm">✓ {feature}</li>
                ))}
              </ul>
              <button className="w-full bg-primary hover:bg-secondary py-2 rounded transition">
                Перейти на этот тариф
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
