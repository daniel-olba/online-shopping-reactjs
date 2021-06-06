import React from "react";

// Components
import { useFormContext, Controller } from "react-hook-form";
import { TextField, Grid } from "@material-ui/core";

const FormInput = ({
    name,
    label,
    required,
    type,
    smGrid = 6,
    defaultValue,
}) => {
    const { control } = useFormContext();
    const isError = false;

    return (
        <Grid item xs={12} sm={smGrid}>
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
                        type={type}
                    />
                )}
            />
        </Grid>
    );
};

export default FormInput;
