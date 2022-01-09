import React from 'react'

interface Props {}

const Login = (props: Props) => {
  return <>
    <div>
      <div className="container w h-screen	flex justify-center align-middle m-auto">
        <div className="row flex flex-col justify-center w-1/4">
          <h1 className="mb-4 flex justify-center">Log In</h1>
          <div className="col-12 mt-4">
            <label>Mail</label>
            <input type="text" className='mt-2 border focus:outline-none flex justify-end w-full' />
          </div>
          <div className="col-12 mt-2">
            <label>Password</label>
            <input type="text" className='mt-2 border focus:outline-none flex justify-end w-full'/>
          </div>
          <button className="mt-4 p-1 border">Log In</button>
        </div>
      </div>
    </div>
  </>
}
export default Login
