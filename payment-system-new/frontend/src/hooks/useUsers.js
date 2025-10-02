import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export function useUsers() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setUsers(data || [])
    } catch (error) {
      console.error('Error fetching users:', error)
    } finally {
      setLoading(false)
    }
  }

  const addUser = async (userData) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .insert([userData])
        .select()

      if (error) throw error
      setUsers(prev => [data[0], ...prev])
      return { success: true, data: data[0] }
    } catch (error) {
      console.error('Error adding user:', error)
      return { success: false, error }
    }
  }

  const updateUser = async (id, updates) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .update(updates)
        .eq('id', id)
        .select()

      if (error) throw error
      setUsers(prev => prev.map(user => user.id === id ? data[0] : user))
      return { success: true, data: data[0] }
    } catch (error) {
      console.error('Error updating user:', error)
      return { success: false, error }
    }
  }

  return { users, loading, fetchUsers, addUser, updateUser }
}
