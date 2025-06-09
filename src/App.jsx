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
import FeatureDetails from './components/FeatureDetails';
import Form from './pages/Form'
import Error from './components/Error';
import Signup from "./components/SignUp";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { Toaster } from 'react-hot-toast';
import Payment from "./components/Payment";
import ForgetPassword from "./components/ForgotPassword";


function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Navbar />
        <Toaster position="top-right" reverseOrder={false} />

        <UserAuthContextProvider >

          <Routes>
<Route path='/payment' element={<ProtectedRoute><Payment/></ProtectedRoute> } />
            <Route path="/" element={<Home />} />
            <Route path="/why-us" element={<WhyChooseUs />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/learn-more/:id" element={<LearnMorePage />} />
            <Route path="/features/:id" element={<FeatureDetails />} />
            <Route path="/login" element={<Form />} />
            <Route path="/signup" element={<Signup />} />
<Route path="/forgot-password" element={<ForgetPassword />} />

            <Route path="*" element={<Error />} />
          </Routes>
        </UserAuthContextProvider>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
