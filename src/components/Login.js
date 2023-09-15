import React, { useState } from 'react'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

  return (
    <div>
        <div className='absolute'>
            <img alt='movies_logo' src='https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/2c17db1a-f126-40bd-b221-2b0621a73467/CA-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg' />
        </div>
        <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
            <h1 className='font-bold text-3xl py-4 text-center'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
            {!isSignInForm && <input 
                type='text' 
                placeholder='Full Name' 
                className='p-4 my-4 w-full bg-gray-700 rounded-lg' 
            />}
            <input 
                type='text' 
                placeholder='Email Address' 
                className='p-4 my-4 w-full bg-gray-700 rounded-lg' 
            />
            <input 
                type='text' 
                placeholder='Password' 
                className='p-4 my-4 w-full bg-gray-700 rounded-lg' 
            />
            <button 
                className='p-4 my-6 w-full bg-red-500 rounded-lg'
            >
                {isSignInForm ? 'Sign In' : 'Sign Up'}
            </button>
            <p className='py-4 hover:cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix? Please sign up': 'Already registered? Sign in now'}</p>
        </form>
    </div>
  )
}

export default Login;