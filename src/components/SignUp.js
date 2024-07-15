import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // Corrected to use navigate as a function

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://donation-site-three.vercel.app/api/register", {
      name,
      email,
      password
    })
    .then(res => {
      if (res.data && res.data.email) {
        toast.success(`User ${res.data.email} is successfully registered`);
        navigate("/form");
      } else {
        toast.error("Unexpected request response");
      }
    })
    .catch(err => {
      console.error("Error:", err);
      toast.error("Registration failed. Please try again.");
    });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center mb-20 mt-28 ml-2 xl:mx-8 rounded bg-transparent opacity-70" style={{ backgroundImage: "url('https://i.redd.it/islamia-college-peshawar-pakistan-v0-zyy8lfo8zcx91.jpg?width=1080&format=pjpg&auto=webp&s=e20bb64198f994ee95777c183716ecca191af150')" }}>
      <div className="flex flex-col max-w-md p-6 mt-8 mb-48 ml-[1px] rounded-md sm:p-10 opacity-100 dark:bg-gray-50 text-black">
        <div className="mb-8 text-center text-black">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-black">Create a new account</p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">Name</label>
              <input type="text" name="name" id="name" placeholder="Your Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
              <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm">Password</label>
              <input type="password" name="password" id="password" placeholder="***" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-black text-white hover:bg-yellow-500 hover:text-black">Sign Up</button>
            </div>
            <p className="px-6 text-sm text-center text-black">Already have an account?
              <a href="/form" className="hover:underline text-black">Log in</a>.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
