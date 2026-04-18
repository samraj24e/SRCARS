import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, TrendingUp, Users, PlusCircle, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin');
  };

  const stats = [
    { label: "Total Vehicles", value: "24", icon: <ShoppingCart />, color: "#e50914" },
    { label: "Monthly Leads", value: "158", icon: <TrendingUp />, color: "#4caf50" },
    { label: "Active Customers", value: "850+", icon: <Users />, color: "#2196f3" }
  ];

  return (
    <div className="admin-dashboard container section-padding">
      <div className="dashboard-header">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1>Admin <span className="text-red">Control Center</span></h1>
          <p>Welcome back! Here's what's happening at SR CARS today.</p>
        </motion.div>
        
        <button onClick={handleLogout} className="btn logout-btn">
          <LogOut size={18} /> Logout
        </button>
      </div>

      <div className="stats-container">
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            className="stat-card glass"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="stat-icon" style={{ backgroundColor: stat.color }}>
              {stat.icon}
            </div>
            <div className="stat-info">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="quick-actions">
        <Link to="/inventory" className="action-card glass">
          <PlusCircle size={40} className="text-red" />
          <h3>Manage Inventory</h3>
          <p>Add, edit or remove vehicles from your showroom.</p>
        </Link>
        <div className="action-card glass disabled">
          <TrendingUp size={40} />
          <h3>Sales Analytics</h3>
          <p>Track your performance and growth trends.</p>
          <span className="badge">Coming Soon</span>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
