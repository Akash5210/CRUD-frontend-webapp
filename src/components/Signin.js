import React from 'react';


export default function Signin() {
  return (
    <div className='login-page container'>
      <h2 className='text-center text-danger-emphasis'>Sign In</h2>
      <form className='form'>
        <div className='mb-3'>
          <input type='email' placeholder='Email' className='form-control' required  />
        </div>
        <div className='mb-3'>
          <input type='password' placeholder='Password' className='form-control' required  />
        </div>
        <div className='mb-4 row mx-0'>
          <button type='submit' className='login btn btn-primary py-2'>login</button>
        </div>
        <div className='d-flex justify-content-between'>
          <div><a href='#' className='text-decoration-none text-danger-emphasis'>Forget Password</a></div>
          <div><a href='#' className='text-decoration-none text-danger-emphasis'>Sign Up</a></div>
        </div>
      </form>
    </div>
  )
}
