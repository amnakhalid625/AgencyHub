import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { HelmetProvider } from 'react-helmet-async';
import WhyChooseUs from "./pages/WhyChooseUs";
import Contact from "./pages/Contact";
import Blogs from './pages/Blogs';
import BlogDetail from './components/BlogDetail';
import Error from './components/Error';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-us" element={<WhyChooseUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="*" element={<Error />} />
        </Routes>

        <Footer /> {/* 👈 This will appear on every page */}
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
