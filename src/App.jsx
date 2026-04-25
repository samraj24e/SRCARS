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
import { supabase } from './context/SupabaseClient';
import './App.css';

function App() {
  const [cars, setCars] = React.useState([]);

  React.useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    // If Supabase keys are missing, we just load initialCars
    if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY === 'YOUR_SUPABASE_ANON_KEY_HERE') {
      setCars(initialCars);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('cars')
        .select('*')
        .order('id', { ascending: false });
        
      if (error) throw error;
      
      if (data && data.length > 0) {
        setCars(data);
      } else {
        setCars(initialCars); // load initial data for aesthetics if DB is empty
      }
    } catch (error) {
      console.error('Error fetching from Supabase:', error.message);
      setCars(initialCars);
    }
  };

  const addCar = async (newCar) => {
    const carData = { ...newCar };
    delete carData.id; // Let Supabase auto-generate the ID
    
    // Check if Supabase keys are setup
    if (!import.meta.env.VITE_SUPABASE_URL || import.meta.env.VITE_SUPABASE_ANON_KEY === 'YOUR_SUPABASE_ANON_KEY_HERE') {
      alert("Supabase keys are missing! Vehicle will only save temporarily.");
      setCars([newCar, ...cars]);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('cars')
        .insert([carData])
        .select();
        
      if (error) throw error;
      
      if (data && data.length > 0) {
        setCars([data[0], ...cars]);
      }
    } catch (error) {
      console.error('Error inserting vehicle:', error.message);
      alert('Error adding vehicle to database: ' + error.message);
    }
  };

  const deleteCar = async (id) => {
    // Check if Supabase keys are setup
    if (!import.meta.env.VITE_SUPABASE_URL || import.meta.env.VITE_SUPABASE_ANON_KEY === 'YOUR_SUPABASE_ANON_KEY_HERE') {
      setCars(cars.filter(car => car.id !== id));
      return;
    }

    try {
      const { error } = await supabase
        .from('cars')
        .delete()
        .eq('id', id);
        
      if (error) throw error;
      
      setCars(cars.filter(car => car.id !== id));
    } catch (error) {
      console.error('Error deleting vehicle:', error.message);
      alert('Error deleting vehicle: ' + error.message);
    }
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
              <Route path="/admin" element={<AdminRoute cars={cars} />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </AuthProvider>
  );
}

const AdminRoute = ({ cars }) => {
  const { isAdmin } = useAuth();
  return isAdmin ? <AdminDashboard cars={cars} /> : <Login />;
};

export default App;
