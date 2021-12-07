import React, {useState, useEffect} from "react"
import {useRouter} from "next/router";
import axios from "axios";
import {Container, Paper, Typography, Box} from "@mui/material";
import {UserForm} from "../../../components/todoApp/userForm";
import {UserType} from "../../../interfaces";

const UserEdit = () => {
    const router = useRouter()
    const { id } = router.query

    const [userItem, setUserItem] = useState<UserType>({
        fullName: '',
        age: 0,
        address: '',
        phoneNumber: 0
    })

    const fetchUserItem = async () => {
        const res = await axios.get(`http://61ab8c03264ec200176d4245.mockapi.io/api/v1/users/${id}`)
        setUserItem(res.data)
    }

    useEffect(() => {
        fetchUserItem()
    },[id])

    const handleUpdateUserItem = async (params: UserType) => {
        await axios.put(`http://61ab8c03264ec200176d4245.mockapi.io/api/v1/users/${id}`, params)
        router.push('/todoApp')
    }

    return (
        <Container component={Paper}>
            <Box mt={6}>
                <Typography variant="h3" component="h2">
                    To do App
                </Typography>
                <UserForm userItem={userItem} onSubmit={handleUpdateUserItem}/>
            </Box>
        </Container>
    )
}

export default UserEdit
