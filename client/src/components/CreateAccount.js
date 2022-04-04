import React,{ useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import API from '../API'

export const CreateAccount = () => {
    useEffect(() => {
        document.body.className = 'bodyLogin';
        return () => { document.body.className = ''; }
    });

    const navigate = useNavigate();
    
    const createUser = async (e) => {
        e.preventDefault();
        const payload = {
            user: {
                firstName: e.target.firstname.value,
                lastName: e.target.lastname.value,
                email: e.target.email.value,
                password: e.target.password.value,
            }
        }
       const response = await API.createUser(payload);
       if(response.status === 200){
           navigate('/');
       }
       else{
           alert('Failed to create account');
       }
    }

    /* Password validation */
    const [disabled, setDisabled] = useState(true);

    const [passwords,setPasswords] = useState({password: '', rePassword: ''})

    const checkPass = (e) => {
        if(e.target.name === 'password'){
            passwords.password = e.target.value
        }
        else if(e.target.name === 'rePassword'){
            passwords.rePassword = e.target.value
        }
        if(passwords.password !== '' && passwords.rePassword !== '' && passwords.password === passwords.rePassword){
           setDisabled(false)
        }
        else{
            setDisabled(true)
        }
        setPasswords({...passwords})
    }

    
    return (
        <div className = 'containerLogin'>
        <div className = 'CreateAccount'>
            <div className='createaccTitle'>Create Account</div>
            <form className = 'add-form' onSubmit = {createUser}>
                <div className= 'form-control'>
                    <label>First Name*</label>
                    <input name = 'firstname' required type='text' placeholder = 'Enter First Name'/>
                </div>
                <div className= 'form-control'>
                    <label>Last Name*</label>
                    <input name = 'lastname' required type='text' placeholder = 'Enter Last Name'/>
                </div>
                <div className= 'form-control'>
                    <label>UCSD Email*</label>
                    <input name = 'email' required type='text' placeholder = 'Enter Email'/>
                </div>
                <div className= 'form-control'>
                    <label>Password*</label>
                    <input name = 'password' required type='password' placeholder = 'Password' onChange = {checkPass}/>
                </div>
                <div className= 'form-control'>
                    <label>Re-enter Password*</label>
                    <input name = 'rePassword' required type='password' placeholder = 'Re-type password' onChange = {checkPass}/>
                </div>
                    <button name = 'button' type="submit" className = 'createbtn' disabled = {disabled}>Create your account</button>
            </form>
            <div className = 'backtoLogin'>
                <div style={{marginBottom: "10px"}}>* Required Fields</div>
                <div>Already have an account?</div> 
                <a href='/'> Back to Login</a>
            </div> 
        </div>
        </div>
    )
}


export default CreateAccount;