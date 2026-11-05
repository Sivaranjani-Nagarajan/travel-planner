import React from 'react'
import Navbar from './Navbar'

const Signin = () => {
  return (
    <section>
        <Navbar />
        <h2>Signin</h2>

        <form>
            <label>Email Id: <input type="email" placeholder='Enter your email id'/></label>
            <label>Password: <input type="password" placeholder='Enter your password' /></label>
            <label>Password: <input type="password" placeholder='Confirm your password' /></label>
            <button>Login</button>
            <p>Unable to login? Register<span>Click here to Sign in</span></p>
        </form>
    </section>
  )
}

export default Signin
