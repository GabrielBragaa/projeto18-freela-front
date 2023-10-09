import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import Logo from "../components/Logo";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";

export default function LoginPage () {

    const navigate = useNavigate();

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    const { setToken } = useContext(UserContext);

    useEffect(() => {
        if(localStorage.getItem('data')){
            const data = JSON.parse(localStorage.getItem("data"));
            const URLPost = `${import.meta.env.VITE_API_URL}/`;
            const bodyPost = { email:data.email, password: data.password };

            axios.post(URLPost, bodyPost)
                .then(response => {
                    console.log(response.data)
                    setToken(response.data);
                    localStorage.setItem('token', response.data)
                    navigate('/home');
                })
                .catch(err => {
                    console.log(err)
                });
        }
    }, [])

    

    function login(e) {
        e.preventDefault();

        const URL = `${import.meta.env.VITE_API_URL}/`;
        const body = { email, password };

        axios.post(URL, body)
            .then(response => {
                console.log(response.data)
                setToken(response.data);
                localStorage.setItem('token', response.data)
                navigate('/home');
            })
            .catch(err => {
                alert(`${err.response.data}`)
                console.log(err.response)
            });
    }

    return (
        <>
            <Logo/>
            <SCLoginForm onSubmit={(e) => login(e)} >
                <input type='email' placeholder='E-mail' required value={email} onChange={e => setEmail(e.target.value)} />
                <input type='password' placeholder='Senha' required value={password} onChange={e => setPassword(e.target.value)} autoComplete="off" />
                <SCButton style={{fontSize:'20px'}} type='submit' >Entrar</SCButton>
            </SCLoginForm>
            <SCButton onClick ={() => navigate('/cadastro')}>Não tem uma conta? Cadastre-se!</SCButton>
        </>
    )
}

const SCLoginForm = styled.form`
    width:81%;
    height:auto;
    margin:50px auto;

    display: flex;
    flex-direction:column;
    justify-content: space-between;
    align-items:center;
    gap:15px;

    input {
        width:303px;
        height:45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        touch-action: manipulation;
        padding-left: 11px;
        &::placeholder{
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            color:#2F4F4F;
            margin-left:11px;
        }
    }
`

const SCButton = styled.button`
    width:303px;
    height:45px;
    background-color: #05C653;
    border-radius: 5px;
    border:1px solid #DBDBDB;
    margin: 0 auto;

    font-family: 'Montserrat';
    font-weight:500;
    font-size:15px;
    color:#ffffff;

    display:flex;
    align-items: center;
    justify-content:center;
`