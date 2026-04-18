import React from 'react';
import { Fuel, Calendar, ArrowRight, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import './CarCard.css';

const CarCard = ({ car, onDelete }) => {
  const { isAdmin } = useAuth();
  const whatsappUrl = `https://wa.me/8610362451?text=${encodeURIComponent(`Hi SR CARS, I'm interested in the ${car.model} (${car.year}).`)}`;

  return (
    <motion.div 
      className="car-card"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="car-image">
        <img src={car.image} alt={car.model} />
        <div className="car-tag">{car.type}</div>
        
        {isAdmin && (
          <button 
            className="delete-btn" 
            onClick={(e) => {
              e.preventDefault();
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
  );
};

export default CarCard;
