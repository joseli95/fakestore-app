import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../main.jsx'
import { Navigate } from 'react-router-dom'

const Auth = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }

      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  if (loading) {
    return <span>Cargando...</span>
  }

  if (!user) {
    return <Navigate to='/login' />
  }
  return <>{children}</>
}

export default Auth
