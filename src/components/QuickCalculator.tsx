import React, { useState } from 'react';

const QuickCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

  const calculatePayment = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const term = parseFloat(loanTerm) * 12;

    if (principal > 0 && rate > 0 && term > 0) {
      const payment = (principal * rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
      setMonthlyPayment(payment);
    } else {
      setMonthlyPayment(null);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Quick Loan Calculator</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <div>
          <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700 mb-1">Loan Amount ($)</label>
          <input
            type="text"
            id="loanAmount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value.replace(/[^0-9.]/g, ''))}
            className="w-full p-2 border rounded"
            placeholder="e.g., 10000"
          />
        </div>
        <div>
          <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700 mb-1">Interest Rate (%)</label>
          <input
            type="text"
            id="interestRate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value.replace(/[^0-9.]/g, ''))}
            className="w-full p-2 border rounded"
            placeholder="e.g., 5.5"
          />
        </div>
        <div>
          <label htmlFor="loanTerm" className="block text-sm font-medium text-gray-700 mb-1">Loan Term (years)</label>
          <input
            type="text"
            id="loanTerm"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value.replace(/[^0-9.]/g, ''))}
            className="w-full p-2 border rounded"
            placeholder="e.g., 10"
          />
        </div>
      </div>
      <button
        onClick={calculatePayment}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
      >
        Calculate
      </button>
      {monthlyPayment !== null && (
        <div className="mt-4 text-center">
          <p className="text-lg font-semibold">Estimated Monthly Payment:</p>
          <p className="text-2xl font-bold text-blue-600">${monthlyPayment.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default QuickCalculator;