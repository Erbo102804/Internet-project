import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export function useAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkUser()
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('Auth event:', event, session)
      if (session?.user) {
        await fetchUserProfile(session.user.id)
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  const checkUser = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession()
      if (session?.user) {
        await fetchUserProfile(session.user.id)
      }
    } catch (error) {
      console.error('Error checking user:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchUserProfile = async (userId) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single()

      if (error) {
        console.log('Profile not found, creating...')
        // Если профиль не найден, создаем его
        if (error.code === 'PGRST116') {
          await createUserProfile(userId)
          return
        }
        throw error
      }
      
      console.log('User profile:', data)
      setUser({
        id: userId,
        email: data.email,
        name: data.name,
        role: data.role,
        balance: data.balance,
        tariff: data.tariff
      })
    } catch (error) {
      console.error('Error fetching user profile:', error)
    }
  }

  const createUserProfile = async (userId) => {
    try {
      const { data: { user: authUser } } = await supabase.auth.getUser()
      
      const { data, error } = await supabase
        .from('profiles')
        .insert([
          {
            id: userId,
            email: authUser.email,
            name: authUser.user_metadata?.name || 'Новый пользователь',
            role: 'user',
            balance: 0,
            tariff: 'basic',
            status: 'active'
          }
        ])
        .select()
        .single()

      if (error) throw error

      console.log('Created profile:', data)
      setUser({
        id: userId,
        email: data.email,
        name: data.name,
        role: data.role,
        balance: data.balance,
        tariff: data.tariff
      })
    } catch (error) {
      console.error('Error creating user profile:', error)
    }
  }

  const signUp = async (email, password, userData) => {
    try {
      console.log('Signing up:', email, userData)
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name: userData.name
          },
          emailRedirectTo: `${window.location.origin}/user`
        }
      })

      if (error) throw error
      
      console.log('Sign up success:', data)
      return { success: true, data }
    } catch (error) {
      console.error('Sign up error:', error)
      return { success: false, error }
    }
  }

  const signIn = async (email, password) => {
    try {
      console.log('Signing in:', email)
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error
      
      console.log('Sign in success:', data)
      return { success: true, data }
    } catch (error) {
      console.error('Sign in error:', error)
      return { success: false, error }
    }
  }

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      
      setUser(null)
      return { success: true }
    } catch (error) {
      console.error('Sign out error:', error)
      return { success: false, error }
    }
  }

  return {
    user,
    loading,
    signUp,
    signIn,
    signOut,
  }
}
