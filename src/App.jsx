import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import {  HelmetProvider } from 'react-helmet-async';
import WhyChooseUs from "./pages/WhyChooseUs";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";



function App() {

  return (
   <>
   <HelmetProvider>
   <BrowserRouter>
   <Navbar />

  <Routes>
   <Route path="/" element={<Home />} /> 
   <Route path="/why-us" element={<WhyChooseUs />} />
   <Route path="/contact" element={<Contact />} />
   <Route path='/blogs' element={<Blogs/>} />

    </Routes> 
   </BrowserRouter>
   </HelmetProvider>
   
   </>
  )
}

export default App
