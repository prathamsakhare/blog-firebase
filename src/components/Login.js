import React from 'react'
import {auth, provider} from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './login.css';
const Login = ({setIsAuth}) => {

    let navigate = useNavigate()
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true)
            setIsAuth(true);
            navigate('/')
        })
    }
  return (
    <div className='login-page'>
        <p>Sign In with google to continue...</p>
        <button onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  )
}

export default Login