import React from "react";

import { ShoppingContextProvider } from "contexts/ShoppingContext";
import { CheckoutContextProvider } from "contexts/CheckoutContext";

const ContextsMock = ({
    component,
    shoppingContextValue = {},
    checkoutContextValue = {},
}) => (
    <ShoppingContextProvider value={shoppingContextValue}>
        <CheckoutContextProvider value={checkoutContextValue}>
            {component}
        </CheckoutContextProvider>
    </ShoppingContextProvider>
);

export default ContextsMock;