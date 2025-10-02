import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Header from './Header'

export default function UserLayout({ children }) {
  const location = useLocation()
  const navigate = useNavigate()

  const navItems = [
    { path: '/user', label: 'Мой кабинет' },
    { path: '/user/services', label: 'Мои услуги' },
    { path: '/user/payments', label: 'Мои платежи' },
    { path: '/user/support', label: 'Поддержка' }
  ]

  const handleLogout = () => {
    localStorage.removeItem('userRole')
    localStorage.removeItem('isAuthenticated')
    navigate('/login')
  }

  return (
    <div className="flex min-h-screen bg-dark-900 text-white">
      <aside className="w-64 bg-dark-800 p-4">
        <div className="mb-8">
          <h1 className="text-xl font-bold">RuralNet</h1>
          <p className="text-sm text-blue-400">Пользователь</p>
        </div>
        <nav className="mb-4">
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
        <button 
          onClick={handleLogout}
          className="w-full bg-red-600 hover:bg-red-700 py-2 rounded transition"
        >
          Выйти
        </button>
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
