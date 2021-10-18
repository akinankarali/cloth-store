import React from 'react';
import '../style/app.css';
import Header from '../components/Header'
import Login from './Login'
import SignUp from './Signup'
import { Switch, Route } from 'react-router-dom'
import Card from '../components/Card'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Header}/>  
        <Route path="login" component={Login}/>  
        <Route path="signup" component={SignUp}/>  
      </Switch>
      <div className="content container mx-auto pt-12">
        <div className="cards-wrapper flex flex-wrap -mx-4 justify-center">
          <Card 
            title="Deneme Title"
            description= "Deneme Desc"
            currency= '£'
            price= {20.50}
            score= {5}
            category="Elektronic"
            isInCart= {true}
            img="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            />
          <Card 
            title='A Nice Dress'
            description= 'This dress made by cotton and beautiful'
            currency= '€'
            price= {99.99}
            score= {3.9}
            category= 'Clothes'
            isInCart= {false}
            img= 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=780&q=80'
            />
          <Card 
            title="Deneme Title"
            description= "Deneme Desc"
            currency= '$'
            price= {1000}
            score= {5}
            category="Elektronic"
            isInCart= {false}
            img="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2071&q=80"
            />
          <Card 
            title='A Nice Dress'
            description= 'This dress made by cotton and beautiful'
            currency= '$'
            price= {1000}
            score= {3.9}
            category= 'Clothes'
            isInCart= {false}
            img= 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2071&q=80'
            />
          <Card 
            title="Deneme Title"
            description= "Deneme Desc"
            currency= '£'
            price= {20.50}
            score= {5}
            category="Elektronic"
            isInCart= {true}
            img="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            />
          <Card 
            title='A Nice Dress'
            description= 'This dress made by cotton and beautiful'
            currency= '€'
            price= {99.99}
            score= {3.9}
            category= 'Clothes'
            isInCart= {false}
            img= 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=780&q=80'
            />
          <Card 
            title="Deneme Title"
            description= "Deneme Desc"
            currency= '£'
            price= {20.50}
            score= {5}
            category="Elektronic"
            isInCart= {false}
            img="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            />
          <Card 
            title='A Nice Dress'
            description= 'This dress made by cotton and beautiful'
            currency= '€'
            price= {99.99}
            score= {3.9}
            category= 'Clothes'
            isInCart= {false}
            img= 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=780&q=80'
            />
          <Card 
            title="Deneme Title"
            description= "Deneme Desc"
            currency= '£'
            price= {20.50}
            score= {5}
            category="Elektronic"
            isInCart= {true}
            img="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            />
            <Card 
            title='A Nice Dress'
            description= 'This dress made by cotton and beautiful'
            currency= '€'
            price= {99.99}
            score= {3.9}
            category= 'Clothes'
            isInCart= {false}
            img= 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=780&q=80'
            />
            <Card 
            title='A Nice Dress'
            description= 'This dress made by cotton and beautiful'
            currency= '€'
            price= {99.99}
            score= {3.9}
            category= 'Clothes'
            isInCart= {false}
            img= 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=780&q=80'
            />
            <Card 
            title='A Nice Dress'
            description= 'This dress made by cotton and beautiful'
            currency= '€'
            price= {99.99}
            score= {3.9}
            category= 'Clothes'
            isInCart= {false}
            img= 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=780&q=80'
            />
        </div>
      </div>
    
    </div>
  );
}

export default App;
