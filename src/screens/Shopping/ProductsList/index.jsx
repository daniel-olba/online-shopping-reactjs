import React from "react";
import { useShoppingState } from "contexts/ShoppingContext";

// Components
import { Grid } from "@material-ui/core";
import Product from "components/ProductItem";

// Styles
import useStyles from "./styles";

const ProductsList = () => {
    const styles = useStyles();
    const shoppingState = useShoppingState();

    const { products } = shoppingState.values;

    return (
        <main className={styles.content}>
            {/* self closing div to push the content down from navbar */}
            <div className={styles.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
};

export default ProductsList;
