import React from "react";
import { useCheckoutState } from "contexts/CheckoutContext";

// Components
import { Typography, IconButton, Button } from "@material-ui/core";
import { Check } from "@material-ui/icons";

const ShippingDetails = () => {
    const checkoutState = useCheckoutState();

    const { shippingData } = checkoutState.values;

    return (
        <>
            <Typography variant="h6" gutterBottom style={{ margin: "20px 0" }}>
                Shipping Details
            </Typography>
            <Typography variant="body2">
                {shippingData.firstName} {shippingData.lastName}
            </Typography>
            <Typography variant="body2">{shippingData.email}</Typography>
            <Typography variant="body2">{shippingData.phone}</Typography>
            <Typography variant="body2">
                {shippingData.address}, {shippingData.postal}
            </Typography>
            <Typography variant="body2">
                {shippingData.shippingCountry}
            </Typography>
            <br />
            {checkoutState.values.shippingDetailsSaved ? (
                <Typography variant="button">
                    <IconButton
                        color="inherit"
                        aria-label="menu"
                    >
                        <Check />
                    </IconButton>
                    Details Saved
                </Typography>
            ) : (
                <Button
                    variant="outlined"
                    onClick={() => checkoutState.saveShippingDetails()}
                >
                    Save shipping details
                </Button>
            )}

            <br />
        </>
    );
};

export default ShippingDetails;
