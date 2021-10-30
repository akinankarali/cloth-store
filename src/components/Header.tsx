import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import ProductsDataService from '../services/products.service'
import { AxiosResponse } from 'axios'

interface Props {}

const Header = (props: Props) => {


  const [categories, setCategories] = useState<[]>([])
  const [categoryItems, setCategoryItems] = useState<[]>([])

  useEffect(() => {
    ProductsDataService.getAllCategories().then(
      (response: AxiosResponse<[]>) => {
        setCategories(response.data)
      }
    )
  }, [])

  const categoryRequest = useCallback((item) => {
     ProductsDataService.getSpesificCategory(item).then(
      (response: AxiosResponse<[]>) => {
        setCategoryItems(response.data)
      }
    )
}, []);
  
  return (
    <div className="header container mx-auto grid grid-cols-3 gap-4 border-b border-black sm:h-24 md:h-20 ">
      {/* logo */}
      <div className="logo p-4 text-3xl flex items-center justify-start">
        <Link to="/">
          <h1>Cloth Shop</h1>
        </Link>
      </div>
      {/* nav items */}
      <div className="nav-items flex items-center justify-center">
        {categories.map((item, index) => (
          <button
            className="ml-3 mr-3 text-xl"
            key={index}
            onClick={() => {categoryRequest(item)}}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="login flex items-center pr-5 text-xl justify-end">
        <Link to="/login">
          <Button variant="primary">Log In</Button>
        </Link>
        <Link to="/signup">
          <Button variant="primary">Sign Up</Button>
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
