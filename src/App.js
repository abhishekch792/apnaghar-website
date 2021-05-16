import './App.css';
import {useEffect} from 'react';
import HomePage from './containers/HomePage';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ProductStore from './containers/ProductListPage/ProductStore';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn, updateCart } from './actions';
import ProductDetailsPage from './containers/ProductDetailsPage';
import OrderPage from "./containers/OrderPage";
import CartPage from './containers/CartPage';
import CheckoutPage from './containers/CheckoutPage';
import OrderDetailsPage from "./containers/OrderDetailsPage";


function App() {


  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if(!auth.authenticate){
      dispatch(isUserLoggedIn());
    }
  },[auth.authenticate]);

  useEffect(() => {
    dispatch(updateCart());
  },[auth.authenticate]);




  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/checkout" component={CheckoutPage} /> 
          <Route path="/order_details/:orderId" component={OrderDetailsPage} />     
          <Route path="/account/orders" component={OrderPage} />    
          <Route path="/:productSlug/:productId/p" component={ProductDetailsPage} />
          <Route path="/:slug" component={ProductStore} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
