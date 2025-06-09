import React, { useState } from 'react';
import { motion } from 'framer-motion';
import loginImage from '../assets/images/form.svg';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { useUserAuth } from '../context/UserAuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { logIn,googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("All fields are required");
    }

    try {
      await logIn(email, password);
      toast.success("Login successful!");
      navigate("/payment"); 
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      toast.success("Login successful!");
      navigate("/payment"); 
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-white shadow-2xl rounded-xl flex flex-col md:flex-row overflow-hidden w-full max-w-4xl"
      >
        {/* Left Side Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="md:w-1/2 bg-gray-50 flex items-center justify-center p-6"
        >
          <img
            src={loginImage}
            alt="Login"
            className="object-contain w-full h-auto max-h-96"
          />
        </motion.div>

        {/* Right Side Form */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="md:w-1/2 p-10"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
          <p className="text-gray-600 mb-6">Login to your account</p>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
              hidden: {}
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition"
                placeholder="you@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition"
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="text-right mt-2">
                <a href="/forgot-password" className="text-sm text-black hover:underline">
                  Forgot Password?
                </a>
              </div>
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-hoverColor transition-all duration-300 shadow-md"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              Login
            </motion.button>
          </motion.form>

          {/* OR Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="px-4 text-sm text-gray-500">OR</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>

          {/* Social Buttons */}
          <motion.div
            className="space-y-3"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {}
            }}
          >
            <motion.button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-3 hover:bg-gray-100 transition"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <FcGoogle className="text-2xl mr-3" />
              <span className="text-sm font-medium">Login with Google</span>
            </motion.button>
            <motion.button
              className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-3 hover:bg-blue-50 transition text-blue-600"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <FaFacebook className="text-2xl mr-3" />
              <span className="text-sm font-medium">Login with Facebook</span>
            </motion.button>
          </motion.div>

          {/* Signup Option */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don’t have an account?{' '}
              <Link
                to="/signup"
                className="text-black font-semibold hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Form;
