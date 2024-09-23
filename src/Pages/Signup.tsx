import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { signupUser } from '../redux/signUpSlice';

const Signup: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, error } = useSelector((state: RootState) => state.signup);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(signupUser({ username, email, password }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded shadow-md mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">Create an Account</h2>
      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

      <div className="mb-4">
        <label className="block text-gray-700">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded"
          required
        />
      </div>

      <button
        type="submit"
        className={`w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={isLoading}
      >
        {isLoading ? 'Signing up...' : 'Sign Up'}
      </button>

      <p className="mt-4 text-center text-gray-600">
        Already have an account? <a href="/login" className="text-blue-500 hover:underline">Log in</a>
      </p>
    </form>
  );
};

export default Signup;
