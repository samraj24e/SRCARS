import React, { useState, useRef } from 'react';
import { Send, Upload, ImageIcon, X } from 'lucide-react';

const CarForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    model: '',
    year: '',
    fuel: 'Petrol',
    type: 'SUV',
    image: ''
  });
  const [preview, setPreview] = useState(null);
  const [isResizing, setIsResizing] = useState(false);
  const fileInputRef = useRef(null);

  const resizeImage = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const MAX_WIDTH = 800;
          let width = img.width;
          let height = img.height;

          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          
          // Compress to JPEG with 0.7 quality to save space in localStorage
          const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
          resolve(dataUrl);
        };
      };
    });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("File is too large! Please choose an image under 5MB.");
        return;
      }
      
      setIsResizing(true);
      const compressedImage = await resizeImage(file);
      setPreview(compressedImage);
      setFormData({ ...formData, image: compressedImage });
      setIsResizing(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.image) {
      alert("Please upload a photo of the car.");
      return;
    }
    const newCar = {
      ...formData,
      id: Date.now()
    };
    onAdd(newCar);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const removeImage = () => {
    setPreview(null);
    setFormData({ ...formData, image: '' });
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="car-form">
      <h2>Add New Vehicle</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Car Model Name</label>
          <input 
            type="text" 
            name="model" 
            placeholder="e.g. BMW X5 M Sport" 
            required 
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Year</label>
            <input 
              type="text" 
              name="year" 
              placeholder="e.g. 2023" 
              required 
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Fuel Type</label>
            <select name="fuel" onChange={handleChange}>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label>Vehicle Type</label>
          <select name="type" onChange={handleChange}>
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Luxury">Luxury</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Vehicle Photo</label>
          {!preview ? (
            <div 
              className="upload-placeholder" 
              onClick={() => fileInputRef.current.click()}
            >
              {isResizing ? (
                <div className="loader small"></div>
              ) : (
                <>
                  <Upload size={32} />
                  <span>Click to Upload Image</span>
                </>
              )}
            </div>
          ) : (
            <div className="image-preview-container">
              <img src={preview} alt="Preview" className="image-preview" />
              <button type="button" className="remove-image-btn" onClick={removeImage}>
                <X size={16} />
              </button>
            </div>
          )}
          <input 
            type="file" 
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            style={{ display: 'none' }}
          />
        </div>

        <button type="submit" className="btn btn-primary w-full" disabled={isResizing}>
          {isResizing ? 'Processing Photo...' : 'Save Vehicle'} <Send size={18} />
        </button>
      </form>
    </div>
  );
};

export default CarForm;
