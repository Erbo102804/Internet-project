import React from 'react'

export default function StatsCard({ title, value, icon, color = 'primary' }) {
  const colorClasses = {
    primary: 'bg-primary',
    secondary: 'bg-secondary', 
    dark: 'bg-dark-800'
  }

  return (
    <div className={`${colorClasses[color]} p-6 rounded-lg`}>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm opacity-80">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        <div className="text-2xl">
          {icon}
        </div>
      </div>
    </div>
  )
}
