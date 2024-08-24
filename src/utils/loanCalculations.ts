export const calculateLoanPayoff = (
    totalLoanAmount: number,
    weightedInterestRate: number,
    monthlyPayment: number
  ): { timeToPayoff: number; totalInterest: number; totalPaid: number } => {
    const monthlyRate = weightedInterestRate / 100 / 12;
    const timeToPayoff = Math.log(monthlyPayment / (monthlyPayment - totalLoanAmount * monthlyRate)) / Math.log(1 + monthlyRate) / 12;
    const totalPaid = monthlyPayment * timeToPayoff * 12;
    const totalInterest = totalPaid - totalLoanAmount;
  
    return { timeToPayoff, totalInterest, totalPaid };
  };
  