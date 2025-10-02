import React from 'react'

export default function PaymentsTable() {
  const payments = [
    { id: 1, user: 'John Doe', amount: '$150', status: 'Completed', date: '2024-01-15' },
    { id: 2, user: 'Jane Smith', amount: '$200', status: 'Pending', date: '2024-01-14' },
    { id: 3, user: 'Bob Johnson', amount: '$75', status: 'Failed', date: '2024-01-13' }
  ]

  return (
    <div className="bg-dark-800 rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Recent Payments</h2>
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-600">
            <th className="text-left p-2">ID</th>
            <th className="text-left p-2">User</th>
            <th className="text-left p-2">Amount</th>
            <th className="text-left p-2">Status</th>
            <th className="text-left p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map(payment => (
            <tr key={payment.id} className="border-b border-gray-700">
              <td className="p-2">{payment.id}</td>
              <td className="p-2">{payment.user}</td>
              <td className="p-2">{payment.amount}</td>
              <td className="p-2">
                <span className={`px-2 py-1 rounded ${
                  payment.status === 'Completed' ? 'bg-green-500' :
                  payment.status === 'Pending' ? 'bg-yellow-500' : 'bg-red-500'
                }`}>
                  {payment.status}
                </span>
              </td>
              <td className="p-2">{payment.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
