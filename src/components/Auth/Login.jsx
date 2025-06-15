import React, { use, useState } from 'react'

const Login = ({handleLogin}) => {
    
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setemail("")
        setpassword("")
         
    }

    return (
        <div className='flex h-screen w-full items-center justify-center'>
            <div className='border-2 border-red-500 p-2 rounded-lg shadow-xs shadow-white'>
                <h1 className='text-center p-4 text-2xl font-bold mb-2'>Login Page</h1>
                <form
                    onSubmit={(e) => {
                        submitHandler(e) 
                     }}
                    className='flex flex-col items-center justify-center'>
                    <input
                        value={email}
                        onChange={(e) => {
                            setemail(e.target.value)
                            console.log(e.target.value);
                            
                        }}
                        required className='border px-4 w-80 placeholder:text-sm text-sm font-semibold hover:outline-amber-600 py-2 rounded-full m-1' type="email" placeholder='Enter your email' />
                    <input
                        value={password}
                        onChange={(e) => {
                            setpassword(e.target.value)
                            console.log(e.target.value);
                            
                        }}
                        required className='border px-4 w-80 placeholder:text-sm text-sm font-semibold outline-none py-2 rounded-full m-1' type="password" placeholder='Enter your password' />
                    <button className='m-4 border w-1/2 rounded-md bg-white text-black font-semibold hover:bg-amber-100 text-2xl py-2                    items-center flex justify-center'
                    >Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login