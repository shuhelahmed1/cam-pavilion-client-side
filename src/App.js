import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AddProduct from './components/AddProduct/AddProduct';
import Explore from './components/Explore/Explore';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Payment from './components/Payment/Payment';
import Product from './components/Product/Product';
import Purchase from './components/Purchase/Purchase';
import Register from './components/Register/Register';
import Review from './components/Review/Review';

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
        <Route path='/payment'>
        <Payment></Payment>
        </Route>
        <Route path='/review'>
        <Review></Review>
        </Route>
        <Route path='/register'>
        <Register></Register>
        </Route>
        <Route path="/products/:id">
         <Purchase></Purchase>
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
