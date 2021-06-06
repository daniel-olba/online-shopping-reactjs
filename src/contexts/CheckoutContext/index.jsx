import { createContext, useContext, useState, useEffect } from "react";
import { useShoppingState } from "contexts/ShoppingContext";

// Components
import { countryList } from "utils/countryList";
import _ from "lodash";

const CheckoutContext = createContext();

const CheckoutContextProvider = (props) => {
    const shoppingState = useShoppingState();

    const [activeStep, setActiveState] = useState(0);

    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState("");
    const [shippingData, setShippingData] = useState({});
    const [shippingItems, setShippingItems] = useState([]);

    const [shippingPhone, setShippingPhone] = useState({});

    const [shippingDetailsSaved, setShippingDetailsSaved] = useState(false);

    useEffect(() => {
        setShippingCountries(countryList);
        setShippingData(JSON.parse(localStorage.getItem("shippingData")) || {});
    }, []);

    useEffect(() => {
        setShippingDetailsSaved(
            _.isEqual(
                JSON.parse(localStorage.getItem("shippingData")),
                shippingData
            )
        );
    }, [shippingData]);

    const confirmPurchase = () => {
        setShippingItems([...shoppingState.values.cart]);
        shoppingState.actions.setCart([]);
        setActiveState(0);
        setShippingCountry(shippingData.shippingCountry);
        setShippingData(JSON.parse(localStorage.getItem("shippingData")) || {});
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
                    shippingPhone
                },
                actions: {
                    setActiveState: (newState) => setActiveState(newState),
                    setShippingCountry: (newState) =>
                        setShippingCountry(newState),
                    setShippingData: (newState) => setShippingData(newState),
                    setShippingPhone: (newState) => setShippingPhone(newState),
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
