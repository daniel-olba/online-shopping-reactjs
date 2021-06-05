import React, { useState } from "react";

// Components
import {
    Paper,
    Stepper,
    Step,
    StepLabel,
    Typography,
    CircularProgress,
    Divider,
    Button,
} from "@material-ui/core";
import faker from "faker";

// Styles
import useStyles from "./styles";

const steps = ['Cart summary', 'Shipping address']

const Checkout = () => {
    const styles = useStyles();

    const [activeStep, setActiveState] = useState(0)

    return (
        <>
            <div className={styles.toolbar} />
            <main className={styles.layout}>
                <Paper className={styles.paper}>
                    <Typography variant="h5" className={styles.title}>Checkout</Typography>
                    <Stepper
                        activeStep={activeStep}
                        className={styles.stepper}
                    >
                        {steps.map((step) => (
                            <Step key={faker.datatype.uuid()}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Paper>
            </main>
        </>
    );
};

export default Checkout;
