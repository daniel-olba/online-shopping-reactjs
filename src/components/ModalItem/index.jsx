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

// Styles
import useStyles from "./styles";

const ModalItem = (props) => {
    const styles = useStyles();
    const shoppingState = useShoppingState();

    const { modalOpen, onClose } = props;
    const { cart } = shoppingState.values;
    const index = cart.findIndex(
        (el) => el.id === shoppingState.values.currentProductId
    );
    const product = cart[index];

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
                <CardContent>
                    <List disablePadding>
                        <ListItem style={{ padding: "10px 0" }} key={product.name}>
                            <ListItemText
                                primary={`Current item: ${product.name}`}
                                secondary={`Quantity: ${product.quantity}`}
                            />
                        </ListItem>
                        <ListItem style={{ padding: "10px 0" }}>
                            <ListItemText primary="Subtotal:" />
                            <Typography
                                variant="subtitle1"
                                style={{ fontWeight: "700" }}
                            >
                                ${product.price * product.quantity}
                            </Typography>
                        </ListItem>
                    </List>
                    {/* <Typography variant="h6" gutterBottom>
                        Current item: {product.name}
                    </Typography>
                    <ListItemText primary="Total:"/>
                    <Typography variant="h6" gutterBottom>
                        Subtotal: ${product.price * product.quantity}
                    </Typography> */}
                    <Typography variant="body1" color="textSecondary">
                        Please choose the amount you wish to add to your cart.
                    </Typography>
                </CardContent>
                <CardActions className={styles.cardActions}>
                    <div className={styles.buttons}>
                        <Button
                            type="button"
                            size="small"
                            onClick={() => {
                                if (product.quantity <= 1) {
                                    onClose();
                                    shoppingState.actions.setCart(
                                        cart.filter(
                                            (el) => el.id !== product.id
                                        )
                                    );
                                } else {
                                    shoppingState.actions.setCart([
                                        ...cart.slice(0, index),
                                        {
                                            ...product,
                                            quantity: cart[index].quantity - 1,
                                            cost:
                                                product.price *
                                                (cart[index].quantity - 1),
                                        },
                                        ...cart.slice(index + 1),
                                    ]);
                                }
                            }}
                        >
                            -
                        </Button>
                        <Typography>&nbsp;{product.quantity}&nbsp;</Typography>
                        <Button
                            type="button"
                            size="small"
                            onClick={() =>
                                shoppingState.actions.setCart([
                                    ...cart.slice(0, index),
                                    {
                                        ...product,
                                        quantity: cart[index].quantity + 1,
                                        cost:
                                            product.price *
                                            (cart[index].quantity + 1),
                                    },
                                    ...cart.slice(index + 1),
                                ])
                            }
                        >
                            +
                        </Button>
                    </div>
                    <Button
                        variant="contained"
                        type="button"
                        color="secondary"
                        onClick={() => {
                            onClose();
                            shoppingState.actions.setCart(
                                cart.filter((el) => el.id !== product.id)
                            );
                        }}
                    >
                        Remove
                    </Button>
                </CardActions>
            </Card>
        </Modal>
    );
};

export default ModalItem;
