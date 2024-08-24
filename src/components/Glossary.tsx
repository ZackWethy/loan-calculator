import React from 'react';
import { Helmet } from 'react-helmet-async';

const glossaryTerms = [
  { term: 'Direct Subsidized Loans', definition: 'Federal student loans for undergraduate students with financial need, where the government pays the interest while the student is in school.' },
  { term: 'Direct Unsubsidized Loans', definition: 'Federal loans available to undergraduate and graduate students regardless of financial need, where interest accrues while the student is in school.' },
  { term: 'Interest Rate', definition: 'The percentage of the principal amount charged by the lender for the use of its money.' },
  { term: 'Principal', definition: 'The original amount borrowed, excluding interest.' },
  { term: 'Deferment', definition: 'A period during which repayment of the principal and interest of a loan is temporarily delayed.' },
  { term: 'Forbearance', definition: 'A period during which your monthly loan payments are temporarily suspended or reduced.' },
  // Add more terms as needed
];

const Glossary: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Student Loan Glossary | Key Terms Explained</title>
        <meta name="description" content="Understand key student loan terms with our comprehensive glossary. From interest rates to repayment plans, we've got you covered." />
      </Helmet>

      <article className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Student Loan Glossary</h1>
        <p className="mb-6">Understanding the terminology associated with student loans is crucial for making informed decisions. Here's a comprehensive list of key terms you should know:</p>
        
        <dl className="space-y-4">
          {glossaryTerms.map(({ term, definition }) => (
            <div key={term} className="border-b pb-4">
              <dt className="font-medium text-lg">{term}</dt>
              <dd className="mt-1">{definition}</dd>
            </div>
          ))}
        </dl>
      </article>
    </>
  );
};

export default Glossary;