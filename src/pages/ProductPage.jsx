import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../contexts/UserContext"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Product (props) {

    const navigate = useNavigate();
    const { token } = useContext(UserContext);
    let {productId, setProductId} = props;
    const [product, setProduct] = useState({});

    useEffect(() => {
        if (!token) {
            navigate('/');
        };

        const URL = `${import.meta.env.VITE_API_URL}/produto/${productId}`;

        axios.get(URL, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            setProduct(response.data)
        })
        .catch(err => {
            console.log(err)
        })

    }, []);

    console.log(product)

    return (
        <>
            <Header/>
            <SCContainer>
                <SCInfo className="title">{product.name}</SCInfo>
                <img src={product.picture} />
                <SCInfo>{product.description}</SCInfo>
                <SCInfo>{product.price}</SCInfo>
                <SCInfo>{product.category}</SCInfo>
            </SCContainer>
            <Footer/>
        </>

    )

}

const SCContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
    row-gap: 20px;
    img {
        max-width: 300px;
        max-height: 300px;
        width: auto;
        height: auto;
        border-radius: 3px;
    }

    .title {
        font-size: 30px;
        font-weight: 500;
    }

`

const SCInfo = styled.p`
    
`
