import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartOptions } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Loan {
  id: number;
  amount: number;
  interestRate: number;
}

interface PayoffChartProps {
  loans: Loan[];
  monthlyPayment: number;
  loanTerm: number;
}

const PayoffChart: React.FC<PayoffChartProps> = ({ loans, monthlyPayment, loanTerm }) => {
  const generateChartData = () => {
    const labels: string[] = [];
    const principalData: number[] = [];
    const interestData: number[] = [];

    let remainingBalances = loans.map(loan => loan.amount);
    let totalBalance = remainingBalances.reduce((sum, balance) => sum + balance, 0);
    const monthlyInterestRates = loans.map(loan => loan.interestRate / 100 / 12);

    for (let month = 0; month <= loanTerm * 12; month++) {
      if (month % 3 === 0) {
        labels.push(`Month ${month}`);
      }

      if (totalBalance <= 0) {
        principalData.push(0);
        interestData.push(0);
        continue;
      }

      const interestPayment = remainingBalances.reduce((sum, balance, index) => 
        sum + balance * monthlyInterestRates[index], 0);
      let principalPayment = monthlyPayment - interestPayment;

      if (principalPayment > totalBalance) {
        principalPayment = totalBalance;
      }

      totalBalance -= principalPayment;

      // Distribute principal payment across loans
      for (let j = 0; j < remainingBalances.length; j++) {
        const loanShare = remainingBalances[j] / totalBalance;
        const loanPrincipalPayment = principalPayment * loanShare;
        remainingBalances[j] -= loanPrincipalPayment;
        if (remainingBalances[j] < 0) remainingBalances[j] = 0;
      }

      if (month % 3 === 0) {
        principalData.push(principalPayment);
        interestData.push(interestPayment);
      }
    }

    return { labels, principalData, interestData };
  };

  const { labels, principalData, interestData } = generateChartData();

  const data = {
    labels,
    datasets: [
      {
        label: 'Principal',
        data: principalData,
        backgroundColor: 'rgba(54, 162, 235, 0.8)',
      },
      {
        label: 'Interest',
        data: interestData,
        backgroundColor: 'rgba(255, 99, 132, 0.8)',
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: 'Amount ($)',
        },
        ticks: {
          callback: (value) => `$${value.toLocaleString()}`,
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
            }
            return label;
          }
        }
      },
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
      },
    },
  };

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default PayoffChart;