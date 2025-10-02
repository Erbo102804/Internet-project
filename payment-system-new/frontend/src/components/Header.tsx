import React, { useState } from 'react'
import Modal from './Modal'

export default function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  return (
    <>
      <header className="bg-dark-800 p-4 mb-6 rounded-lg flex justify-between items-center">
        <h1 className="text-2xl font-bold">Payment System</h1>
        <div className="flex items-center space-x-4">
          <button className="bg-primary px-4 py-2 rounded">New Payment</button>
          <button 
            onClick={() => setIsProfileOpen(true)}
            className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center"
          >
            U
          </button>
        </div>
      </header>

      <Modal 
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        title="User Profile"
      >
        <div className="space-y-4">
          <p>Username: Admin</p>
          <p>Email: admin@payments.com</p>
          <button className="bg-primary w-full py-2 rounded">Logout</button>
        </div>
      </Modal>
    </>
  )
}
