import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import { UserContext } from "./contexts/UserContext"
import { useState } from "react"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import MyPage from "./pages/MyPage"
import Product from "./pages/ProductPage"

function App() {

  let [token, setToken] = useState('');
  let [productId, setProductId] = useState('');

  return (
    <BrowserRouter>
      <UserContext.Provider value={{token, setToken}} >
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/cadastro' element={<RegisterPage />} />
          <Route path='/home' element={<HomePage productId={productId} setProductId={setProductId} />}/>
          <Route path='/anunciar' element={<CreatePage />} />
          <Route path='/meus-produtos' element={<MyPage productId={productId} setProductId={setProductId} />} />
          <Route path='/produto/:id' element={<Product productId={productId} setProductId={setProductId} />} />
        </Routes>
        </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App