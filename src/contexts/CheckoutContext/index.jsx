import { createContext, useContext, useState, useEffect } from "react";
import { useShoppingState } from "contexts/ShoppingContext";

// Components
import { countryList } from "utils/countryList";
import _ from "lodash";

const CheckoutContext = createContext();

const CheckoutContextProvider = (props) => {
    const initialShippingData =
        JSON.parse(localStorage.getItem("shippingData")) || {};

    const shoppingState = useShoppingState();

    const [activeStep, setActiveState] = useState(0);

    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState("");
    const [shippingData, setShippingData] = useState(initialShippingData);
    const [shippingItems, setShippingItems] = useState([]);

    const [shippingDetailsSaved, setShippingDetailsSaved] = useState(false);

    useEffect(() => {
        setShippingCountries(countryList);
    }, []);

    useEffect(() => {
        setShippingDetailsSaved(_.isEqual(initialShippingData, shippingData));
        console.log(
            `_.isEqual(initialShippingData, shippingData): `,
            _.isEqual(initialShippingData, shippingData)
        );
    }, [initialShippingData, shippingData]);

    const confirmPurchase = () => {
        setShippingItems([...shoppingState.values.cart]);
        shoppingState.actions.setCart([]);
        setActiveState(0);
        setShippingData(initialShippingData);
    };

    const saveShippingDetails = () => {
        localStorage.setItem("shippingData", JSON.stringify(shippingData));
        setShippingDetailsSaved(true);
    };

    return (
        <CheckoutContext.Provider
            value={{
                values: {
                    activeStep,
                    shippingCountries,
                    shippingCountry,
                    shippingData,
                    shippingItems,
                    shippingDetailsSaved,
                },
                actions: {
                    setActiveState: (newState) => setActiveState(newState),
                    setShippingCountry: (newState) =>
                        setShippingCountry(newState),
                    setShippingData: (newState) => setShippingData(newState),
                },
                confirmPurchase,
                saveShippingDetails,
            }}
        >
            {props.children}
        </CheckoutContext.Provider>
    );
};

const useCheckoutState = () => {
    const context = useContext(CheckoutContext);
    if (context === null) {
        throw new Error(
            "useCheckoutState must be used within an CheckoutContextProvider"
        );
    }
    return context;
};

export { CheckoutContextProvider, useCheckoutState };
