import React from 'react'

export default function Services() {
  const tariffs = [
    {
      name: "Базовый",
      speed: "5 Mbps",
      price: "10,000",
      description: "Идеально для соцсетей, мессенджеров и почты",
      features: ["До 5 Mbps", "Безлимитный трафик", "Поддержка 24/7"]
    },
    {
      name: "Стандарт", 
      speed: "10 Mbps",
      price: "15,000",
      description: "Отлично для видео, онлайн-курсов и работы",
      features: ["До 10 Mbps", "Безлимитный трафик", "Приоритетная поддержка", "Стабильное соединение"]
    },
    {
      name: "Премиум",
      speed: "15 Mbps", 
      price: "20,000",
      description: "Максимальная скорость для любых задач",
      features: ["До 15 Mbps", "Безлимитный трафик", "Высший приоритет", "Гарантия скорости", "Персональный менеджер"]
    }
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Тарифы RuralNet</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {tariffs.map((tariff, index) => (
          <div key={index} className="bg-dark-800 rounded-lg p-6 border-2 border-primary">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-primary">{tariff.name}</h3>
              <div className="text-2xl font-bold my-2">{tariff.speed}</div>
              <div className="text-3xl font-bold text-secondary">{tariff.price} ₸/мес</div>
            </div>
            
            <p className="text-gray-300 text-sm mb-4 text-center">{tariff.description}</p>
            
            <ul className="space-y-2 mb-6">
              {tariff.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            
            <button className="w-full bg-primary hover:bg-secondary py-3 rounded-lg font-semibold transition">
              Подключить
            </button>
          </div>
        ))}
      </div>

      <div className="bg-dark-800 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">О проекте RuralNet</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-primary mb-2">Наша миссия</h3>
            <p className="text-gray-300">
              Создаём современный интернет для сельской местности. Обеспечиваем доступ к онлайн-образованию, 
              удалённой работе и цифровым сервисам на уровне городских стандартов.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary mb-2">Технологии</h3>
            <p className="text-gray-300">
              Используем комбинацию спутникового интернета Starlink и локальной радиосети Ubiquiti 
              для надежного покрытия в радиусе до 15 км без прокладки кабеля.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
