import React, { useState } from 'react';
import { MapPin, Info, Calendar, ChevronDown, Leaf, BadgeCheck } from 'lucide-react';
import './BookingSection.css';

const BookingSection = () => {
  const [premiseType, setPremiseType] = useState('residential');
  const [bookingDate, setBookingDate] = useState('');

  return (
    <section className="booking-section">
      <div className="booking-container">
        
        {/* Header */}
        <div className="booking-header">
          <h2>Book Your Pest Control Service</h2>
          <p>Get instant pricing based on your property details.</p>
        </div>

        {/* Form Grid */}
        <div className="booking-form-grid">
          
          {/* Row 1 */}
          <div className="form-group">
            <label>Check Serviceability</label>
            <div className="input-wrapper">
              <MapPin className="input-icon text-green" size={18} />
              <input type="text" placeholder="632326" />
            </div>
          </div>

          <div className="form-group">
            <label>Premise Type</label>
            <div className="toggle-group">
              <button 
                type="button" 
                className={`toggle-btn ${premiseType === 'residential' ? 'active' : ''}`}
                onClick={() => setPremiseType('residential')}
              >
                Residential
              </button>
              <button 
                type="button" 
                className={`toggle-btn ${premiseType === 'commercial' ? 'active' : ''}`}
                onClick={() => setPremiseType('commercial')}
              >
                Commercial
              </button>
            </div>
          </div>

          <div className="form-group">
            <label>Pest Type</label>
            <div className="input-wrapper select-wrapper">
              <select defaultValue="cockroach">
                <option value="" disabled hidden>Select Pest Type</option>
                <option value="bedbug">Bedbug Control</option>
                <option value="cockroach">Cockroach Control</option>
                <option value="mosquito">Mosquito Control</option>
                <option value="rodent">Rodent Control</option>
                <option value="termite">Termite Control</option>
                <option value="woodborer">Wood Borer Control</option>
                <option value="birdnetting">Bird Netting</option>
              </select>
              <ChevronDown className="select-icon" size={18} />
            </div>
          </div>

          {/* Row 2 */}
          {premiseType === 'residential' ? (
            <div className="form-group">
              <label>Premise Size</label>
              <div className="input-wrapper select-wrapper">
                <select defaultValue="">
                  <option value="" disabled hidden>Select Size</option>
                  <option value="1bhk">1 BHK</option>
                  <option value="2bhk">2 BHK</option>
                  <option value="3bhk">3 BHK</option>
                  <option value="4bhk">4 BHK</option>
                </select>
                <ChevronDown className="select-icon" size={18} />
              </div>
            </div>
          ) : (
            <div className="form-group">
              <label>Square Feet Input</label>
              <div className="input-wrapper">
                <input type="text" placeholder="1200" />
              </div>
              <span className="helper-text">Minimum 200 sqft required</span>
            </div>
          )}

          <div className="form-group">
            <label>Select Frequency</label>
            <div className="input-wrapper select-wrapper">
              <select defaultValue="">
                <option value="" disabled hidden>Select Frequency</option>
                <option value="1_service">1 Service</option>
                <option value="3_service_2year">3 Service 2 Year</option>
                <option value="6_service_2year">6 Service 2 Year</option>
                <option value="9_service_3year">9 Service 3 Year</option>
              </select>
              <ChevronDown className="select-icon" size={18} />
            </div>
          </div>

          {/* Row 3 */}
          <div className="form-group">
            <label className="flex-label">Select Service Type <Info size={14} className="icon-subtle" /></label>
            <div className="input-wrapper select-wrapper">
              <select defaultValue="gold_shield_4d">
                <option value="" disabled hidden>Select Service Type</option>
                <option value="standard">Standard Pest Control</option>
                <option value="silver_shield_3d">Silver Shield Service 3D</option>
                <option value="gold_shield_4d">Gold Shield Service 4D</option>
                <option value="platinum_shield_5d">Platinum Shield Service 5D</option>
              </select>
              <ChevronDown className="select-icon" size={18} />
            </div>
          </div>

          <div className="form-group">
            <label>Select Date</label>
            <div className="input-wrapper select-wrapper">
              <input 
                type="date" 
                value={bookingDate} 
                onChange={(e) => setBookingDate(e.target.value)} 
                style={{ colorScheme: 'dark', cursor: 'pointer' }}
              />
              <Calendar className="select-icon text-green" size={18} style={{ pointerEvents: 'none' }} />
            </div>
          </div>

        </div>

        {/* Pricing Summary */}
        <div className="pricing-card">
          <div className="pricing-info">
            <div className="pricing-label">ESTIMATED INVESTMENT</div>
            <div className="price-display">
              <span className="rupee">₹</span>
              <span className="amount">2,550.00</span>
              <span className="gst-note">(Excluding GST)</span>
            </div>
            <div className="pricing-tags">
              <span className="tag tag-premium">PREMIUM SERVICE</span>
              <span className="tag tag-safety">SAFETY GUARANTEED</span>
            </div>
          </div>
          <div className="pricing-actions">
            <button className="btn-book" onClick={() => window.location.hash = '#book'}>BOOK NOW</button>
            <button className="btn-talk" onClick={() => window.location.hash = '#contact'}>TALK TO AGENT</button>
          </div>
        </div>


      </div>
    </section>
  );
};

export default BookingSection;
