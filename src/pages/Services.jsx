import React from 'react';
import { Wrench, Search, FileText, CheckCircle, ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  const serviceList = [
    {
      title: 'General & Health Check',
      desc: 'Comprehensive car health check and general maintenance for smooth driving.',
      icon: <Wrench size={32} />,
      points: ['General Service', 'Complete Car Health Check', 'Engine Compression Test']
    },
    {
      title: 'Performance & Efficiency',
      desc: 'Enhance your vehicle\'s power and fuel economy with our expert tuning.',
      icon: <Zap size={32} />,
      points: ['Fuel Efficiency Improvement', 'Performance Boosting', 'Turbo Service']
    },
    {
      title: 'Engine & Clean Systems',
      desc: 'Specialized cleaning and component servicing for modern diesel and petrol engines.',
      icon: <Search size={32} />,
      points: ['EGR Cleaning', 'DPF Service', 'DEF / AdBlue Service']
    },
    {
      title: 'Component Servicing',
      desc: 'Precision repair and maintenance of critical engine components.',
      icon: <FileText size={32} />,
      points: ['Injector / Pump Service', 'Radiator Service', 'Cooling System Check']
    }
  ];

  return (
    <div className="services-page">
      <section className="page-header">
        <div className="container">
          <h1>Professional <span className="text-red">Services</span></h1>
          <p>We don't just sell cars; we ensure they stay in peak condition.</p>
        </div>
      </section>

      <section className="services-list-section">
        <div className="container">
          <div className="services-container">
            {serviceList.map((service, index) => (
              <motion.div 
                className="service-detailed-card glass"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="service-icon-box">{service.icon}</div>
                <div className="service-content">
                  <h2>{service.title}</h2>
                  <p>{service.desc}</p>
                  <ul className="service-points">
                    {service.points.map((point, i) => (
                      <li key={i}><CheckCircle size={16} className="text-red" /> {point}</li>
                    ))}
                  </ul>
                  <a href="tel:8610362451" className="btn btn-outline">Inquire Now <ArrowRight size={16} /></a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-trust-bar">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-item">
              <h3>Genuine Parts</h3>
              <p>Genuine spares only used</p>
            </div>
            <div className="trust-item">
              <h3>Expert Mechanics</h3>
              <p>25+ years experience is there</p>
            </div>
            <div className="trust-item">
              <h3>Fast Turnaround</h3>
              <p>Same day minor servicing available.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
