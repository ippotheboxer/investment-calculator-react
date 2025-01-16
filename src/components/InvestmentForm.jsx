import React from 'react';

const InvestmentForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
  <form id='user-input' className='input-group'>
    <div>
      <label htmlFor='initialInvestment'>Initial Investment</label>
        <input 
          type="number" 
          name='initialInvestment'
          value={formData.initialInvestment}
          onChange={handleChange}
          />
        <label htmlFor='expectedReturn'>Expected Return</label>
          <input 
          type="number" 
          name='expectedReturn'
          value={formData.expectedReturn}
          onChange={handleChange} 
          />
        </div>

      <div>
        <label htmlFor='annualInvestment'>Annual Investment</label>
          <input 
          type="number" 
          name='annualInvestment'
          value={formData.annualInvestment}
          onChange={handleChange} 
          />
        
        <label htmlFor='duration'>duration</label>
          <input 
          type="number" 
          name='duration'
          value={formData.duration}
          onChange={handleChange} 
          />
        
        </div>    
    </form>
  );
}

export default InvestmentForm;