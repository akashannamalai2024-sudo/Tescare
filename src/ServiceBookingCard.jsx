import React, { useState, useEffect } from 'react';
import { MapPin, Home, Building, ChevronDown, Phone, CheckCircle } from 'lucide-react';
import './ServiceBookingCard.css';

const ServiceBookingCard = ({ defaultPest = 'cockroach' }) => {
  const [pincode, setPincode] = useState('632326');
  const [premiseType, setPremiseType] = useState('residential');
  const [pestType, setPestType] = useState(defaultPest);
  const [premiseSize, setPremiseSize] = useState('1rk');
  const [sqft, setSqft] = useState('0');
  const [price, setPrice] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  // Dynamic pricing calculation
  useEffect(() => {
    let basePrice = 0;
    
    // Pest multipliers
    let pestMultiplier = 1.0;
    if (pestType === 'termite') pestMultiplier = 1.6;
    else if (pestType === 'woodborer') pestMultiplier = 1.4;
    else if (pestType === 'birdnetting') pestMultiplier = 1.8;
    else if (pestType === 'bedbug') pestMultiplier = 1.3;

    if (premiseType === 'residential') {
      const sizePrices = {
        '1rk': 1200,
        '1bhk': 1800,
        '2bhk': 2400,
        '3bhk': 3200,
        '4bhk': 4200
      };
      basePrice = sizePrices[premiseSize] || 1200;
      setPrice(basePrice * pestMultiplier);
    } else {
      const sqftVal = parseFloat(sqft) || 0;
      if (sqftVal >= 200) {
        // ₹2.5 per square foot base rate
        basePrice = sqftVal * 2.5;
        setPrice(basePrice * pestMultiplier);
      } else {
        setPrice(0);
      }
    }
  }, [premiseType, pestType, premiseSize, sqft]);

  const handleBookNow = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      window.location.hash = '#book';
    }, 2000);
  };

  const handleTalkToAgent = () => {
    window.location.href = 'tel:+919876543210';
  };

  return (
    <div className="service-booking-card">
      {showSuccess && (
        <div className="card-success-overlay">
          <div className="success-content">
            <CheckCircle className="success-icon" size={48} />
            <h3>Request Received!</h3>
            <p>Redirecting to booking form...</p>
          </div>
        </div>
      )}

      {/* Check Serviceability */}
      <div className="card-field">
        <label className="card-label">Check Serviceability</label>
        <div className="card-input-wrapper">
          <MapPin className="card-input-icon icon-green" size={18} />
          <input 
            type="text" 
            value={pincode} 
            onChange={(e) => setPincode(e.target.value)} 
            placeholder="Enter Pincode"
            className="card-input"
          />
        </div>
      </div>

      {/* Premise Type */}
      <div className="card-field">
        <label className="card-label">Premise Type *</label>
        <div className="card-toggle-group">
          <button 
            type="button"
            className={`card-toggle-btn ${premiseType === 'residential' ? 'active' : ''}`}
            onClick={() => setPremiseType('residential')}
          >
            <Home size={16} />
            <span>Residential</span>
          </button>
          <button 
            type="button"
            className={`card-toggle-btn ${premiseType === 'commercial' ? 'active' : ''}`}
            onClick={() => setPremiseType('commercial')}
          >
            <Building size={16} />
            <span>Commercial</span>
          </button>
        </div>
      </div>

      {/* Pest Type */}
      <div className="card-field">
        <label className="card-label">Pest Type *</label>
        <div className="card-select-wrapper">
          <select 
            value={pestType} 
            onChange={(e) => setPestType(e.target.value)}
            className="card-select"
          >
            <option value="bedbug">Bedbug Control</option>
            <option value="cockroach">Cockroach Control</option>
            <option value="mosquito">Mosquito Control</option>
            <option value="rodent">Rodent Control</option>
            <option value="termite">Termite Control</option>
            <option value="woodborer">Wood Borer Control</option>
            <option value="birdnetting">Bird Netting</option>
          </select>
          <ChevronDown className="card-chevron" size={18} />
        </div>
      </div>

      {/* Price Display */}
      <div className="card-price-section">
        <span className="price-title">Price (Excluding GST)</span>
        <div className="price-value">
          <span className="price-currency">₹</span>
          <span className="price-amount">{price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        </div>
      </div>

      {/* Premise Size (Residential Only) */}
      {premiseType === 'residential' && (
        <div className="card-field">
          <label className="card-label">Premise Size *</label>
          <div className="card-select-wrapper">
            <select 
              value={premiseSize} 
              onChange={(e) => setPremiseSize(e.target.value)}
              className="card-select"
            >
              <option value="1rk">1 RK</option>
              <option value="1bhk">1 BHK</option>
              <option value="2bhk">2 BHK</option>
              <option value="3bhk">3 BHK</option>
              <option value="4bhk">4 BHK</option>
            </select>
            <ChevronDown className="card-chevron" size={18} />
          </div>
        </div>
      )}

      {/* Square Feet (Commercial Only) */}
      {premiseType === 'commercial' && (
        <div className="card-field">
          <label className="card-label">Square Feet *(Required: at least 200 sqft)</label>
          <div className="card-input-wrapper">
            <input 
              type="number" 
              value={sqft} 
              onChange={(e) => setSqft(e.target.value)} 
              placeholder="e.g. 500"
              className="card-input"
              min="0"
            />
          </div>
          {price === 0 && (
            <div className="card-helper-text">
              Enter Square Feet to see pricing
            </div>
          )}
        </div>
      )}

      {/* Action Buttons */}
      <div className="card-actions">
        <button className="card-btn btn-book-now" onClick={handleBookNow}>
          BOOK NOW
        </button>
        <button className="card-btn btn-talk-agent" onClick={handleTalkToAgent}>
          <Phone size={16} />
          <span>TALK TO AGENT</span>
        </button>
      </div>
    </div>
  );
};

export default ServiceBookingCard;
