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
import Notifications from './components/Notifications'
import { useNotification } from './hooks/useNotification'

function AppContent() {
  const { notifications, addNotification } = useNotification()

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        
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

        {/* Redirect root to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
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
