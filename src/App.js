import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AddProduct from './components/AddProduct/AddProduct';
import Explore from './components/Explore/Explore';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';
import ManagaOrders from './components/ManageOrders/ManagaOrders';
import ManageProducts from './components/ManageProducts/ManageProducts';
import MapDirection from './components/MapDirection/MapDirection';
import MyOrders from './components/MyOrders/MyOrders';
import NotFound from './components/NotFound/NotFound';
import Payment from './components/Payment/Payment';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Purchase from './components/Purchase/Purchase';
import Register from './components/Register/Register';
import Review from './components/Review/Review';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
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
        <Route path='/myorders'>
          <MyOrders></MyOrders>
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
        <Route path='/products/purchase/placeorder'>
         <PlaceOrder></PlaceOrder>
       </Route>
        <PrivateRoute path='/products/purchase/:id'>
         <Purchase></Purchase>
       </PrivateRoute>
        <Route path='/addproduct'>
        <AddProduct></AddProduct>
        </Route>
        <Route path='/manageorders'>
        <ManagaOrders></ManagaOrders>
        </Route>
        <Route path='/manageproducts'>
        <ManageProducts></ManageProducts>
        </Route>
        <Route path='/makeadmin'>
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route path='**'>
        <NotFound></NotFound>
        </Route>
      </Switch>
      {/* <MapDirection></MapDirection> */}
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
