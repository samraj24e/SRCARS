import React, { useState } from 'react';
import CarCard from '../components/CarCard';
import CarForm from '../components/CarForm';
import { useAuth } from '../context/AuthContext';
import { Plus, X } from 'lucide-react';
import './UsedCars.css';

const UsedCars = ({ cars, deleteCar, addCar }) => {
  const [filter, setFilter] = useState('All');
  const [showAddForm, setShowAddForm] = useState(false);
  const { isAdmin } = useAuth();

  const filteredCars = filter === 'All' 
    ? cars 
    : cars.filter(car => car.type === filter);

  return (
    <div className="used-cars-page">
      <section className="page-header">
        <div className="container">
          <h1>Find Your <span className="text-red">Perfect</span> Car</h1>
          <p>Explore our handpicked collection of premium quality used cars.</p>
          
          {isAdmin && (
            <button className="btn btn-primary add-car-btn" onClick={() => setShowAddForm(true)}>
              <Plus size={18} /> Add New Car
            </button>
          )}
        </div>
      </section>

      <section className="inventory-section">
        <div className="container">
          <div className="filter-bar">
            {['All', 'SUV', 'Sedan'].map(type => (
              <button 
                key={type}
                className={filter === type ? 'active' : ''} 
                onClick={() => setFilter(type)}
              >
                {type === 'All' ? 'All Cars' : type + 's'}
              </button>
            ))}
          </div>

          <div className="cars-grid">
            {filteredCars.map(car => (
              <CarCard key={car.id} car={car} onDelete={deleteCar} />
            ))}
          </div>

          {filteredCars.length === 0 && (
            <div className="no-results">
              <p>No cars found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Add Car Modal */}
      {showAddForm && (
        <div className="modal-overlay">
          <div className="modal-content glass">
            <button className="close-modal" onClick={() => setShowAddForm(false)}>
              <X size={24} />
            </button>
            <CarForm 
              onAdd={(newCar) => {
                addCar(newCar);
                setShowAddForm(false);
              }} 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UsedCars;
