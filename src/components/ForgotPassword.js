import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ForgotPas from '../components/assest/forget2.png';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your submit logic here
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-100 px-4 lg:px-0">
      <div className="flex justify-center lg:justify-end w-full lg:w-1/2 mb-8 lg:mb-0">
        <img src={ForgotPas} alt="forgotpassword" className="w-80 h-80 mt-56 lg:mr-96 mb-40" />
      </div>
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md lg:mr-28">
        <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
        <p className="mb-4">Enter your email and we'll send you a link to reset your password.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">Submit</button>
        </form>
        <Link to="/form" className="block mt-4 text-center text-blue-500">Back to Login</Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
