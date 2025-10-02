import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Header from './Header'

export default function Layout({ children }) {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Dashboard' },
    { path: '/payments', label: 'Payments' },
    { path: '/users', label: 'Users' }
  ]

  return (
    <div className="flex min-h-screen bg-dark-900 text-white">
      <aside className="w-64 bg-dark-800 p-4">
        <div className="mb-8">
          <h1 className="text-xl font-bold">PaySystem</h1>
        </div>
        <nav>
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`block p-3 rounded mb-2 ${
                location.pathname === item.path 
                  ? 'bg-primary' 
                  : 'hover:bg-primary hover:bg-opacity-50'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      
      <div className="flex-1">
        <div className="p-6">
          <Header />
          {children}
        </div>
      </div>
    </div>
  )
}
