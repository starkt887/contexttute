import { Box, Button, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import AuthContext from '../context/AuthContext'


const Home = () => {
    const { isAuth, logout } = useContext(AuthContext)

    const [authValue, setAuthValue] = useState("false")

    const showVariable = () => {
        console.log(isAuth)
        setAuthValue(isAuth.toString())
    }
    return (
        <Box>
            <Typography variant='h4'>
                Welcome to home page
            </Typography>
            <Typography variant='h6'>
                Value:{authValue}
            </Typography>
            <Button variant='outlined' onClick={showVariable}>Show Context Variable</Button>
            <Button
                variant='contained'
                color='error'
                onClick={logout}>Logout</Button>

           
        </Box>
    )
}

export default Home