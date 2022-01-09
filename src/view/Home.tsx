import React, { useState, useEffect } from 'react'
import Header from "../components/Header"
import Card from '../components/Card'
import ProductsDataService from '../services/products.service'
import Loader from '../components/Loader'
import { IProductsData } from '../types/products.type'
import { AxiosResponse } from 'axios'


const Home = () => {
    const [isLoading, setLoading] = useState(true)
    const [products, setProducts] = useState<IProductsData[]>([])
  
    useEffect(() => {
      ProductsDataService.getAll().then(
        (response: AxiosResponse<IProductsData[]>) => {
          //this setTimeout for watching loading animation. I will remove later.
          setTimeout(function(){ 
            setProducts(response.data)
            setLoading(false) //stop loading when data is fetched
           }, 350);
        }
      )
    }, [])
    return isLoading ? (< Loader/>) :  (
        <>
          <Header/>
            <div className="content container mx-auto pt-12">
                <div className="cards-wrapper flex flex-wrap -mx-4 justify-center">
                {products.map((product: IProductsData) => (
                    <Card
                    key={product.id}
                    title={product.title}
                    description={product.description}
                    currency="€"
                    price={product.price}
                    score={product.rating.rate}
                    category={product.category}
                    isInCart={false}
                    img={product.image}
                    />
                ))}
                </div>
            </div>  
        </>
    )
}

export default Home
