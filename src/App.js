import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AddProduct from './components/AdminPanel/AddProduct/AddProduct';
import Explore from './components/Explore/Explore';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home';
import MakeAdmin from './components/AdminPanel/MakeAdmin/MakeAdmin';
import ManagaOrders from './components/AdminPanel/ManageOrders/ManagaOrders';
import ManageProducts from './components/AdminPanel/ManageProducts/ManageProducts';
import MyOrders from './components/Dashboard/MyOrders/MyOrders';
import NotFound from './components/NotFound/NotFound';
import Payment from './components/Dashboard/Payment/Payment';
import PurchaseForm from './components/PurchaseForm/PurchaseForm';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Purchase from './components/Purchase/Purchase';
import Register from './components/Register/Register';
import Review from './components/Dashboard/Review/Review';
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

        <PrivateRoute path='/payment'>
        <Payment></Payment>
        </PrivateRoute>

        <PrivateRoute path='/review'>
        <Review></Review>
        </PrivateRoute>

        <Route path='/register'>
        <Register></Register>
        </Route>

        <Route path='/products/purchase/PurchaseForm'>
         <PurchaseForm></PurchaseForm>
       </Route>

        <PrivateRoute path='/products/purchase/:id'>
         <Purchase></Purchase>
       </PrivateRoute>

        <PrivateRoute path='/addproduct'>
        <AddProduct></AddProduct>
        </PrivateRoute>

        <PrivateRoute path='/manageorders'>
        <ManagaOrders></ManagaOrders>
        </PrivateRoute>

        <PrivateRoute path='/manageproducts'>
        <ManageProducts></ManageProducts>
        </PrivateRoute>

        <PrivateRoute path='/makeadmin'>
          <MakeAdmin></MakeAdmin>
        </PrivateRoute>

        <Route path='**'>
        <NotFound></NotFound>
        </Route>
        
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
