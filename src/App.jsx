import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { HelmetProvider } from 'react-helmet-async';
import WhyChooseUs from "./pages/WhyChooseUs";
import Contact from "./pages/Contact";
import Blogs from './pages/Blogs';
import BlogDetail from './components/BlogDetail';
import LearnMorePage from './components/LearnMorePage';
import Error from './components/Error';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-us" element={<WhyChooseUs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/learn" element={<LearnMorePage />} />

          <Route path="*" element={<Error />} />
        </Routes>

        <Footer /> 
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
