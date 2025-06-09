import React, { useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { toast } from "react-hot-toast";
import resetImg from '../assets/images/resetPass.svg';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { resetPassword } = useUserAuth();

  const handleReset = async (e) => {
    e.preventDefault();
    if (!email) return toast.error("Please enter your email");

    try {
      await resetPassword(email);
      toast.success("Password reset email sent!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-4xl flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-1/2 bg-primary bg-opacity-10 flex items-center justify-center p-8">
          <img 
            src={resetImg} 
            alt="Password Reset" 
            className="w-full h-auto max-h-80 object-contain"
          />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Forgot Password?</h2>
          <p className="text-gray-600 mb-8">
            Enter your email address and we'll send you a link to reset your password.
          </p>
          
          <form onSubmit={handleReset}>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary-dark transition shadow-md"
            >
              Send Reset Link
            </button>
          </form>

          <p className="text-center text-gray-500 mt-6">
            Remember your password?{" "}
            <a href="/login" className="text-black hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;