import React from 'react';

const InvestmentForm = () => {
  return (
    <form id='user-input' className='input-group'>
      <div>
        <label htmlFor="initial">
          Initial Investment
          <input type="text" name='initial'/>
        </label>

          <label htmlFor="initial">
            Annual Investment
            <input type="text" name='annual' />
          </label>
        </div>

      <div>
        <label htmlFor="initial">
          Expected Return
          <input type="text" name='return' />
        </label>
        
        <label htmlFor="initial">
          duration
          <input type="text" name='duration' />
        </label>
        </div>    
    </form>
  );
}

export default InvestmentForm;