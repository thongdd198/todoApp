import React from 'react'
import { CircularProgress } from '@mui/material'
import styled from "@emotion/styled";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

type LoadingProps = {
    loading: boolean
}

export const Loading: React.FC<LoadingProps> = ({ loading, children }) => {
    if (loading) {
        return (
            <Wrapper>
                <CircularProgress />
            </Wrapper>
        )
    }
    return <>{children}</>
}
