import React from "react";
import {FormControl, FormHelperText, OutlinedInput, Typography, Box, Button} from "@mui/material";
import {useNumberInput, useRequiredInput} from "../../hooks/form";
import {UserType} from "../../interfaces";

export type UserFormType = {
    userItem?: UserType
    onSubmit: (params: UserType) => void
}

export const UserForm = (props: UserFormType) => {
    const { userItem, onSubmit } = props
    const [nameProps, nameError] = useRequiredInput(
        userItem.fullName || '',
        'Full name is required')
    const [ageProps, ageError] = useNumberInput(
        userItem.age || '',
        'Age is required',
        'Age Number')
    const [addressProps, addressError] = useRequiredInput(
        userItem.address || '',
        'Address is required')
    const [phoneNumberProps, phoneNumberError] = useNumberInput(
        userItem.phoneNumber || '',
        'Phone Number is required',
        'Phone Number')

    const handleSubmitForm = () => {
        onSubmit({
            fullName: nameProps.value,
            age: Number(ageProps.value),
            address: addressProps.value,
            phoneNumber: Number(phoneNumberProps.value),
        })
    }

    return (
        <Box mt={4}>
            <FormControl style={{marginBottom: 20}} fullWidth error={!!nameError} required>
                <Typography variant="body1" color="textPrimary">
                    Full Name
                </Typography>
                <OutlinedInput {...nameProps} type="text" />
                <FormHelperText>{nameError}</FormHelperText>
            </FormControl>
            <FormControl style={{marginBottom: 20}} fullWidth error={!!ageError} required>
                <Typography variant="body1" color="textPrimary">
                    Age
                </Typography>
                <OutlinedInput {...ageProps} type="number" />
                <FormHelperText>{ageError}</FormHelperText>
            </FormControl>
            <FormControl style={{marginBottom: 20}} fullWidth error={!!addressError} required>
                <Typography variant="body1" color="textPrimary">
                    Address
                </Typography>
                <OutlinedInput {...addressProps} type="text" />
                <FormHelperText>{addressError}</FormHelperText>
            </FormControl>
            <FormControl style={{marginBottom: 20}} fullWidth error={!!phoneNumberError} required>
                <Typography variant="body1" color="textPrimary">
                    Phone Number
                </Typography>
                <OutlinedInput {...phoneNumberProps} type="text" />
                <FormHelperText>{phoneNumberError}</FormHelperText>
            </FormControl>

            <Box style={{paddingBottom: 40}} mt={4} display="flex" alignItems="center" justifyContent="center">
                <Button onClick={handleSubmitForm} size="large" color="primary" variant="contained">Submit</Button>
            </Box>
        </Box>
    )
}
