import styled from "styled-components"
import logo from '../assets/img/logo.png';
import { useNavigate } from "react-router-dom"

export default function HeaderMain({name}) {

    const navigate = useNavigate();

    function logout(){
        localStorage.removeItem('data');
        navigate('/');
    }

    return (
        <SCHeader>
            <ion-icon name="person-circle-outline" onClick={() => navigate('/meus-produtos', {state: name})} ></ion-icon>
            <img src={logo} onClick={() => navigate('/home')}/>
            <ion-icon name="exit-outline" onClick={logout} ></ion-icon>
        </SCHeader>
    )
}

const SCHeader = styled.div`
    width:100%;
    height:50px;
    background-color:#05C653;
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 0px 15px;

    position: fixed;
    top:0;

    ion-icon {
        width: 30px;
        height:30px;
        color: #ffffff;
    }
    img {
        max-width: 50px;
        max-width: 50px;
        width:auto;
        height:auto;
        object-fit:cover;
        margin-bottom: 6px;
    }
    p {
        font-size: 24px;
        font-weight: 700;
        cursor:pointer;
        color: #ffffff;
    }
    h6{
        font-family: 'Montserrat';
        font-size:14px;
        font-weight:500;
        color: #ffffff;
    }
`