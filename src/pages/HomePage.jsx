import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../contexts/UserContext"
import Header from "../components/Header"

export default function HomePage () {

    const navigate = useNavigate();

    const { token } = useContext(UserContext);

    useEffect(() => {
        if (!token) {
            navigate('/');
        }
    }, []);

    return (
        <Header/>
    )

}

