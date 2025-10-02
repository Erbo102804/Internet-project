import { useState } from 'react'

export function useNotification() {
  const [notifications, setNotifications] = useState([])

  const addNotification = (message, type = 'info') => {
    const id = Date.now()
    setNotifications(prev => [...prev, { id, message, type }])

    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id))
    }, 3000)
  }

  return { notifications, addNotification }
}
