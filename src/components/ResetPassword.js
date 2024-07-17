// ResetPassword.js
import React, { useState } from 'react';

const ResetPassword = () => {
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log('New password:', password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-sm">
        <div className="flex flex-col items-center mb-4">
        <svg
    className="w-12 h-12 text-red-500 mb-2"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C9.24 2 7 4.24 7 7v5H5v10h14V12h-2V7c0-2.76-2.24-5-5-5zm3 10v7H9v-7h6zm-3-9c1.66 0 3 1.34 3 3v5H9V7c0-1.66 1.34-3 3-3z" />
  </svg>
          <h2 className="text-2xl font-bold mb-2">Reset Password</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">
              New Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
