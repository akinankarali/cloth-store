import React from 'react'

interface Props {}

const Login = (props: Props) => {
  return <div>
    <div className="w-full h-screen flex items-center justify-center">
        <form className="w-full md:w-1/3 bg-white rounded-lg">
            <h2 className="text-3xl text-center text-gray-700 mb-4">Log In Form</h2>
            <div className="px-12 pb-10">
                <div className="w-full my-3">
                    <div className="flex items-center">
                        <i className='ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user'></i>
                        <input type='text' placeholder="Username or Mail"
                            className="-mx-6 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none" />
                    </div>
                </div>
                <div className="w-full my-3">
                    <div className="flex items-center">
                        <i className='ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock'></i>
                        <input type='password' placeholder="Password"
                            className="-mx-6 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none" />
                    </div>
                </div>
                
                <p>If you have not any account you should <a href="/signup" className="text-gray-500 text-lg"> Sign Up</a></p>
                <a href="#" className="text-xs text-gray-500 float-right mb-4">Forgot Password?</a>
                <button type="submit"
                    className="w-full py-2 rounded-full bg-white text-black focus:outline-none border border-black hover:bg-black hover:text-white">Log In</button>
          </div>
        </form>
    </div>
    
  </div>
}
export default Login
