import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RegisterPage () {

    const navigate = useNavigate();

    let [registerControl, setRegisterControl] = useState('part-1');
    let [name, setName] = useState('');
    let [city, setCity] = useState('');
    let [phone, setPhone] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [confirmPassword, setConfirmPassword] = useState('');

    function register(e){
        e.preventDefault();

        if ( password !== confirmPassword ) return alert('As senhas não coincidem.');

        const URL = `${import.meta.env.VITE_API_URL}/signup`;
        const body = { name, city, phone, email, password };

        axios.post(URL, body)
            .then(response => navigate('/'))
            .catch(err => {
                //alert(`O erro foi ${err.response.data.message}`);
                console.log(err.config)
            });
        
    }

    return (
        <>
            <Logo />
            <SCRegisterForm onSubmit={(e) => register(e)} >
                {registerControl==='part-1' && (
                <>
                <p>  Dados Pessoais </p>
                <input type='text' placeholder='Nome' required value={name} onChange={e => setName(e.target.value)} />
                <input type='text' placeholder='Cidade' required value={city} onChange={e => setCity(e.target.value)} />
                <input type='text' placeholder='Telefone' required value={phone} onChange={e => setPhone(e.target.value)} />
                <SCButton disabled={!(name && city && phone)} onClick={() => setRegisterControl('part-2')} > Próximo </SCButton>
                </>)}

                {registerControl==='part-2' && (
                <>
                <p>  Dados Cadastrais </p>
                <input type='email' placeholder='Email' required value={email} onChange={e => setEmail(e.target.value)} />
                <input type='password' placeholder='Senha' required value={password} onChange={e => setPassword(e.target.value)} />
                <input type='password' placeholder='Confirmar senha' required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                <SCButton type='submit' > Finalizar cadastro </SCButton>
                </>)}

            </SCRegisterForm>
        </>
    )
}

const SCRegisterForm = styled.form`
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
    
    p {
        font-size: 22px;
        font-family: 'Montserrat';
        font-weight:700;
        color:#000000;
    }
`

const SCButton = styled.button`
    width:303px;
    height:45px;
    background-color: #1C1C1C;
    border-radius: 5px;
    border:1px solid #DBDBDB;
    margin: 0 auto;

    font-family: 'Montserrat';
    font-weight:400;
    font-size:20px;
    color:#ffffff;

    display:flex;
    align-items:center;
    justify-content:center;
`