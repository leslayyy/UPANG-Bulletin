import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [signupSuccess, setSignupSuccess] = useState(false); // State for signup success
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      // Create a new user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // User signed up
      const user = userCredential.user;
      console.log('User signed up:', user);

      // Set signup success to true to show the popup
      setSignupSuccess(true);

      // You can redirect or perform other actions after successful sign-up here
      // Navigate to the Login page after a successful signup
      navigate('/login');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="bg-green-900 p-8 rounded-3xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-white">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {signupSuccess && (
          <div className="text-green-500 mb-4">
            <p>Sign-up successful!</p>
            <p>You can now log in.</p>
          </div>
        )}
        <button
          type="submit"
          className="bg-yellow-400 text-black py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-white">
        Already have an account? <Link to="/login" className="text-yellow-400">Login</Link>
      </p>
    </div>
  );
};

export default SignUp;