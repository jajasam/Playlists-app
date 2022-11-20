import { useState, useEffect } from "react"
import axios from 'axios'

function useAuth(code) {
    const [accessToken, setAccessToken] = useState("")
    const [refreshToken, setRefreshToken] = useState("")
    const [expiresIn, setExpiresIn] = useState("")

    useEffect(() => {
        axios
        .post('http://localhost:3001/login', {
            code
        })
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            window.location = ''
        })
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default useAuth
