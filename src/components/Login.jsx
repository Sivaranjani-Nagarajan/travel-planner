import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Login = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()

    if(email === "siva@gmail.com" && password === '98765'){
      navigate('/')
    }
    else{
      setError("Invalid email or password")
    }
  }

  return (
    <section className='main'>
      <Navbar />
      <div className='about'>
      <h2 className='about-heading'>Login</h2>
        <form onSubmit={handleLogin} className='login-content'>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter your email id'/>
            <input value={password} onChange={(e) => setPassword(e.target.value)}  type="password" placeholder='Enter your password' />
            <button type='submit'>Login</button>
            {error && <p>{error}</p>}
        </form>
        </div>
        <Footer />
    </section>
  )
}

export default Login
