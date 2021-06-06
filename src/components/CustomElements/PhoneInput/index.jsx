import React from "react";

// Components
import { useFormContext, Controller } from "react-hook-form";
import { TextField, Grid } from "@material-ui/core";

const phoneRegex = /^[0-9]*$/;

const FormInput = ({ name, label, required, defaultValue }) => {
    const { control } = useFormContext();
    const isError = false;

    return (
        <Grid item xs={12} sm={6}>
            <Controller
                name={name}
                control={control}
                defaultValue={defaultValue !== undefined ? defaultValue : ""}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label={label}
                        error={isError}
                        required={required}
                        fullWidth
                        type="tel"
                        inputProps={{
                            maxLength: 10,
                        }}
                        onChange={(e) => {
                            if (phoneRegex.test(e.target.value)) {
                                field.onChange(e.target.value);
                            }
                        }}
                    />
                )}
            />
        </Grid>
    );
};

export default FormInput;
