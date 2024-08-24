import React from 'react';
import { Helmet } from 'react-helmet-async';

const glossaryTerms = [
  { term: "Accrued Interest", definition: "Interest that has accumulated on the principal of a loan but has not yet been paid.", source: "https://studentaid.gov/understand-aid/types/loans/interest" },
  { term: "Amortization", definition: "The process of paying off a debt over time through regular payments.", source: "https://www.investopedia.com/terms/a/amortization.asp" },
  { term: "Annual Percentage Rate (APR)", definition: "The yearly cost of borrowing, including interest and fees, expressed as a percentage.", source: "https://www.consumerfinance.gov/ask-cfpb/what-is-an-apr-annual-percentage-rate-en-1989/" },
  { term: "Borrower", definition: "The person who receives the loan and is responsible for repaying it.", source: "https://studentaid.gov/understand-aid/types/loans/subsidized-unsubsidized" },
  { term: "Capitalization", definition: "The addition of unpaid interest to the principal balance of a loan.", source: "https://studentaid.gov/help-center/answers/article/capitalization" },
  { term: "Co-signer", definition: "A person who signs a loan agreement along with the primary borrower, agreeing to pay the debt if the borrower defaults.", source: "https://studentaid.gov/understand-aid/types/loans/plus" },
  { term: "Default", definition: "Failure to repay a loan according to the terms agreed to in the promissory note.", source: "https://studentaid.gov/manage-loans/default" },
  { term: "Deferment", definition: "A period during which repayment of the principal and interest of a loan is temporarily delayed.", source: "https://studentaid.gov/manage-loans/lower-payments/get-temporary-relief/deferment" },
  { term: "Direct Consolidation Loan", definition: "A federal loan that allows you to combine multiple federal education loans into one loan.", source: "https://studentaid.gov/manage-loans/consolidation" },
  { term: "Direct PLUS Loan", definition: "Federal loans that graduate students and parents of dependent undergraduate students can use to help pay for college or career school.", source: "https://studentaid.gov/understand-aid/types/loans/plus" },
  { term: "Direct Subsidized Loans", definition: "Federal student loans for undergraduate students with financial need, where the government pays the interest while the student is in school.", source: "https://studentaid.gov/understand-aid/types/loans/subsidized-unsubsidized" },
  { term: "Direct Unsubsidized Loans", definition: "Federal loans available to undergraduate and graduate students regardless of financial need, where interest accrues while the student is in school.", source: "https://studentaid.gov/understand-aid/types/loans/subsidized-unsubsidized" },
  { term: "Disbursement", definition: "The payment of loan funds to the borrower or to the school on the borrower's behalf.", source: "https://studentaid.gov/complete-aid-process/receive-aid" },
  { term: "Entrance Counseling", definition: "A mandatory information session that takes place before you receive your first federal student loan.", source: "https://studentaid.gov/entrance-counseling/" },
  { term: "Exit Counseling", definition: "A mandatory session for federal student loan borrowers who are graduating, leaving school, or dropping below half-time enrollment.", source: "https://studentaid.gov/exit-counseling/" },
  { term: "FAFSA", definition: "Free Application for Federal Student Aid; the form used to apply for federal student aid.", source: "https://studentaid.gov/h/apply-for-aid/fafsa" },
  { term: "Forbearance", definition: "A period during which your monthly loan payments are temporarily suspended or reduced.", source: "https://studentaid.gov/manage-loans/lower-payments/get-temporary-relief/forbearance" },
  { term: "Grace Period", definition: "A set period after graduation or dropping below half-time enrollment before you must begin repaying your student loans.", source: "https://studentaid.gov/help-center/answers/article/what-is-grace-period" },
  { term: "Income-Driven Repayment Plans", definition: "Federal student loan repayment plans that set your monthly payment based on your income and family size.", source: "https://studentaid.gov/manage-loans/repayment/plans/income-driven" },
  { term: "Interest Rate", definition: "The percentage of the principal amount charged by the lender for the use of its money.", source: "https://studentaid.gov/understand-aid/types/loans/interest-rates" },
  { term: "Loan Forgiveness", definition: "The cancellation of all or part of your federal student loan balance.", source: "https://studentaid.gov/manage-loans/forgiveness-cancellation" },
  { term: "Master Promissory Note (MPN)", definition: "A binding legal document you sign when getting a federal student loan.", source: "https://studentaid.gov/mpn/" },
  { term: "Principal", definition: "The original amount borrowed, excluding interest.", source: "https://studentaid.gov/help-center/answers/article/what-is-principal" },
  { term: "Private Student Loan", definition: "A non-federal loan issued by a lender such as a bank or credit union.", source: "https://studentaid.gov/understand-aid/types/loans/federal-vs-private" },
  { term: "Refinancing", definition: "The process of taking out a new loan to pay off one or more existing loans, potentially at a lower interest rate.", source: "https://studentaid.gov/manage-loans/consolidation" },
  { term: "Repayment Term", definition: "The period over which you are scheduled to repay your loan.", source: "https://studentaid.gov/manage-loans/repayment/plans" },
  { term: "Servicer", definition: "A company that handles the billing and other services on your federal student loan.", source: "https://studentaid.gov/manage-loans/repayment/servicers" },
  { term: "Standard Repayment Plan", definition: "The basic repayment plan for federal student loans with fixed payments over 10 years.", source: "https://studentaid.gov/manage-loans/repayment/plans/standard" },
  { term: "Subsidized Loan", definition: "A loan based on financial need for which the federal government pays the interest while the borrower is in school.", source: "https://studentaid.gov/understand-aid/types/loans/subsidized-unsubsidized" },
  { term: "Unsubsidized Loan", definition: "A loan for which the borrower is fully responsible for paying the interest regardless of the loan status.", source: "https://studentaid.gov/understand-aid/types/loans/subsidized-unsubsidized" }
];

const Glossary: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Student Loan Glossary | Key Terms Explained</title>
        <meta name="description" content="Understand key student loan terms with our comprehensive glossary. From interest rates to repayment plans, we've got you covered." />
      </Helmet>

      <article className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Student Loan Glossary</h1>
        <p className="mb-6">Understanding the terminology associated with student loans is crucial for making informed decisions. Here's a comprehensive list of key terms you should know:</p>
        
        <dl className="space-y-6">
          {glossaryTerms.map(({ term, definition, source }) => (
            <div key={term} className="border-b pb-4">
              <dt className="font-medium text-lg">{term}</dt>
              <dd className="mt-1">{definition}</dd>
              {source && (
                <dd className="mt-2 text-sm text-gray-600">
                  Source: <a href={source} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Official Reference</a>
                </dd>
              )}
            </div>
          ))}
        </dl>
      </article>
    </>
  );
};

export default Glossary;