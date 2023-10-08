import styled from "styled-components";
import logo from '../assets/img/logo.png'

export default function Logo () {
    return (
        <SCMainLogo>
            <SCLogo src={logo} alt='Logo' />
            <SCName> Me Cansei </SCName>
        </SCMainLogo>
    )
}

const SCMainLogo = styled.div`
    width:100%;
    height:auto;
    display: flex;
    flex-direction: column;
    margin:80px auto 30px auto;
    justify-content: space-between;
    align-items:center;
    gap:20px
`

const SCLogo = styled.img`
    width:150px;
    height:150px;
    display: block;
    border-radius:10px;
`

const SCName = styled.p`
    font-size: 30px;
    font-weight: 700;
    font-family: 'Montserrat';
    color: #2F4F4F;
`