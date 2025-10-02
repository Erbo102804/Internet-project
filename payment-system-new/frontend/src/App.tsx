import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard'
import Payments from './components/Payments'
import Users from './components/Users'
import Notifications from './components/Notifications'
import { useNotification } from './hooks/useNotification'

function AppContent() {
  const { notifications, addNotification } = useNotification()

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/payments" element={<Payments addNotification={addNotification} />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Layout>
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
