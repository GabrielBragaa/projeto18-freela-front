import styled from "styled-components"
import plus from '../assets/img/plus.png';
import { useNavigate } from "react-router-dom"

export default function Footer({name}) {

    const navigate = useNavigate();

    function logout(){
        localStorage.removeItem('data');
        navigate('/');
    }

    return (
        <SCFooter>
            <img src={plus} onClick={() => navigate('/anunciar')}/>
        </SCFooter>
    )
}

const SCFooter = styled.div`
    width:100%;
    height:50px;
    background-color:#05C653;
    display: flex;
    justify-content: center;
    align-items:center;
    padding: 0px 15px;
    position: fixed;
    bottom:0;

    img {
        max-width: 100px;
        max-width: 100px;
        width:auto;
        height:auto;    
        margin-right: 10px;
    }
`