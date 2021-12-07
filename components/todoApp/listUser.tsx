import * as React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
} from '@mui/material';
import Link from "next/link";

import { UserType } from '../../interfaces'

type Props = {
    list: UserType[]
    onDelete: (id: number) => void
}

const ListUser = ({ list, onDelete }: Props) => {

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" width="5%">id</TableCell>
                        <TableCell align="center" width="20%">Full name</TableCell>
                        <TableCell align="center" width="10%">Age</TableCell>
                        <TableCell align="center" width="30%">Address</TableCell>
                        <TableCell align="center" width="15%">Phone number</TableCell>
                        <TableCell align="center" width="20%"/>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center" component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="center">{row.fullName}</TableCell>
                            <TableCell align="center">{row.age}</TableCell>
                            <TableCell align="center">{row.address}</TableCell>
                            <TableCell align="center">{row.phoneNumber}</TableCell>
                            <TableCell align="center">
                                <Link href={`/todoApp/${row.id}/edit`}>
                                    <Button color="primary" variant="contained">Edit</Button>
                                </Link>
                                <Button onClick={() => onDelete(row.id)} style={{marginLeft: 10}} color="error" variant="contained">Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ListUser
