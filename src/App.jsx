import Header from "./components/Header";
import MyArticles from "./components/MyArticles";
import NavBar from "./components/NavBar";
import PayementHeader from "./components/PayementHeader";
import Login from "./components/Login";
import Register from "./components/Register";
import Profil from "./components/Profil";
import Orders from "./components/Orders";
import BookAddress from "./components/BookAddress";
import OrderItems from "./components/OrderItems";
import PopUpCnx from "./components/PopUpCnx";
import Favorite from "./components/Favorite";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PayementDelivery from "./components/PayementDelivery";


function App() {
  return (
    <Router> 
        <NavBar/>
        <Switch>
          <Route path="/profil">
            <Profil/>
          </Route>
          <Route path="/orders">
            <Orders/>
          </Route>
          <Route path="/bookAddress">
            <BookAddress/>
          </Route>
          <Route path="/favorite">
            <Favorite/>
          </Route>
          <Route path="/order/1">
            <OrderItems/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
