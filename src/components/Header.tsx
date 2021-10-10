import React from 'react'
import { Link } from 'react-router-dom'


interface Props {
    
}

const Header = (props: Props) => {
    const categories = [
        "shirt",
        "sweats",
        "skirts"
     ]
    return (
        <div className="header container mx-auto flex justify-between">
            {/* logo */}
            <div className="logo">
                <Link to='/'>
                    <h1>Cloth Shop</h1>
                </Link>
               
            </div>
            {/* nav items */}
            <div className="nav-items flex items-center">
                {
                    categories.map((item, index) => <button className='ml-3 mr-3 text-xl' key={index} onClick={() => console.log(item)}>
                        { item }
                    </button>)
                }
            </div>
            <div className="login flex items-center pr-3 text-xl">
                <Link to='/login'>
                    <button className='ml-2 mr-2'>Log In</button>
                </Link>
                <Link to='/signup'>
                    <button className='ml-2 mr-2'>Sign Up</button>
               </Link>
            </div>
            {/* <div className="loggedIn">
                <button className='ml-1 mr-1'>Log Out</button>
                <p>PP</p>
            </div> */}
            {/* login signup */}
            {/* pp */}
        </div>
    )
}

export default Header