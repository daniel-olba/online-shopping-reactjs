import React, { useState } from "react";
import { useShoppingState } from "contexts/ShoppingContext";

// Components
import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import Modal from "components/ModalItem";

// Styles
import useStyles from "./styles";

const ProductItem = ({ product }) => {
    const styles = useStyles();
    const shoppingState = useShoppingState();
    const [modalOpen, setModalOpen] = useState(false);

    const { cart } = shoppingState.values;

    return (
        <>
            <Card className={styles.root}>
                <CardMedia
                    className={styles.media}
                    image={product.image}
                    title={product.name}
                />
                <CardContent>
                    <div className={styles.cardContent}>
                        <Typography variant="h6" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant="h6">${product.price}</Typography>
                    </div>
                    <Typography variant="body2" color="textSecondary">
                        {product.description}
                    </Typography>
                </CardContent>
                <CardActions
                    disableSpacing
                    className={styles.cardActions}
                    onClick={() => {
                        if (
                            cart.find(
                                (el) => el.id === product.id
                            )
                        ) {
                            const index = cart.findIndex(
                                (el) => el.id === product.id
                            );
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
                            ]);
                        } else {
                            shoppingState.actions.setCart([
                                ...cart,
                                {
                                    ...product,
                                    quantity: 1,
                                    cost: product.price,
                                },
                            ]);
                        }

                        shoppingState.actions.setCurrentProductId(product.id);
                        setModalOpen(true);
                    }}
                >
                    <IconButton aria-label="Add to Cart">
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
            </Card>
            {modalOpen && (
                <Modal
                    modalOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    product={product}
                />
            )}
        </>
    );
};

export default ProductItem;
