import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRegister, setIsRegister] = useState(false)
  const [name, setName] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { signUp, signIn } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (isRegister) {
        // Регистрация
        if (password !== confirmPassword) {
          alert('Пароли не совпадают')
          return
        }
        if (password.length < 6) {
          alert('Пароль должен быть не менее 6 символов')
          return
        }

        const result = await signUp(email, password, { name })
        
        if (result.success) {
          alert('Регистрация успешна! Проверьте email для подтверждения.')
          setIsRegister(false)
          setEmail('')
          setPassword('')
          setName('')
          setConfirmPassword('')
        } else {
          alert(`Ошибка регистрации: ${result.error.message}`)
        }
      } else {
        // Вход
        const result = await signIn(email, password)
        
        if (result.success) {
          // Успешный вход - редирект будет через useAuth hook
          console.log('Login successful, waiting for auth state change...')
        } else {
          alert(`Ошибка входа: ${result.error.message}`)
        }
      }
    } catch (error) {
      alert('Произошла ошибка')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-4">
      <div className="bg-dark-800 p-8 rounded-lg w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">RuralNet</h1>
          <p className="text-gray-400 mt-2">
            {isRegister ? 'Регистрация' : 'Вход в систему'}
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <div>
              <label className="block mb-2">Имя</label>
              <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded bg-dark-700 border border-gray-600 focus:border-primary outline-none"
                placeholder="Введите ваше имя"
                required
                disabled={loading}
              />
            </div>
          )}
          
          <div>
            <label className="block mb-2">Email</label>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded bg-dark-700 border border-gray-600 focus:border-primary outline-none"
              placeholder="user@example.com"
              required
              disabled={loading}
            />
          </div>
          
          <div>
            <label className="block mb-2">Пароль</label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded bg-dark-700 border border-gray-600 focus:border-primary outline-none"
              placeholder="••••••••"
              required
              disabled={loading}
            />
          </div>

          {isRegister && (
            <div>
              <label className="block mb-2">Подтвердите пароль</label>
              <input 
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 rounded bg-dark-700 border border-gray-600 focus:border-primary outline-none"
                placeholder="••••••••"
                required
                disabled={loading}
              />
            </div>
          )}

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-secondary py-3 rounded font-semibold transition disabled:opacity-50"
          >
            {loading ? 'Загрузка...' : (isRegister ? 'Зарегистрироваться' : 'Войти')}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button 
            onClick={() => setIsRegister(!isRegister)}
            className="text-primary hover:text-secondary transition"
            disabled={loading}
          >
            {isRegister ? 'Уже есть аккаунт? Войти' : 'Нет аккаунта? Зарегистрироваться'}
          </button>
        </div>

        <div className="mt-6 text-sm text-gray-400 border-t border-gray-700 pt-4">
          <p className="font-semibold mb-2">Используйте реальную регистрацию</p>
          <p>Система работает через Supabase Auth</p>
        </div>
      </div>
    </div>
  )
}
