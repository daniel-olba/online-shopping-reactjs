import React from "react";
import { useCheckoutState } from "contexts/CheckoutContext";

// Components
import {
    InputLabel,
    Select,
    MenuItem,
    FormControl,
    Button,
    Grid,
    Typography,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "components/CustomElements/FormInput";
import PhoneInput from "components/CustomElements/PhoneInput";
import { Link } from "react-router-dom";

// Styles
import useStyles from "./styles";

const Shipping = () => {
    const methods = useForm();
    const styles = useStyles();
    const checkoutState = useCheckoutState();

    const { activeStep, shippingCountries, shippingCountry, shippingData } =
        checkoutState.values;

    return (
        <>
            <Typography variant="h6" gutterBottom>
                Shipping Details
            </Typography>
            <FormProvider {...methods}>
                <form
                    onSubmit={methods.handleSubmit((data) => {
                        checkoutState.actions.setShippingData({
                            ...data,
                            shippingCountry,
                        });
                        checkoutState.actions.setActiveState(activeStep + 1);
                    })}
                >
                    <Grid container spacing={3}>
                        <FormInput
                            required
                            name="firstName"
                            label="First name"
                            type="text"
                            defaultValue={shippingData.firstName}
                        />
                        <FormInput
                            required
                            name="lastName"
                            label="Last name"
                            type="text"
                            defaultValue={shippingData.lastName}
                        />
                        <FormInput
                            required
                            name="email"
                            label="Email"
                            type="email"
                            defaultValue={shippingData.email}
                        />
                        <PhoneInput
                            required
                            name="phone"
                            label="Phone Number"
                            defaultValue={shippingData.phone}
                        />
                        <Grid item xs={12} sm={6}>
                            <FormControl className={styles.formControl}>
                                <InputLabel>Shipping Country *</InputLabel>
                                <Select
                                    required
                                    value={
                                        shippingCountry &&
                                        shippingCountry !== ""
                                            ? shippingCountry
                                            : shippingData.shippingCountry
                                    }
                                    fullWidth
                                    onChange={(e) =>
                                        checkoutState.actions.setShippingCountry(
                                            e.target.value
                                        )
                                    }
                                >
                                    {shippingCountries.map((country) => (
                                        <MenuItem
                                            key={country.id}
                                            value={country.name}
                                        >
                                            {country.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <FormInput
                            required
                            name="postal"
                            label="Postal code"
                            type="text"
                            defaultValue={shippingData.postal}
                        />
                        <FormInput
                            required
                            name="address"
                            label="Shipping Address"
                            type="text"
                            smGrid={12}
                            defaultValue={shippingData.address}
                        />
                    </Grid>
                    <br />
                    <div className={styles.buttons}>
                        <Button component={Link} to="/" variant="outlined">
                            Back
                        </Button>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Proceed
                        </Button>
                    </div>
                </form>
            </FormProvider>
        </>
    );
};

export default Shipping;
