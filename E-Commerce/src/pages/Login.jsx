import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';

const Login = () => {
  const { user, loginUser } = useAuth();
  const navigate = useNavigate();
  const loginForm = useRef(null);

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = loginForm.current.email.value;
    const password = loginForm.current.password.value;

    const userInfo = { email, password };
    loginUser(userInfo);
  };
  

  return (
    <div className="min-h-screen  flex items-center bg-gray-200 justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl flex flex-col md:flex-row overflow-hidden">
        
        {/* Rotating Image */}
        <div className="hidden md:flex items-center justify-center bg-white w-full md:w-1/2">
          <img
            src="https://m.media-amazon.com/images/I/51b9LjzmPCL._SL1080_.jpg"
            alt="Login Visual"
            className="w-190% h-190% animate-flip-horizontal "
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Login to Your Account</h2>
          <form ref={loginForm} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-600 mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter email..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Password</label>
              <input
                type="password"
                name="password"
                required
                placeholder="Enter password..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition duration-300 font-semibold"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-purple-600 font-semibold hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
