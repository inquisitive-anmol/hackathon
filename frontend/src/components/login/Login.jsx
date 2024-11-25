import React from 'react'

const Login = () => {
  return (
    <div>
      <form action="#" method="post" className='justify-self-center p-8 border-2 grid-cols-1 g'>
        <h3 className=''>Sign in</h3>
        <input type="text" placeholder='User Name' className='border-b-2 '/><br />
        <input type="email" placeholder='@email' className='border-b-2 '/><br />
        <input type="text" placeholder='First Name' className='border-b-2 '/><br />
        <input type="text" placeholder='Last Name' className='border-b-2 '/><br />
        <input type="password" placeholder='Password' className='border-b-2 '/>
      </form>
    </div>
  )
}

export default Login
