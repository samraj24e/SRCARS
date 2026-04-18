import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, Camera, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo footer-logo">
              <span className="logo-sr">SR</span> <span className="logo-cars">CARS</span>
            </Link>
            <p className="footer-desc">
              Your trusted partner for buying and selling quality used cars. We provide professional servicing and transparent deals at the best prices.
            </p>
            <div className="social-links">
              <a href="#"><Globe size={20} /></a>
              <a href="https://www.instagram.com/srcars_avadi" target="_blank" rel="noopener noreferrer"><Camera size={20} /></a>
              <a href="#"><MessageCircle size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/inventory">Inventory</Link></li>
              <li><Link to="/buy-sell">Buy / Sell</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Info</h4>
            <ul className="contact-list">
              <li>
                <MapPin size={18} className="icon-red" />
                <span>Kamaraj Nagar, Avadi, Chennai – 600071</span>
              </li>
              <li>
                <Phone size={18} className="icon-red" />
                <a href="tel:8610362451">8610362451</a>
              </li>
              <li>
                <Mail size={18} className="icon-red" />
                <a href="mailto:samrajcars@gmail.com">samrajcars@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SR CARS. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
