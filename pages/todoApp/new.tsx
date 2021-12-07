import React from 'react'
import axios from "axios";
import {Box, Container, Paper, Typography} from "@mui/material";
import {useRouter} from "next/router";

import {UserForm} from "../../components/todoApp/userForm";
import {UserType} from "../../interfaces";

const UserNew = () => {
    const router = useRouter()

    const handleCreateUserItem = async (params: UserType) => {
        await axios.post('http://61ab8c03264ec200176d4245.mockapi.io/api/v1/users', params)
        router.push('/todoApp')
    }

    return (
        <Container component={Paper}>
            <Box mt={6}>
                <Typography variant="h3" component="h2">
                    To do App
                </Typography>
                <UserForm onSubmit={handleCreateUserItem}/>
            </Box>
        </Container>
    )
}

export default UserNew
