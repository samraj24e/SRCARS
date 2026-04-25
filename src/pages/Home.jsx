import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Handshake, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/hero.png';
import suvImage from '../assets/images/suv.png';
import sedanImage from '../assets/images/sedan.png';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <img src={heroImage} alt="Luxury Car" className="hero-bg" />
        <div className="container hero-content">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Best Deals on <span className="text-red">Quality</span> Used Cars and Servicing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Buy, Sell & Service Cars at the Best Price. Your Experienced and Cost Effective automotive partner.
          </motion.p>
          <motion.div 
            className="hero-btns"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/inventory" className="btn btn-primary">View Cars</Link>
            <Link to="/services" className="btn btn-primary">Our Services</Link>
            <Link to="/buy-sell" className="btn btn-outline">Sell Your Car</Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features bg-dark">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose <span className="text-red">SR CARS</span>?</h2>
            <div className="accent-bar"></div>
          </div>
          
          <div className="features-grid">
            <motion.div 
              className="feature-card glass"
              whileHover={{ scale: 1.05 }}
            >
              <Zap className="icon-red" size={40} />
              <h3>Quick Process</h3>
              <p>Sell your car in minutes with our streamlined evaluation process.</p>
            </motion.div>

            <motion.div 
              className="feature-card glass"
              whileHover={{ scale: 1.05 }}
            >
              <ShieldCheck className="icon-red" size={40} />
              <h3>Trusted Quality</h3>
              <p>Every vehicle in our showroom undergoes a 150-point inspection.</p>
            </motion.div>

            <motion.div 
              className="feature-card glass"
              whileHover={{ scale: 1.05 }}
            >
              <Handshake className="icon-red" size={40} />
              <h3>Best Price</h3>
              <p>Get the most competitive market value for your trade-ins.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust">
        <div className="container trust-container">
          <div className="trust-content">
            <h2>Building Trust in Every Deal</h2>
            <p>SR CARS has been the leading name in high-quality used cars and Servicing for years. We pride ourselves on transparency and customer satisfaction.</p>
            <div className="stats-grid">
              <div className="stat-item">
                <h3>25+</h3>
                <span>Years in Servicing</span>
              </div>
              <div className="stat-item">
                <h3>5+</h3>
                <span>Years in Selling</span>
              </div>
            </div>
          </div>
          <div className="trust-image">
            <img src={suvImage} alt="Premium SUV" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta">
        <div className="container">
          <div className="cta-box glass">
            <h2>Ready to find your dream car?</h2>
            <p>Visit our showroom today or browse our online inventory.</p>
            <Link to="/inventory" className="btn btn-primary">Get Started <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
