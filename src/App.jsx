import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import UsedCars from './pages/UsedCars';
import BuySell from './pages/BuySell';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login';
import WhatsAppButton from './components/WhatsAppButton';
import { AuthProvider } from './context/AuthContext';
import suvImage from './assets/images/suv.png';
import sedanImage from './assets/images/sedan.png';
import './App.css';

const DEFAULT_CARS = [
  { id: 1, model: 'BMW X5 xDrive40i', year: '2022', fuel: 'Petrol', type: 'SUV', image: suvImage },
  { id: 2, model: 'Audi A6 Premium Plus', year: '2021', fuel: 'Diesel', type: 'Sedan', image: sedanImage },
  { id: 3, model: 'Toyota Fortuner Legender', year: '2023', fuel: 'Diesel', type: 'SUV', image: suvImage },
  { id: 4, model: 'Mercedes-Benz E-Class', year: '2020', fuel: 'Petrol', type: 'Sedan', image: sedanImage },
  { id: 5, model: 'Range Rover Velar', year: '2022', fuel: 'Diesel', type: 'SUV', image: suvImage },
  { id: 6, model: 'Honda Civic RS', year: '2021', fuel: 'Petrol', type: 'Sedan', image: sedanImage },
];

function App() {
  const [cars, setCars] = React.useState(() => {
    const saved = localStorage.getItem('srcars_inventory');
    return saved ? JSON.parse(saved) : DEFAULT_CARS;
  });

  React.useEffect(() => {
    localStorage.setItem('srcars_inventory', JSON.stringify(cars));
  }, [cars]);

  const addCar = (newCar) => {
    setCars([newCar, ...cars]);
  };

  const deleteCar = (id) => {
    setCars(cars.filter(car => car.id !== id));
  };

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/inventory" element={<UsedCars cars={cars} deleteCar={deleteCar} addCar={addCar} />} />
              <Route path="/buy-sell" element={<BuySell />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Login />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
