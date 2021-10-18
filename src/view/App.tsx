import React, { useState, useEffect } from 'react';
import '../style/app.css';
import Header from '../components/Header'
import Login from './Login'
import SignUp from './Signup'
import { Switch, Route } from 'react-router-dom'
import Card from '../components/Card'
import { AxiosResponse } from 'axios'
import { IProductsData } from "../types/products.type"
import ProductsDataService from '../services/products.service'



function App() {
  const [products, setProducts] = useState<IProductsData[]>([]);
  
  useEffect(() => {
    ProductsDataService.getAll().then((response: AxiosResponse<IProductsData[]>) => {
      setProducts(response.data)
    })
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Header}/>  
        <Route path="login" component={Login}/>  
        <Route path="signup" component={SignUp}/>  
      </Switch>
      <div className="content container mx-auto pt-12">
        <div className="cards-wrapper flex flex-wrap -mx-4 justify-center">
          {products.map((product) => (
            <Card 
              key={product.id}
              title={product.title}
              description= {product.description}
              currency= '€'
              price= {product.price}
              score= {product.rating.rate}
              category={product.category}
              isInCart= {false}
              img={product.image}
            />
          ))}
        </div>
      </div>
    
    </div>
  );
}

export default App;
