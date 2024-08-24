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
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
        <input
          type="number"
          placeholder="Loan Amount"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Interest Rate (%)"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Loan Term (years)"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
          className="p-2 border rounded"
        />
      </div>
      <button onClick={calculatePayment} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Calculate
      </button>
      {monthlyPayment !== null && (
        <p className="font-semibold">
          Estimated monthly payment: ${monthlyPayment.toFixed(2)}
        </p>
      )}
    </div>
  );
};

export default QuickCalculator;
