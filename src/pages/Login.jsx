import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, LogIn, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import './Login.css';

const Login = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isAdmin } = useAuth();
  const navigate = useNavigate();

  // If already admin, redirect to inventory
  if (isAdmin) {
    navigate('/inventory');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(password)) {
      navigate('/inventory');
    } else {
      setError('Invalid Admin Password. Please try again.');
    }
  };

  return (
    <div className="login-page">
      <div className="container">
        <motion.div 
          className="login-card glass"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="login-header">
            <Lock className="icon-red" size={40} />
            <h1>Admin Access</h1>
            <p>Enter your password to manage inventory</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>
            {error && (
              <div className="error-message">
                <AlertCircle size={16} /> {error}
              </div>
            )}
            <button type="submit" className="btn btn-primary w-full">
              Login <LogIn size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
