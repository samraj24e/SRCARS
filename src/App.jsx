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
import AdminDashboard from './pages/AdminDashboard';
import WhatsAppButton from './components/WhatsAppButton';
import { AuthProvider, useAuth } from './context/AuthContext';
import { initialCars } from './data/initialCars';
import './App.css';

function App() {
  const [cars, setCars] = React.useState(() => {
    const saved = localStorage.getItem('srcars_inventory');
    return saved ? JSON.parse(saved) : initialCars;
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
              <Route path="/admin" element={<AdminRoute />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </AuthProvider>
  );
}

const AdminRoute = () => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <AdminDashboard /> : <Login />;
};

export default App;
