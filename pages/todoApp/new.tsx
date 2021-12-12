import React, {useState} from 'react'
import axios from "axios";
import {Box, Container, Paper, Typography} from "@mui/material";
import {useRouter} from "next/router";

import {UserForm} from "../../components/todoApp/userForm";
import {UserType} from "../../interfaces";
import {Flash} from "../../components/common/alert";

const UserNew = () => {
    const router = useRouter()
    const [openFlash, setOpenFlash] = useState(false)
    const [typeFlash, setTypeFlash] = useState('')

    const handleCreateUserItem = async (params: UserType) => {
        try {
            setOpenFlash(true)
            setTypeFlash('success')
            await axios.post('http://61ab8c03264ec200176d4245.mockapi.io/api/v1/users', params)
            router.push('/todoApp')
        } catch (e) {
            setOpenFlash(true)
            setTypeFlash('error')
        }
    }

    return (
        <>
            <Container component={Paper}>
                <Box mt={6}>
                    <Typography variant="h4">
                        To do app new user
                    </Typography>
                    <UserForm onSubmit={handleCreateUserItem}/>
                </Box>
            </Container>
            <Flash
                isOpen={openFlash}
                handleClose={() => setOpenFlash(false)}
                type={typeFlash}
            />
        </>
    )
}

export default UserNew
