import './App.css'
import {Route, Routes, useNavigate} from "react-router-dom";
import {Login} from "./pages/Login.tsx";
import {PersonalPage} from "./pages/PersonalPage.tsx";
import {useEffect} from "react";
import {auth} from "./firebase.ts";


function App() {
    const navigate = useNavigate()
    useEffect(() => {
        auth.onAuthStateChanged(loginUser => {
            console.log(loginUser)
            if (loginUser) {
                navigate('/personal')
            } else {
                navigate('login')
            }
        })
    }, []);

  return (
    <>
     <Routes>
         <Route path="login" element={<Login />} />
         <Route path="personal" element={<PersonalPage />}/>
     </Routes>
    </>
  )
}

export default App
