import React from 'react'
import PaymentsTable from './PaymentsTable'
import PaymentForm from './PaymentForm'
import Charts from './Charts'
import SearchBar from './SearchBar'
import StatsCard from './StatsCard'

export default function Dashboard() {
  const handleSearch = (query) => {
    console.log('Searching for:', query)
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatsCard 
          title="Total Revenue" 
          value="$12,426" 
          icon="💰"
          color="primary"
        />
        <StatsCard 
          title="Transactions" 
          value="1,234" 
          icon="💳"
          color="secondary"
        />
        <StatsCard 
          title="Active Users" 
          value="567" 
          icon="👥"
          color="dark"
        />
      </div>

      <Charts />
      <PaymentForm />
      <PaymentsTable />
    </div>
  )
}
