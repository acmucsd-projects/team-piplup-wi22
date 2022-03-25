import React,{ useState, useEffect } from 'react'
import API from '../API'

export const Login = () => {
    useEffect(() => {
        document.body.className = 'bodyLogin';
        return () => { document.body.className = ''; }
      });

      
    const loginUser = async (e) => {
        e.preventDefault();
    }

    return (
    <>
    {/* Login Form */}

    
    <div className = 'containerLogin'>
    <div className = 'Login'>
        <div className = 'logtitle'>UCSD Events Finder</div>
        <form onSubmit = {loginUser} className = 'add-form'>
            <div className= 'form-control'>
                <label>Email</label>
                <input name = 'email' required type='text' placeholder = 'Enter Email'/>
            </div>
            <div className= 'form-control'>
                <label>Password</label>
                <input name = 'password' required type='text' placeholder = 'Password'/>
            </div>
            <button type="submit" className = 'loginbtn'>Login</button>
        </form>
    </div>

    {/* Create an Account Button*/}
    <div className = 'createacc'>
    <a href = "/create-account">Create an Account</a>
    </div>
    </div>
    </>
  )
}

export default Login;

