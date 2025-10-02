import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export function usePayments() {
  const [payments, setPayments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPayments()
  }, [])

  const fetchPayments = async () => {
    try {
      const { data, error } = await supabase
        .from('payments')
        .select(`
          *,
          users (name, email)
        `)
        .order('created_at', { ascending: false })

      if (error) throw error
      setPayments(data || [])
    } catch (error) {
      console.error('Error fetching payments:', error)
    } finally {
      setLoading(false)
    }
  }

  const addPayment = async (paymentData) => {
    try {
      const { data, error } = await supabase
        .from('payments')
        .insert([paymentData])
        .select(`
          *,
          users (name, email)
        `)

      if (error) throw error
      setPayments(prev => [data[0], ...prev])
      return { success: true, data: data[0] }
    } catch (error) {
      console.error('Error adding payment:', error)
      return { success: false, error }
    }
  }

  return { payments, loading, fetchPayments, addPayment }
}
