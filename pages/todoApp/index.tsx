import React, {useState, useEffect} from "react";
import axios from "axios";
import {Box, Container, Typography, Paper, Button} from "@mui/material";
import Link from "next/link";

import ListUser from "../../components/todoApp/listUser";
import {UserType} from "../../interfaces";
import {Loading} from "../../components/common/loading";

const TodoPage = () => {
    const [users, setUsers] = useState<UserType[]>([])

    const fetchUserList = async () => {
        const res = await axios.get('http://61ab8c03264ec200176d4245.mockapi.io/api/v1/users')
        setUsers(res.data)
    }

    useEffect(() => {
        fetchUserList()
    },[])

    const handleDeleteUser = async (id: number) => {
        await axios.delete(`http://61ab8c03264ec200176d4245.mockapi.io/api/v1/users/${id}`)
        fetchUserList()
    }

    return (
        <Container component={Paper} maxWidth={false}>
                <Box mt={10}>
                    <Typography variant="h4">
                        To do app list user
                    </Typography>
                    <Box mt={6} mb={6}>
                        <Box display="flex" justifyContent="flex-end" mb={2}>
                            <Link href={'/todoApp/new'}>
                                <Button color="success" variant="contained">Create</Button>
                            </Link>
                        </Box>
                        <Loading loading={!users}>
                            <ListUser
                                list={users}
                                onDelete={handleDeleteUser}
                            />
                        </Loading>
                    </Box>
                </Box>
        </Container>
    )
}

export default TodoPage
