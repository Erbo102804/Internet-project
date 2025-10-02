import React from 'react'

export default function Charts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <div className="bg-dark-800 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">Revenue Chart</h3>
        <div className="h-48 bg-dark-700 rounded flex items-center justify-center">
          <p className="text-gray-400">Chart Placeholder</p>
        </div>
      </div>
      
      <div className="bg-dark-800 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">Users Chart</h3>
        <div className="h-48 bg-dark-700 rounded flex items-center justify-center">
          <p className="text-gray-400">Chart Placeholder</p>
        </div>
      </div>
    </div>
  )
}
