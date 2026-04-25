import React, { useState } from 'react';
import { Send, DollarSign, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import './BuySell.css';

const BuySell = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carDetails: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    console.log('Form data:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="buy-sell-page">
      <section className="page-header">
        <div className="container">
          <h1>Sell Your Car <span className="text-red">Instantly</span></h1>
          <p>Get the best price for your vehicle with our transparent evaluation process.</p>
        </div>
      </section>

      <section className="form-section">
        <div className="container">
          <div className="buy-sell-grid">
            <div className="form-info">
              <h2>Why Sell to <span className="text-red">SR CARS</span>?</h2>
              <div className="benefit-item">
                <div className="benefit-icon"><DollarSign /></div>
                <div>
                  <h3>Best Market Value</h3>
                  <p>We offer competitive prices based on real-time market data.</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon"><Clock /></div>
                <div>
                  <h3>Quick Payment</h3>
                  <p>Receive payment within 24 hours of deal finalization.</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon"><CheckCircle /></div>
                <div>
                  <h3>Hassle-Free Post-Sale</h3>
                  <p>We handle all the documentation and transfer paperwork.</p>
                </div>
              </div>
            </div>

            <motion.div 
              className="sell-form-container glass"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              {submitted ? (
                <div className="success-message">
                  <CheckCircle size={60} className="icon-red" />
                  <h2>Thank You!</h2>
                  <p>Our team will contact you within 2-4 hours for an evaluation.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3>Get a Quote</h3>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Enter your name" 
                      required 
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder="Enter your phone number" 
                      required 
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Car Model & Year</label>
                    <input 
                      type="text" 
                      name="carDetails" 
                      placeholder="e.g. 2021 BMW X5" 
                      required 
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Additional Message</label>
                    <textarea 
                      name="message" 
                      placeholder="Tell us about the condition or any specifics..." 
                      rows="4"
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-full">
                    Submit Details <Send size={18} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuySell;
