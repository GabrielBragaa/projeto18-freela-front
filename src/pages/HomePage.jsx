import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../contexts/UserContext"
import Header from "../components/Header"

export default function HomePage () {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const { token } = useContext(UserContext);

    useEffect(() => {
        if (!token) {
            navigate('/');
        };

        const URL = `${import.meta.env.VITE_API_URL}/home`;

        axios.get(URL, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            setProducts(response.data)
        })
        .catch(err => {
            console.log(err)
        })
        
    }, []);

    if (products.length === 0) {
        return (
            <>
                <Header/>
                <SCProducts>Carregando...</SCProducts>
            </>
        )
    }

    return (
        <>
            <Header/>
            <SCDiv>
            {products.map(product => {
                return (
                    <SCDivProduct>
                        <img src={product.picture}/>
                        <SCProductInfo>
                            <SCProducts>{product.name}</SCProducts>
                            <p>Descrição: {product.description}</p>
                            <p>Preço: {product.price}</p>
                            <p>Categoria: {product.category}</p>
                        </SCProductInfo>
                    </SCDivProduct>
                )
            })}
            </SCDiv>
        </>

    )

}

const SCDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80vh;
    justify-content: start;
    row-gap: 5px;
    margin-top: 55px;
`

const SCDivProduct = styled.div`
    display: flex;
    height: 120px;
    width: 100%;
    justify-content: space-evenly;
    background-color: #ffffff;
    border: 5px groove #05C653;
    border-radius: 3%;

    img {
        max-width:100px;
        max-height:100px;
        width: auto;
        height: auto;
        margin-top: 7px;
    }

`

const SCProducts = styled.p`
    font-family:'Montserrat';
    font-size: 20px;
    font-weight:500;
`

const SCProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    row-gap: 7px;
    
`
