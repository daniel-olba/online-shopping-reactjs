import React from "react";
import { ShoppingContextProvider } from "contexts/ShoppingContext";
import { CheckoutContextProvider } from "contexts/CheckoutContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import NavBar from "components/NavBar";
import ProductsList from "screens/Shopping/ProductsList";
import Checkout from "screens/Checkout";
import ConfirmedPurchase from "screens/ConfirmedPurchase";

const App = () => {
    return (
        <Router>
            <ShoppingContextProvider>
                <CheckoutContextProvider>
                    <NavBar />
                    <Switch>
                        <Route exact path="/">
                            <ProductsList />
                        </Route>
                        <Route exact path="/checkout">
                            <Checkout />
                        </Route>
                        <Route exact path="/success">
                            <ConfirmedPurchase />
                        </Route>
                    </Switch>
                </CheckoutContextProvider>
            </ShoppingContextProvider>
        </Router>
    );
};

export default App;
