import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, Clock, Camera } from 'lucide-react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const whatsappUrl = "https://wa.me/8610362451?text=Hi SR CARS, I'd like to get in touch.";
  const instagramUrl = "https://www.instagram.com/srcars_avadi";

  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="container">
          <h1>Get In <span className="text-red">Touch</span></h1>
          <p>Have questions? Our team is here to help you with your automotive needs.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-panel">
              <div className="info-card glass">
                <div className="info-item">
                  <Phone className="icon-red" size={24} />
                  <div>
                    <h3>Call Us</h3>
                    <a href="tel:8610362451">8610362451</a>
                  </div>
                </div>
                <div className="info-item">
                  <MessageSquare className="icon-red" size={24} />
                  <div>
                    <h3>WhatsApp</h3>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Chat with us</a>
                  </div>
                </div>
                <div className="info-item">
                  <Camera className="icon-red" size={24} />
                  <div>
                    <h3>Instagram</h3>
                    <a href={instagramUrl} target="_blank" rel="noopener noreferrer">@srcars_avadi</a>
                  </div>
                </div>
                <div className="info-item">
                  <Mail className="icon-red" size={24} />
                  <div>
                    <h3>Email</h3>
                    <a href="mailto:samrajcars@gmail.com">samrajcars@gmail.com</a>
                  </div>
                </div>
                <div className="info-item">
                  <MapPin className="icon-red" size={24} />
                  <div>
                    <h3>Visit Us</h3>
                    <p>Kamaraj Nagar, Avadi, Chennai – 600071</p>
                  </div>
                </div>
                <div className="info-item">
                  <Clock className="icon-red" size={24} />
                  <div>
                    <h3>Opening Hours</h3>
                    <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                    <p>Sun: 10:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="map-placeholder">
                <div className="map-overlay">
                  <MapPin size={40} className="icon-red" />
                  <h3>Find Us on Map</h3>
                  <p>Main Commercial Hub, City Center</p>
                </div>
              </div>
            </div>

            <motion.div 
              className="contact-form-container glass"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form>
                <h2>Send a Message</h2>
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" placeholder="John" required />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" placeholder="Doe" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="Your mobile number" required />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <select>
                    <option>General Inquiry</option>
                    <option>Buying a Car</option>
                    <option>Selling my Car</option>
                    <option>Car Servicing</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea placeholder="How can we help you?" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  Send Message <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
