import React from "react";
import { useShoppingState } from "contexts/ShoppingContext";

// Components
import {
    Card,
    CardContent,
    CardActions,
    Typography,
    Modal,
    Button,
    List,
    ListItem,
    ListItemText,
} from "@material-ui/core";
import { Link } from "react-router-dom";

// Styles
import useStyles from "./styles";

const ModalItem = (props) => {
    const styles = useStyles();
    const shoppingState = useShoppingState();

    const { modalOpen, onClose } = props;
    const { cart } = shoppingState.values;
    // const index = cart.findIndex(
    //     (el) => el.id === shoppingState.values.currentProductId
    // );

    const cartCost = cart.reduce(
        (accumulator, currentVal) => accumulator + currentVal.cost,
        0
    );

    return (
        <Modal
            open={modalOpen}
            onClose={onClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            className={styles.modal}
            // disableBackdropClick
            // disableEscapeKeyDown
        >
            <Card className={styles.root}>
                <CardContent className={styles.cardContent}>
                    <div style={{ width: '100%' }}>
                        <Typography variant="h6" gutterBottom>
                            Order Summary
                        </Typography>
                        {!shoppingState.values.cart.length ? (
                            <>
                                <Typography variant="body1" gutterBottom>
                                    Your shopping cart is currently empty.
                                </Typography>
                                <Typography variant="body2">
                                    To add a product to your cart please click
                                    the add to cart button and select the amount
                                    you wish to add.
                                </Typography>
                            </>
                        ) : (
                            <List disablePadding>
                                {cart.map((item) => (
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
                                    <ListItemText primary="Total:" />
                                    <Typography
                                        variant="subtitle1"
                                        style={{ fontWeight: "700" }}
                                    >
                                        ${cartCost}
                                    </Typography>
                                </ListItem>
                            </List>
                        )}
                    </div>
                </CardContent>
                {shoppingState.values.cart.length ? (
                    <CardActions className={styles.cardActions}>
                        <Button
                            variant="contained"
                            type="button"
                            color="secondary"
                            onClick={() => {
                                onClose();
                                shoppingState.actions.setCart([]);
                            }}
                        >
                            Empty Cart
                        </Button>
                        <Button
                            variant="contained"
                            type="button"
                            color="primary"
                            onClick={() => {
                                onClose();
                            }}
                            component={Link}
                            to="/checkout"
                        >
                            Checkout
                        </Button>
                    </CardActions>
                ) : (
                    <></>
                )}
            </Card>
        </Modal>
    );
};

export default ModalItem;
