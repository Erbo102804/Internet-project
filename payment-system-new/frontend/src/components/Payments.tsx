import React from 'react'
import PaymentsTable from './PaymentsTable'
import PaymentForm from './PaymentForm'

export default function Payments() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Payments</h1>
      <PaymentForm />
      <PaymentsTable />
    </div>
  )
}
