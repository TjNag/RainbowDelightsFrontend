import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Mock encryption function for demonstration. Replace with real encryption logic on your backend.
  const encryptPassword = (password) => `encrypted-${password}`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const encryptedPassword = encryptPassword(formData.password);
    console.log(`Username: ${formData.username}, Email: ${formData.email}, Password: ${encryptedPassword}`);
    toast("Account has been created!", { position: "top-center" });
  };

  return (
    <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10 mb-20 mt-20">
      <ToastContainer />
      <div className="text-center mb-4">
        <h1 className="text-3xl font-semibold text-pink-900">Sign Up</h1>
        <p className="mt-2 text-pink-900">Create your account</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <label htmlFor="username" className="block font-medium text-gray-700 focus:text-pink-900">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            required
            className="mt-1 w-full border-b-2 border-gray-300 px-0 py-1 focus:border-pink-900 focus:outline-none"
            onChange={handleChange}
            value={formData.username}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="email" className="block font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="mt-1 w-full border-b-2 border-gray-300 px-0 py-1 focus:border-pink-900 focus:outline-none"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="password" className="block font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            className="mt-1 w-full border-b-2 border-gray-300 px-0 py-1 focus:border-pink-900 focus:outline-none"
            onChange={handleChange}
            value={formData.password}
          />
        </div>
        <div className="my-6">
          <button
            type="submit"
            className="w-full rounded-md bg-pink-900 px-4 py-4 text-white hover:bg-pink-700 focus:outline-none"
          >
            Create Account
          </button>
        </div>
        <p className="text-center text-sm text-pink-900">Already have an Account?&nbsp;
          <Link to="/login"
                className="font-extrabold text-pink-900 hover:underline focus:text-rose-800 focus:outline-none">Log In
          </Link>
          .
        </p>
      </form>
    </div>
  );
};

export default Signup;
