import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../main.jsx'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState()
  const navigate = useNavigate()
  const submit = async (e) => {
    e.preventDefault()

    try {
      await createUserWithEmailAndPassword(auth, email, password)
      navigate('/')
    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <div className='flex-1 flex flex-col gap-4 p-4 items-center justify-center'>
      <h1>Registrarse</h1>
      <form
        className='flex flex-col gap-4 max-w-xl border border-gray-400 shadow-md rounded-xl p-8'
        onSubmit={submit}
      >
        <div className='flex flex-col gap-2'>
          <label htmlFor='email'>Correo electrónico</label>
          <input
            type='email'
            id='email'
            className='border  rounded-lg  p-1 border-gray-600'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            className='border  rounded-lg  p-1 border-gray-600'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className='p-3 bg-black text-white rounded-lg'>
          Registrarse
        </button>
        {error && <span className='text-red-600'>{error}</span>}
      </form>
    </div>
  )
}

export default Register
