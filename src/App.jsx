import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import { UserContext } from "./contexts/UserContext"
import { useState } from "react"
import HomePage from "./pages/HomePage"

function App() {

  let [token, setToken] = useState('');

  return (
    <BrowserRouter>
      <UserContext.Provider value={{token, setToken}} >
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/cadastro' element={<RegisterPage />} />
          <Route path='/home' element={<HomePage />}/>
        </Routes>
        </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App