import React from 'react'

export default function ConfigTest() {
  return (
    <div className="bg-dark-800 rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Конфигурация Supabase</h2>
      <div className="space-y-2">
        <p><strong>URL:</strong> {import.meta.env.VITE_SUPABASE_URL || 'Не настроен'}</p>
        <p><strong>Anon Key:</strong> {import.meta.env.VITE_SUPABASE_ANON_KEY ? 'Настроен' : 'Не настроен'}</p>
        <p><strong>Режим:</strong> {import.meta.env.MODE}</p>
      </div>
    </div>
  )
}
