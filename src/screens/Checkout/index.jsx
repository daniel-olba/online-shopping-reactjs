import React from "react";
import { useCheckoutState } from "contexts/CheckoutContext";

// Components
import {
    Paper,
    Stepper,
    Step,
    StepLabel,
    Typography,
    Divider,
    Button,
    CssBaseline,
} from "@material-ui/core";
import Shipping from "components/Checkout/Shipping";
import ShippingDetails from "components/Checkout/ShippingDetails";
import Summary from "components/Checkout/Summary";
import { Link } from 'react-router-dom';
import faker from "faker";

// Styles
import useStyles from "./styles";

const steps = ["Shipping details", "Order review"];

const Checkout = () => {
    const styles = useStyles();
    const checkoutState = useCheckoutState();

    const { activeStep } = checkoutState.values;

    return (
        <CssBaseline>
            <div className={styles.toolbar} />
            <main className={styles.layout}>
                <Paper className={styles.paper}>
                    <Typography variant="h5" className={styles.title}>
                        Checkout
                    </Typography>
                    <Stepper activeStep={activeStep} className={styles.stepper}>
                        {steps.map((step) => (
                            <Step key={faker.datatype.uuid()}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === 0 ? (
                        <Shipping />
                    ) : (
                        <>
                            <Summary />
                            <Divider />
                            <ShippingDetails />
                            <br />
                            <Divider />
                            <br />
                            <div className={styles.actionButtons}>
                                <Button
                                    variant="outlined"
                                    onClick={() =>
                                        checkoutState.actions.setActiveState(
                                            activeStep - 1
                                        )
                                    }
                                >
                                    Back
                                </Button>
                                <Button
                                    component={Link}
                                    to="/success"
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    onClick={() => checkoutState.confirmPurchase()}
                                >
                                    Complete
                                </Button>
                            </div>
                        </>
                    )}
                </Paper>
            </main>
        </CssBaseline>
    );
};

export default Checkout;
