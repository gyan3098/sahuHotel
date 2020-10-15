import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

// import FoodItem from "./foods/components/FoodItem";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartItem from "./foods/pages/CartItem";
import OrderItem from "./foods/pages/OrderItem";
import ListOfFoods from "./foods/pages/ListOfFoods";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Auth from "./user/pages/Auth"
import "./App.css";



const App = () => {
  return (
    <Router>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <ListOfFoods />
        </Route>
        <Route path="/cart" exact>
          <CartItem />
        </Route>
        <Route path="/:mbId/orders" exact>
          <OrderItem />
        </Route>
        <Route path="/auth" exact>
          <Auth />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
