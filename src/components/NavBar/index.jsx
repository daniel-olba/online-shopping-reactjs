import React, { useState } from "react";
import { useShoppingState } from "contexts/ShoppingContext";

// Components
import {
    AppBar,
    Toolbar,
    IconButton,
    Badge,
    MenuItem,
    Menu,
    Typography,
} from "@material-ui/core";
import { ShoppingCart, Store } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import CartModal from "components/CartModal";

// Styles
import useStyles from "./styles";

const NavBar = () => {
    const styles = useStyles();
    const shoppingState = useShoppingState();
    const location = useLocation();

    const [modalOpen, setModalOpen] = useState(false);

    const { cart } = shoppingState.values;
    const cartItems = cart.reduce(
        (accumulator, currentVal) => accumulator + currentVal.quantity,
        0
    );

    return (
        <>
            <AppBar position="fixed" className={styles.appBar} color="inherit">
                <Toolbar>
                    {/* left side of the navbar - logo and name */}
                    <IconButton
                        className={styles.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <Store />
                    </IconButton>
                    <Typography
                        variante="h6"
                        className={styles.title}
                        color="inherit"
                        component={Link}
                        to="/"
                    >
                        Online Shopping
                    </Typography>
                    {/* right side of navbar */}
                    {location.pathname === "/" && (
                        <div className={styles.button}>
                            <IconButton
                                aria-label="Show cart items"
                                color="inherit"
                                onClick={() => setModalOpen(true)}
                            >
                                <Badge
                                    badgeContent={cartItems}
                                    color="secondary"
                                >
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            <CartModal
                modalOpen={modalOpen}
                onClose={() => setModalOpen(false)}
            />
        </>
    );
};

export default NavBar;
