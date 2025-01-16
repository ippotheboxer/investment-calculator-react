import React from 'react';
import { calculateInvestmentResults, formatter } from '../util/investment';


const Table = ({ data }) => {
    const { initialInvestment, annualInvestment, expectedReturn, duration } = data;
    
    const investmentResults  = calculateInvestmentResults({
        initialInvestment, 
        annualInvestment, 
        expectedReturn, 
        duration});

    let totalInterest = 0;
    let investedCapital = initialInvestment;

    return (
    <table id='result' className='center'>
        <thead>
            <tr>
                <th scope="col">Year</th>
                <th scope="col">Investment Value</th>
                <th scope="col">Interest (Year)</th>
                <th scope="col">Total Interest</th>
                <th scope="col">Invested Capital</th>
            </tr>
        </thead>
        <tbody>
        {investmentResults.map(({ year, valueEndOfYear, interest, annualInvestment }) => {
          totalInterest += interest; // Update total interest
          investedCapital += year === 1 ? 0 : annualInvestment; // Add annual investment for years after the first
          return (
            <tr key={year}>
              <td>{year}</td>
              <td>{formatter.format(valueEndOfYear)}</td>
              <td>{formatter.format(interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
        </tbody>
    </table>
  );
}

export default Table;