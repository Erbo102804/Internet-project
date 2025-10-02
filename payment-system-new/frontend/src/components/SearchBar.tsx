import React, { useState } from 'react'

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search payments, users..."
          className="flex-1 p-3 rounded-l-lg bg-dark-700 border border-gray-600 focus:border-primary outline-none"
        />
        <button 
          type="submit"
          className="bg-primary px-6 rounded-r-lg hover:bg-secondary transition"
        >
          Search
        </button>
      </div>
    </form>
  )
}
