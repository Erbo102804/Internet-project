import React from 'react'

export default function Notifications({ notifications }) {
  return (
    <div className="fixed top-4 right-4 space-y-2 z-50">
      {notifications.map(notification => (
        <div 
          key={notification.id}
          className={`p-4 rounded-lg shadow-lg ${
            notification.type === 'success' ? 'bg-green-500' :
            notification.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
          }`}
        >
          {notification.message}
        </div>
      ))}
    </div>
  )
}
