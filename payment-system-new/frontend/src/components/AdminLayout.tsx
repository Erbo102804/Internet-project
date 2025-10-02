import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Header from './Header'

export default function AdminLayout({ children }) {
  const location = useLocation()
  const navigate = useNavigate()

  const navItems = [
    { path: '/admin', label: 'Дашборд' },
    { path: '/admin/payments', label: 'Платежи' },
    { path: '/admin/users', label: 'Пользователи' },
    { path: '/admin/services', label: 'Услуги' }
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
          <h1 className="text-xl font-bold">RuralNet Admin</h1>
          <p className="text-sm text-green-500">Администратор</p>
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
