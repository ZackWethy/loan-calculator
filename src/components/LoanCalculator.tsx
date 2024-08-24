import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import PayoffChart from './PayoffChart';
import { calculateLoanPayoff } from '../utils/loanCalculations';
import { Link } from 'react-router-dom';

interface Loan {
  id: number;
  amount: string;
  interestRate: string;
}

type Results = {
  monthlyPayment: number;
  timeToPayoff: number;
  totalInterest: number;
  totalPaid: number;
};

const LoanCalculator: React.FC = () => {
  const [loans, setLoans] = useState<Loan[]>([{ id: 1, amount: '5000', interestRate: '4.5' }]);
  const [calculationType, setCalculationType] = useState<'monthlyPayment' | 'payoffTimeline'>('payoffTimeline');
  const [timelineYears, setTimelineYears] = useState<string>('10');
  const [monthlyPayment, setMonthlyPayment] = useState<string>('100');
  const [paymentStrategy, setPaymentStrategy] = useState<'standard' | 'snowball' | 'avalanche'>('standard');
  const [results, setResults] = useState<Results | null>(null);
  const [error, setError] = useState<string | null>(null);

  const addLoan = () => {
    setLoans([...loans, { id: Date.now(), amount: '', interestRate: '' }]);
  };

  const updateLoan = (id: number, field: 'amount' | 'interestRate', value: string) => {
    setLoans(loans.map(loan => 
      loan.id === id ? { ...loan, [field]: value } : loan
    ));
  };

  const removeLoan = (id: number) => {
    setLoans(loans.filter(loan => loan.id !== id));
  };

  const validateInputs = (): boolean => {
    const errors: string[] = [];

    loans.forEach((loan, index) => {
      if (loan.amount !== '' && (isNaN(parseFloat(loan.amount)) || parseFloat(loan.amount) < 0)) {
        errors.push(`Invalid amount for Loan ${index + 1}.`);
      }
      if (loan.interestRate !== '' && (isNaN(parseFloat(loan.interestRate)) || parseFloat(loan.interestRate) < 0)) {
        errors.push(`Invalid interest rate for Loan ${index + 1}.`);
      }
    });

    if (calculationType === 'monthlyPayment') {
      if (timelineYears === '') {
        errors.push('Please enter a desired payoff time.');
      } else if (isNaN(parseFloat(timelineYears)) || parseFloat(timelineYears) <= 0) {
        errors.push('Invalid payoff time. Must be a positive number.');
      }
    } else {
      if (monthlyPayment === '') {
        errors.push('Please enter a monthly payment amount.');
      } else if (isNaN(parseFloat(monthlyPayment)) || parseFloat(monthlyPayment) <= 0) {
        errors.push('Invalid monthly payment. Must be a positive number.');
      }
    }

    if (errors.length > 0) {
      setError(errors.join(' '));
      return false;
    }

    setError(null);
    return true;
  };

  const calculateLoan = useMemo(() => {
    if (!validateInputs()) {
      return null;
    }

    const validLoans = loans.filter(loan => loan.amount !== '' && loan.interestRate !== '');
    if (validLoans.length === 0) {
      return null;
    }

    const totalLoanAmount = validLoans.reduce((sum, loan) => sum + parseFloat(loan.amount), 0);
    const weightedInterestRate = validLoans.reduce((sum, loan) => sum + parseFloat(loan.interestRate) * parseFloat(loan.amount), 0) / totalLoanAmount;

    let monthlyPaymentResult: number;
    let timeToPayoffResult: number;
    let totalInterest: number;
    let totalPaid: number;

    if (calculationType === 'monthlyPayment' && timelineYears !== '') {
      const numberOfPayments = parseFloat(timelineYears) * 12;
      const monthlyRate = weightedInterestRate / 100 / 12;
      monthlyPaymentResult = (totalLoanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      timeToPayoffResult = parseFloat(timelineYears);
      totalPaid = monthlyPaymentResult * numberOfPayments;
      totalInterest = totalPaid - totalLoanAmount;
    } else if (calculationType === 'payoffTimeline' && monthlyPayment !== '') {
      monthlyPaymentResult = parseFloat(monthlyPayment);
      const { timeToPayoff, totalInterest: calculatedTotalInterest, totalPaid: calculatedTotalPaid } = calculateLoanPayoff(totalLoanAmount, weightedInterestRate, monthlyPaymentResult);

      if (!isFinite(timeToPayoff)) {
        setError("The monthly payment is too low to pay off the loan. Please increase the payment amount.");
        return null;
      }

      timeToPayoffResult = timeToPayoff;
      totalInterest = calculatedTotalInterest;
      totalPaid = calculatedTotalPaid;
    } else {
      return null;
    }

    // If there's only one loan, or if the payment strategy is standard, use the simple calculation
    if (validLoans.length === 1 || paymentStrategy === 'standard') {
      return {
        monthlyPayment: monthlyPaymentResult,
        timeToPayoff: timeToPayoffResult,
        totalInterest,
        totalPaid,
      };
    }

    // For multiple loans with snowball or avalanche strategy
    const loansCopy = validLoans.map(loan => ({ ...loan, amount: parseFloat(loan.amount), interestRate: parseFloat(loan.interestRate) }));
    const sortedLoans = loansCopy.sort((a, b) => 
      paymentStrategy === 'snowball' 
        ? a.amount - b.amount
        : b.interestRate - a.interestRate
    );

    let remainingPayment = monthlyPaymentResult;
    let totalMonths = 0;
    totalInterest = 0;
    totalPaid = 0;

    while (sortedLoans.some(loan => loan.amount > 0)) {
      totalMonths++;
      for (const loan of sortedLoans) {
        if (loan.amount > 0) {
          const interestPayment = loan.amount * (loan.interestRate / 100 / 12);
          let principalPayment = Math.min(remainingPayment, loan.amount + interestPayment);
          
          totalInterest += interestPayment;
          totalPaid += principalPayment;
          loan.amount -= (principalPayment - interestPayment);
          remainingPayment -= principalPayment;

          if (remainingPayment <= 0) break;
        }
      }
      remainingPayment = monthlyPaymentResult;
    }

    timeToPayoffResult = totalMonths / 12;

    return {
      monthlyPayment: monthlyPaymentResult,
      timeToPayoff: timeToPayoffResult,
      totalInterest,
      totalPaid,
    };
  }, [loans, calculationType, timelineYears, monthlyPayment, paymentStrategy]);

  useEffect(() => {
    setResults(calculateLoan);
  }, [calculateLoan]);

  const calculateLoanTerm = () => {
    if (calculationType === 'monthlyPayment' && timelineYears !== '') {
      return parseFloat(timelineYears);
    } else if (calculationType === 'payoffTimeline' && results) {
      return results.timeToPayoff;
    }
    return 10; // Default to 10 years if no valid term is available
  };

  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialCalculator",
    "name": "Student Loan Calculator",
    "description": "Use our free student loan calculator to estimate payments, compare repayment strategies, and plan your financial future. Trusted by students and graduates.",
    "url": "https://student-loan-calculator.com",
    "category": "Student Loans",
    "image": "https://student-loan-calculator.com/og-image.jpg"
  };

  return (
    <>
      <Helmet>
        <title>Student Loan Calculator | Estimate Payments and Compare Strategies</title>
        <meta name="description" content="Use our free student loan calculator to estimate monthly payments, compare repayment strategies, and plan your financial future. Trusted by students and graduates." />
        <script type="application/ld+json">{JSON.stringify(calculatorSchema)}</script>
      </Helmet>

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6 bg-blue-50">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Student Loan Calculator</h1>
          <p className="text-gray-600 mb-4">
            Estimate your monthly payments, compare repayment strategies, and plan your financial future with our comprehensive student loan calculator.
          </p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Loan Details</h2>
              {loans.map((loan, index) => (
                <div key={loan.id} className="mb-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label htmlFor={`amount-${loan.id}`} className="block text-sm text-gray-600">Amount ($)</label>
                      <input
                        id={`amount-${loan.id}`}
                        type="text"
                        value={loan.amount}
                        onChange={(e) => updateLoan(loan.id, 'amount', e.target.value)}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label htmlFor={`rate-${loan.id}`} className="block text-sm text-gray-600">Interest Rate (%)</label>
                      <input
                        id={`rate-${loan.id}`}
                        type="text"
                        value={loan.interestRate}
                        onChange={(e) => updateLoan(loan.id, 'interestRate', e.target.value)}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                  </div>
                  {index > 0 && (
                    <button onClick={() => removeLoan(loan.id)} className="text-red-500 text-sm mt-2">
                      Remove Loan
                    </button>
                  )}
                </div>
              ))}
              <button 
                onClick={addLoan} 
                className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600 transition-colors"
              >
                Add Another Loan
              </button>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Calculation Settings</h2>
              <div className="mb-4">
                <label htmlFor="calculationType" className="block text-sm text-gray-600 mb-1">
                  Calculation type
                </label>
                <select
                  id="calculationType"
                  value={calculationType}
                  onChange={(e) => setCalculationType(e.target.value as 'monthlyPayment' | 'payoffTimeline')}
                  className="w-full p-2 border rounded"
                >
                  <option value="payoffTimeline">Calculate payment timeline</option>
                  <option value="monthlyPayment">Calculate monthly payment</option>
                </select>
              </div>
              
              {calculationType === 'monthlyPayment' ? (
                <div className="mb-4">
                  <label htmlFor="timelineYears" className="block text-sm text-gray-600 mb-1">
                    Desired payoff time (years)
                  </label>
                  <input
                    type="number"
                    id="timelineYears"
                    value={timelineYears}
                    onChange={(e) => setTimelineYears(e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                </div>
              ) : (
                <div className="mb-4">
                  <label htmlFor="monthlyPayment" className="block text-sm text-gray-600 mb-1">
                    Monthly payment amount ($)
                  </label>
                  <input
                    type="number"
                    id="monthlyPayment"
                    value={monthlyPayment}
                    onChange={(e) => setMonthlyPayment(e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                </div>
              )}

              <div className="mb-4">
                <label htmlFor="paymentStrategy" className="block text-sm text-gray-600 mb-1">
                  Payment strategy
                </label>
                <select
                  id="paymentStrategy"
                  value={paymentStrategy}
                  onChange={(e) => setPaymentStrategy(e.target.value as 'standard' | 'snowball' | 'avalanche')}
                  className="w-full p-2 border rounded"
                >
                  <option value="standard">Standard (Pay all loans equally)</option>
                  <option value="snowball">Debt Snowball (Focus on smallest balance first)</option>
                  <option value="avalanche">Debt Avalanche (Focus on highest interest first)</option>
                </select>
              </div>
            </div>
          </div>
          
          {error && (
            <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}

          {(results || loans.some(loan => loan.amount !== '' && loan.interestRate !== '')) && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-center">Loan Repayment Summary</h2>
              {results && (
                <div className="grid grid-cols-2 gap-4 mb-4 max-w-2xl mx-auto">
                  <div className="text-center">
                    <h3 className="text-sm font-medium text-gray-700">Monthly payment</h3>
                    <p className="text-2xl font-bold text-gray-900">
                      ${results.monthlyPayment?.toFixed(2) ?? 'N/A'}
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-sm font-medium text-gray-700">Time to payoff</h3>
                    <p className="text-2xl font-bold text-gray-900">
                      {results.timeToPayoff
                        ? results.timeToPayoff < 1 
                          ? `${Math.round(results.timeToPayoff * 12)} months` 
                          : `${results.timeToPayoff.toFixed(2)} years`
                        : 'N/A'}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Total paid</p>
                    <p className="text-lg font-medium text-gray-900">
                      ${results.totalPaid?.toFixed(2) ?? 'N/A'}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Total interest paid</p>
                    <p className="text-lg font-medium text-gray-900">
                      ${results.totalInterest?.toFixed(2) ?? 'N/A'}
                    </p>
                  </div>
                </div>
              )}
              <PayoffChart 
                loans={loans.filter(loan => loan.amount !== '' && loan.interestRate !== '').map(loan => ({ 
                  ...loan, 
                  amount: parseFloat(loan.amount), 
                  interestRate: parseFloat(loan.interestRate) 
                }))} 
                monthlyPayment={results?.monthlyPayment || 0} 
                loanTerm={calculateLoanTerm()} 
              />
            </div>
          )}
        </div>

        <div className="p-6 bg-gray-50">
          <h2 className="text-2xl font-semibold mb-4">How to Use This Student Loan Calculator</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Enter the details for each of your student loans, including the loan amount and interest rate.</li>
            <li>Choose whether you want to calculate based on a fixed monthly payment or a desired payoff timeline.</li>
            <li>Select a repayment strategy: standard, snowball (paying off smallest loans first), or avalanche (paying off highest interest loans first).</li>
            <li>View your repayment summary and visualize your loan payoff journey.</li>
            <li>Experiment with different scenarios to find the best repayment strategy for your situation.</li>
          </ol>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Understand Your Student Loan Options</h2>
          <p className="mb-4">
            Choosing the right repayment strategy can save you money and help you become debt-free faster. Learn more about your options:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><Link to="/loan-types" className="text-blue-600 hover:underline">Types of Student Loans</Link></li>
            <li><Link to="/repayment-strategies" className="text-blue-600 hover:underline">Repayment Strategies Explained</Link></li>
            <li><Link to="/guide" className="text-blue-600 hover:underline">Comprehensive Student Loan Guide</Link></li>
          </ul>
        </div>

        <div className="p-6 bg-gray-50">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">How accurate is this student loan calculator?</h3>
              <p>Our calculator provides estimates based on the information you input. For the most accurate results, make sure to enter the exact loan amounts and interest rates from your loan statements.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Can I use this calculator for both federal and private student loans?</h3>
              <p>Yes, this calculator can be used for both federal and private student loans. Simply enter the details for each loan separately.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">What's the difference between the snowball and avalanche repayment methods?</h3>
              <p>The snowball method focuses on paying off the smallest loans first, while the avalanche method prioritizes loans with the highest interest rates. Learn more about these strategies on our <Link to="/repayment-strategies" className="text-blue-600 hover:underline">Repayment Strategies</Link> page.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoanCalculator;