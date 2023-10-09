import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../contexts/UserContext"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function CreatePage () {

    const navigate = useNavigate();
    const { token } = useContext(UserContext);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [picture, setPicture] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        if (!token) {
            navigate('/');
        };

    });

    function submitProduct(e) {
        e.preventDefault();
        const info = {name, description, picture, price, category};
        const URL = `${import.meta.env.VITE_API_URL}/anunciar`;

        axios.post(URL, info, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            alert("Produto cadastrado com sucesso!");
            navigate('/home');
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            <Header/>
            <SCDiv>
                <SCP>
                    Adicionar Produto
                </SCP>
                <SCForm onSubmit={submitProduct}>
                    <div>
                        <SCNomeCampo>Nome</SCNomeCampo>
                        <input value={name} onChange={e => setName(e.target.value)} required/>
                    </div>
                   <div>
                        <SCNomeCampo>Descrição</SCNomeCampo>
                        <textarea value={description} onChange={e => setDescription(e.target.value)} required />
                   </div>
                    <div>
                        <SCNomeCampo>Imagem</SCNomeCampo>
                        <input type="url" value={picture} onChange={e => setPicture(e.target.value)} required />
                    </div>
                    <div>
                        <SCNomeCampo>Preço</SCNomeCampo>
                        <input type="text" value={price} onChange={e => setPrice(e.target.value)} required />
                    </div>
                    <div>
                        <SCNomeCampo>Categoria</SCNomeCampo>
                        <select value={category} onChange={e => setCategory(e.target.value)} required>
                            <option value="Brinquedo">Brinquedo</option>
                            <option value="Eletrônico">Eletrônico</option>
                            <option value="Eletrodoméstico">Eletrodoméstico</option>
                            <option value="Imóvel">Imóvel</option>
                            <option value="Celular">Celular</option>
                            <option value="Computador">Computador</option>
                            <option value="Automóvel">Automóvel</option>
                        </select>
                    </div>
                    <button type="submit">Enviar</button>
                </SCForm>
            </SCDiv>
        </>
    )
}

const SCDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SCNomeCampo = styled.p`
    font-size: 16px;
    margin-bottom: 5px;
    font-weight: 500;
`

const SCForm = styled.form`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;

`

const SCP = styled.p`
    margin-top: 80px;
    font-size: 30px;
    font-weight: 500;
`