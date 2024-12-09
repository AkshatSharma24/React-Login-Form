import React from 'react'
import { useState } from 'react'

export default function AuthForm() {

  const [isLogin, setisLogin] = useState(true)

  return (
    <div className='container'>
        <div className="form-container">
            <div className="form-toggle">
                <button className={isLogin ? 'active' : ""} onClick={()=> setisLogin(true)}>Login</button>
                <button className={!isLogin ? 'active' : ""} onClick={()=> setisLogin(false)}>SignUp</button>
            </div>
            {isLogin ? <>
            <div className="form">
              <h2>Login Form</h2>
              <input type='text' placeholder='E-mail'/>
              <input type='password' placeholder='Password'/>
              <button onClick={()=>
                alert("Login Successful")
              }>Login</button>
              <p>Not a Member? <a href='#' onClick={()=> setisLogin(false)}>SignUp Now</a></p>
            </div>
              </> : 
              <>
              <div className="form">
              <h2>SignUp Form</h2>
              <input type='text' placeholder='UserName' />
              <input type='text' placeholder='E-Mail'/>
              <input type='password' placeholder='Password'/>
              <button onClick={()=>
                alert("SignUp Successful")}>Sign UP</button>
              </div>
              </>}
        </div>
      
    </div>
  )
}
