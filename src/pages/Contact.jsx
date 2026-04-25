import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, Clock, Camera, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = React.useState(false);

  const whatsappUrl = "https://wa.me/8610362451?text=Hi SR CARS, I'd like to get in touch.";
  const instagramUrl = "https://www.instagram.com/srcars_avadi";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formspreeId = import.meta.env.VITE_FORMSPREE_ID;

    if (!formspreeId || formspreeId === 'YOUR_FORMSPREE_ID_HERE') {
      alert("Formspree ID is not set! Please check your .env file.");
      return;
    }

    try {
      const endpoint = formspreeId.includes('https') ? formspreeId : `https://formspree.io/f/${formspreeId}`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ firstName: '', lastName: '', phone: '', subject: 'General Inquiry', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("Error sending message. Please try again later.");
    }
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.phone) {
      alert("Please fill in your name and phone number first.");
      return;
    }
    const text = `*New Contact Inquiry*%0A%0A*Name:* ${formData.firstName} ${formData.lastName}%0A*Phone:* ${formData.phone}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/8610362451?text=${text}`, '_blank');
  };

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
              {submitted ? (
                <div className="success-message">
                  <CheckCircle size={60} className="icon-red" />
                  <h2>Message Sent!</h2>
                  <p>We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h2>Send a Message</h2>
                  <div className="form-row">
                    <div className="form-group">
                      <label>First Name</label>
                      <input 
                        type="text" 
                        name="firstName"
                        placeholder="John" 
                        value={formData.firstName}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label>Last Name</label>
                      <input 
                        type="text" 
                        name="lastName"
                        placeholder="Doe" 
                        value={formData.lastName}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      placeholder="Your mobile number" 
                      value={formData.phone}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <select name="subject" value={formData.subject} onChange={handleChange}>
                      <option>General Inquiry</option>
                      <option>Buying a Car</option>
                      <option>Selling my Car</option>
                      <option>Car Servicing</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea 
                      name="message"
                      placeholder="How can we help you?" 
                      rows="5" 
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-full" style={{ marginBottom: '1rem' }}>
                    Send to Email <Send size={18} />
                  </button>
                  
                  <button 
                    type="button" 
                    className="btn btn-outline w-full whatsapp-btn" 
                    onClick={handleWhatsAppSubmit}
                    style={{ borderColor: '#25D366', color: '#25D366' }}
                  >
                    <MessageSquare size={18} /> Submit via WhatsApp
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

export default Contact;
