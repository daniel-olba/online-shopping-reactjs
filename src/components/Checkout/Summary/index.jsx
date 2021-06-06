import React from "react";
import { useShoppingState } from "contexts/ShoppingContext";

// Components
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";

const Summary = () => {
    const shoppingState = useShoppingState();

    const { cart } = shoppingState.values;
    const cartCost = cart.reduce(
        (accumulator, currentVal) => accumulator + currentVal.cost,
        0
    );

    return (
        <>
            <Typography variant="h6" gutterBottom>
                Order Summary
            </Typography>
            <List disablePadding>
                {cart.map((item) => (
                    <ListItem style={{ padding: "10px 0" }} key={item.name}>
                        <ListItemText
                            primary={item.name}
                            secondary={`Quantity: ${item.quantity}`}
                        />
                        <Typography variant="body2">${item.price}</Typography>
                    </ListItem>
                ))}
                <ListItem style={{ padding: "10px 0" }}>
                    <ListItemText primary="Total:"/>
                    <Typography variant="subtitle1" style={{ fontWeight: '700'}}>${cartCost}</Typography>
                </ListItem>
            </List>
        </>
    );
};

export default Summary;
