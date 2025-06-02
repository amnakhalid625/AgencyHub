import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import {  HelmetProvider } from 'react-helmet-async';



function App() {

  return (
   <>
   <HelmetProvider>
   <BrowserRouter>
   <Navbar />

  <Routes>
   <Route path="/" element={<Home />} /> 

    </Routes> 
   </BrowserRouter>
   </HelmetProvider>
   
   </>
  )
}

export default App
