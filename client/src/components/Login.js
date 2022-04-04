import React,{ useState, useEffect } from 'react'
import API from '../API'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    useEffect(() => {
        document.body.className = 'bodyLogin';
        return () => { document.body.className = ''; }
      });

    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('user') !== ''){
            navigate(`/user/${localStorage.getItem('user')}`)
        }
    },[])
    
    const loginUser = async (e) => {
        e.preventDefault();
        const payload = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        const response = await API.checkUser(payload);
        if(response.status === 200){
            localStorage.setItem('user',response.data.potentialUser._id);
            navigate(`/user/${response.data.potentialUser._id}`);
        }
        else{
            alert('Invalid email or password')
        }
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
                <input name = 'password' required type='password' placeholder = 'Password'/>
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

