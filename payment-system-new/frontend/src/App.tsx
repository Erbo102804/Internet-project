import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import AdminLayout from './components/AdminLayout'
import UserLayout from './components/UserLayout'
import Dashboard from './components/Dashboard'
import Payments from './components/Payments'
import Users from './components/Users'
import Services from './components/Services'
import UserDashboard from './components/UserDashboard'
import UserServices from './components/UserServices'
import UserPayments from './components/UserPayments'
import UserSupport from './components/UserSupport'
import ConfigTest from './components/ConfigTest'
import Notifications from './components/Notifications'
import { useNotification } from './hooks/useNotification'
import { useAuth } from './hooks/useAuth'

function AppContent() {
  const { notifications, addNotification } = useNotification()
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <div className="text-white text-xl">Загрузка...</div>
      </div>
    )
  }

  return (
    <>
      <Routes>
        <Route 
          path="/login" 
          element={user ? <Navigate to={user.role === 'admin' ? '/admin' : '/user'} replace /> : <Login />} 
        />
        <Route path="/config" element={<ConfigTest />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={
          <ProtectedRoute requiredRole="admin">
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          </ProtectedRoute>
        } />
        <Route path="/admin/payments" element={
          <ProtectedRoute requiredRole="admin">
            <AdminLayout>
              <Payments addNotification={addNotification} />
            </AdminLayout>
          </ProtectedRoute>
        } />
        <Route path="/admin/users" element={
          <ProtectedRoute requiredRole="admin">
            <AdminLayout>
              <Users />
            </AdminLayout>
          </ProtectedRoute>
        } />
        <Route path="/admin/services" element={
          <ProtectedRoute requiredRole="admin">
            <AdminLayout>
              <Services />
            </AdminLayout>
          </ProtectedRoute>
        } />

        {/* User Routes */}
        <Route path="/user" element={
          <ProtectedRoute requiredRole="user">
            <UserLayout>
              <UserDashboard />
            </UserLayout>
          </ProtectedRoute>
        } />
        <Route path="/user/services" element={
          <ProtectedRoute requiredRole="user">
            <UserLayout>
              <UserServices />
            </UserLayout>
          </ProtectedRoute>
        } />
        <Route path="/user/payments" element={
          <ProtectedRoute requiredRole="user">
            <UserLayout>
              <UserPayments />
            </UserLayout>
          </ProtectedRoute>
        } />
        <Route path="/user/support" element={
          <ProtectedRoute requiredRole="user">
            <UserLayout>
              <UserSupport />
            </UserLayout>
          </ProtectedRoute>
        } />

        {/* Redirect root */}
        <Route 
          path="/" 
          element={<Navigate to={user ? (user.role === 'admin' ? '/admin' : '/user') : '/login'} replace />} 
        />
      </Routes>
      <Notifications notifications={notifications} />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
