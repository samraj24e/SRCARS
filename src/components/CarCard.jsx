import React, { useState } from 'react';
import { Fuel, Calendar, ArrowRight, Trash2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import './CarCard.css';

const CarCard = ({ car, onDelete }) => {
  const { isAdmin } = useAuth();
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const whatsappUrl = `https://wa.me/8610362451?text=${encodeURIComponent(`Hi SR CARS, I'm interested in the ${car.model} (${car.year}).`)}`;

  return (
    <>
      <motion.div 
        className="car-card"
        whileHover={{ y: -10 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="car-image" onClick={() => setIsLightboxOpen(true)}>
          <img src={car.image} alt={car.model} />
          <div className="car-tag">{car.type}</div>
          
          {isAdmin && (
            <button 
              className="delete-btn" 
              onClick={(e) => {
                e.stopPropagation(); // Prevent opening lightbox
                if(window.confirm('Are you sure you want to remove this car?')) {
                  onDelete(car.id);
                }
              }}
              title="Delete Car"
            >
              <Trash2 size={18} />
            </button>
          )}
        </div>
        <div className="car-info">
          <h3>{car.model}</h3>
          <div className="car-specs">
            <span><Calendar size={16} /> {car.year}</span>
            <span><Fuel size={16} /> {car.fuel}</span>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline car-btn">
            Inquire Now <ArrowRight size={16} />
          </a>
        </div>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div 
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
          >
            <motion.div 
              className="lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="lightbox-close" onClick={() => setIsLightboxOpen(false)}>
                <X size={24} />
              </button>
              <img src={car.image} alt={car.model} className="lightbox-image" />
              <div className="lightbox-info">
                <h3>{car.model}</h3>
                <div className="car-specs">
                  <span><Calendar size={20} /> {car.year}</span>
                  <span><Fuel size={20} /> {car.fuel}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CarCard;
