import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AddProduct from './components/AddProduct/AddProduct';
import Explore from './components/Explore/Explore';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import Register from './components/Register/Register';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
        <Home></Home>
        </Route>
        <Route path='/home'>
        <Home></Home>
        </Route>
        <Route path='/explore'>
        <Explore></Explore>
        </Route>
        <Route path='/product'>
        <Product></Product>
        </Route>
        <Route path='/register'>
        <Register></Register>
        </Route>
        <Route path='/addproduct'>
        <AddProduct></AddProduct>
        </Route>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
