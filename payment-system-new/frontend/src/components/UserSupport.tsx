import React from 'react'

export default function UserSupport() {
  const supportContacts = [
    {
      method: "WhatsApp",
      contact: "+7 777 123 4567",
      link: "https://wa.me/77771234567",
      description: "Быстрая поддержка в мессенджере"
    },
    {
      method: "Телефон",
      contact: "+7 7172 123 456",
      link: "tel:+77172123456", 
      description: "Круглосуточная телефонная линия"
    },
    {
      method: "Email",
      contact: "support@ruralnet.kz",
      link: "mailto:support@ruralnet.kz",
      description: "Поддержка по техническим вопросам"
    }
  ]

  const faq = [
    {
      question: "Как подключить интернет?",
      answer: "Оставьте заявку через наш сайт или позвоните по телефону поддержки. Наш специалист приедет для установки оборудования."
    },
    {
      question: "Что делать если пропал интернет?",
      answer: "Проверьте подключение оборудования к питанию. Если проблема не решена - свяжитесь с поддержкой по телефону или WhatsApp."
    },
    {
      question: "Как сменить тариф?",
      answer: "В личном кабинете перейдите в раздел 'Мои услуги' и выберите новый тариф. Изменения вступят в силу со следующего месяца."
    }
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Поддержка</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {supportContacts.map((contact, index) => (
          <div key={index} className="bg-dark-800 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-primary mb-2">{contact.method}</h3>
            <a 
              href={contact.link}
              target={contact.method === "WhatsApp" ? "_blank" : "_self"}
              className="text-2xl font-bold hover:text-secondary transition block mb-2"
            >
              {contact.contact}
            </a>
            <p className="text-gray-300 text-sm">{contact.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-dark-800 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Часто задаваемые вопросы</h2>
        <div className="space-y-4">
          {faq.map((item, index) => (
            <div key={index} className="border-b border-gray-700 pb-4">
              <h3 className="text-lg font-semibold text-primary mb-2">{item.question}</h3>
              <p className="text-gray-300">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-dark-800 rounded-lg p-6 mt-6">
        <h2 className="text-2xl font-semibold mb-4">Техническая информация</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2">Время работы поддержки:</h4>
            <p className="text-gray-300">Круглосуточно, 24/7</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Среднее время ответа:</h4>
            <p className="text-gray-300">WhatsApp: 5-10 минут</p>
            <p className="text-gray-300">Телефон: 1-3 минуты</p>
          </div>
        </div>
      </div>
    </div>
  )
}
