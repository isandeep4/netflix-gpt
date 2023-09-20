import React, { useRef, useState } from 'react';
import {checkValidation} from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const Login = () => {
    const navigate = useNavigate();
    const [isSignInForm, setIsSignInForm] = useState(true);
    const[errorMessage, setErrorMessage] = useState(null);
    
    const fullName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    

    const handleButtonClick = () => {
        // Validate the form data
        const errorMessage = checkValidation(fullName?.current?.value, email.current.value, password.current.value);
        setErrorMessage(errorMessage);
        if(errorMessage) return;

        if(!isSignInForm){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate("/browse");  

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                navigate("/");
                setErrorMessage(errorCode+errorMessage);
            });
        } 
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+errorMessage);
            });
        }
    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

  return (
    <div>
        <Header />
        <div className='absolute'>
            <img alt='movies_logo' src='https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/2c17db1a-f126-40bd-b221-2b0621a73467/CA-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg' />
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
            <h1 className='font-bold text-3xl py-4 text-center'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
            {errorMessage && <p className='font-bold text-red-500'>{errorMessage}</p>}
            {!isSignInForm && 
            <input
                ref={fullName}
                type='text' 
                placeholder='Full Name' 
                className='p-4 my-4 w-full bg-gray-700 rounded-lg' 
            />}
            <input 
                ref={email}
                type='text' 
                placeholder='Email Address' 
                className='p-4 my-4 w-full bg-gray-700 rounded-lg' 
                
            />
            <input 
                ref={password}
                type='text' 
                placeholder='Password' 
                className='p-4 my-4 w-full bg-gray-700 rounded-lg' 
            />
            <button 
                className='p-4 my-6 w-full bg-red-500 rounded-lg'
                onClick={handleButtonClick}
            >
                {isSignInForm ? 'Sign In' : 'Sign Up'}
            </button>
            <p className='py-4 hover:cursor-pointer' 
                onClick={toggleSignInForm}
            >
            {isSignInForm ? 'New to Netflix? Please sign up': 'Already registered? Sign in now'}
            </p>
        </form>
    </div>
  )
}

export default Login;