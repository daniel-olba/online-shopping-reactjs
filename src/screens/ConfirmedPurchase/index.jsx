import React, { useState } from "react";
import { useCheckoutState } from "contexts/CheckoutContext";

// Components
import {
    Paper,
    Typography,
    Divider,
    Button,
    CssBaseline,
    List,
    ListItem,
    ListItemText,
} from "@material-ui/core";
import { Link } from "react-router-dom";

// Styles
import useStyles from "./styles";

const ConfirmedPurchase = () => {
    const styles = useStyles();
    const checkoutState = useCheckoutState();

    const { firstName, lastName } = checkoutState.values.shippingData;
    const { shippingItems } = checkoutState.values;

    const cartCost = shippingItems.reduce(
        (accumulator, currentVal) => accumulator + currentVal.cost,
        0
    );

    return (
        <CssBaseline>
            <div className={styles.toolbar} />
            <main className={styles.layout}>
                <Paper className={styles.paper}>
                    <div>
                        <Typography variant="h5" className={styles.title}>
                            Thank you for your purchase {firstName} {lastName}
                        </Typography>
                        <Divider className={styles.divider} />
                        <Typography variant="h6" gutterBottom>
                            Items bought:
                        </Typography>
                        <List disablePadding>
                            {shippingItems.map((item) => (
                                <ListItem
                                    style={{ padding: "10px 0" }}
                                    key={item.name}
                                >
                                    <ListItemText
                                        primary={item.name}
                                        secondary={`Quantity: ${item.quantity}`}
                                    />
                                    <Typography variant="body2">
                                        ${item.price}
                                    </Typography>
                                </ListItem>
                            ))}
                            <ListItem style={{ padding: "10px 0" }}>
                                <ListItemText primary="Total price:" />
                                <Typography
                                    variant="subtitle1"
                                    style={{ fontWeight: "700" }}
                                >
                                    ${cartCost}
                                </Typography>
                            </ListItem>
                        </List>
                    </div>
                    <br />
                    <Button
                        component={Link}
                        to="/"
                        variant="outlined"
                        type="button"
                    >
                        Home Page
                    </Button>
                </Paper>
            </main>
        </CssBaseline>
    );
};

export default ConfirmedPurchase;
