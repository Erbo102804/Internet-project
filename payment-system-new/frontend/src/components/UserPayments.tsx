import React from 'react'

export default function UserPayments() {
  const payments = [
    { id: 1, date: '15.12.2023', amount: '15,000', status: 'Оплачен', service: 'Стандарт' },
    { id: 2, date: '15.11.2023', amount: '15,000', status: 'Оплачен', service: 'Стандарт' },
    { id: 3, date: '15.10.2023', amount: '15,000', status: 'Оплачен', service: 'Стандарт' }
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Мои платежи</h1>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Баланс: 5,000 ₸</h2>
        <button className="bg-primary hover:bg-secondary px-6 py-3 rounded-lg font-semibold transition">
          Пополнить баланс
        </button>
      </div>

      <div className="bg-dark-800 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">История платежей</h2>
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="text-left p-2">ID</th>
              <th className="text-left p-2">Дата</th>
              <th className="text-left p-2">Сумма</th>
              <th className="text-left p-2">Услуга</th>
              <th className="text-left p-2">Статус</th>
            </tr>
          </thead>
          <tbody>
            {payments.map(payment => (
              <tr key={payment.id} className="border-b border-gray-700">
                <td className="p-2">{payment.id}</td>
                <td className="p-2">{payment.date}</td>
                <td className="p-2">{payment.amount} ₸</td>
                <td className="p-2">{payment.service}</td>
                <td className="p-2">
                  <span className="text-green-500">{payment.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
