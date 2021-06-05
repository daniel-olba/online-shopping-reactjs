import { createContext, useContext, useState, useEffect } from "react";
import faker from "faker";

const ShoppingContext = createContext();

const ShoppingContextProvider = (props) => {
    const [products, changeProducts] = useState([]);
    const [currentProductId, setCurrentProductId] = useState({});
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const productList = [];
        for (let _i = 0; _i < 5; _i++) {
            productList.push({
                id: faker.datatype.uuid(),
                name: faker.commerce.product(),
                description: faker.commerce.productDescription(),
                price: parseFloat(faker.commerce.price()),
                image: faker.image.image(),
                quantity: 0,
            });
        }
        changeProducts(productList);
    }, []);

    return (
        <ShoppingContext.Provider
            value={{
                values: { products, cart, currentProductId },
                actions: {
                    setCart: (newState) => setCart(newState),
                    setCurrentProductId: (newState) =>
                        setCurrentProductId(newState),
                },
            }}
        >
            {props.children}
        </ShoppingContext.Provider>
    );
};

const useShoppingState = () => {
    const context = useContext(ShoppingContext);
    if (context === null) {
        throw new Error(
            "useShoppingState must be used within an ShoppingContextProvider"
        );
    }
    return context;
};

export { ShoppingContextProvider, useShoppingState };
