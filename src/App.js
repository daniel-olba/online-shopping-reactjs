import React from "react";
import { ShoppingContextProvider } from "contexts/ShoppingContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import NavBar from "components/NavBar";
import ProductsList from "screens/Shopping/ProductsList";
import Checkout from "screens/Checkout";

const App = () => {
    return (
        <Router>
            <ShoppingContextProvider>
                <NavBar />
                <Switch>
                    <Route exact path="/">
                        <ProductsList />
                    </Route>
                    <Route exact path="/checkout">
                        <Checkout />
                    </Route>
                    <Route exact path="/purchase"></Route>
                </Switch>
            </ShoppingContextProvider>
        </Router>
    );
};

export default App;
