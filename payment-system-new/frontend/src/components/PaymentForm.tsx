import React, { useState } from 'react'

export default function PaymentForm() {
  const [amount, setAmount] = useState('')
  const [user, setUser] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Payment:', { amount, user })
    setAmount('')
    setUser('')
  }

  return (
    <div className="bg-dark-800 rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">Create Payment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">User</label>
          <input 
            type="text" 
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="w-full p-2 rounded bg-dark-700 border border-gray-600"
            placeholder="Enter user name"
          />
        </div>
        <div>
          <label className="block mb-2">Amount</label>
          <input 
            type="number" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 rounded bg-dark-700 border border-gray-600"
            placeholder="Enter amount"
          />
        </div>
        <button 
          type="submit"
          className="bg-primary hover:bg-secondary px-4 py-2 rounded transition"
        >
          Create Payment
        </button>
      </form>
    </div>
  )
}
