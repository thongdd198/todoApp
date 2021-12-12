import React, {useState, useEffect} from "react"
import {useRouter} from "next/router";
import axios from "axios";
import {Container, Paper, Typography, Box} from "@mui/material";

import {UserForm} from "../../../components/todoApp/userForm";
import {UserType} from "../../../interfaces";
import {Loading} from "../../../components/common/loading";
import {Flash} from "../../../components/common/alert";

const UserEdit = () => {
    const router = useRouter()
    const { id } = router.query

    const [userItem, setUserItem] = useState<UserType>()
    const [openFlash, setOpenFlash] = useState(false)
    const [typeFlash, setTypeFlash] = useState('')

    const fetchUserItem = async () => {
        try {
            const res = await axios.get(`https://61ab8c03264ec200176d4245.mockapi.io/api/v1/users/${id}`)
            setUserItem(res.data)
        } catch (e) {
            setOpenFlash(true)
            setTypeFlash('error')
        }

    }

    useEffect(() => {
        fetchUserItem()
    },[id])

    const handleUpdateUserItem = async (params: UserType) => {
        try {
            setOpenFlash(true)
            setTypeFlash('success')
            await axios.put(`https://61ab8c03264ec200176d4245.mockapi.io/api/v1/users/${id}`, params)
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
                        To do app edit user
                    </Typography>
                    <Loading loading={!userItem}>
                        {userItem && <UserForm userItem={userItem} onSubmit={handleUpdateUserItem}/>}
                    </Loading>
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

export default UserEdit
