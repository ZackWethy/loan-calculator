import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import QuickCalculator from './QuickCalculator';
import Tooltip from './Tooltip';

const LoanTypes: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Student Loan Types Explained | Federal vs Private Loans Comparison</title>
        <meta name="description" content="Compare federal and private student loan types with our comprehensive guide. Understand the pros and cons of each loan type, estimate payments, and make informed decisions about financing your education." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Student Loan Types Explained: Federal vs Private Loans",
              "description": "Learn about different types of student loans and compare federal and private loan options to make informed decisions about financing your education.",
              "author": {
                "@type": "Organization",
                "name": "Student Loan Calculator"
              },
              "mainEntity": {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What are the main types of student loans?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The main types of student loans are federal loans (including Direct Subsidized, Direct Unsubsidized, Direct PLUS, and Direct Consolidation Loans) and private loans offered by banks and other financial institutions."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What are the advantages of federal student loans?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Federal student loans typically offer lower interest rates, income-driven repayment plans, loan forgiveness options, and more borrower protections compared to private loans."
                    }
                  }
                ]
              }
            }
          `}
        </script>
      </Helmet>

      <article className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Student Loan Types: Federal vs Private Loans</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Overview of Student Loan Types</h2>
          <p className="mb-4">
            Student loans fall into two main categories: <Tooltip term="federal loans" definition="Loans provided by the U.S. Department of Education, offering fixed interest rates and various repayment options.">federal loans</Tooltip> and <Tooltip term="private loans" definition="Loans offered by private lenders such as banks or credit unions, often with variable interest rates.">private loans</Tooltip>. Each type has its own features, benefits, and drawbacks. Understanding these differences is crucial for making informed decisions about financing your education.
          </p>
          <p className="mb-4">
            Use our <Link to="/" className="text-blue-600 hover:underline">comprehensive student loan calculator</Link> to compare different loan types and estimate your payments.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Quick Loan Comparison Calculator</h2>
          <p className="mb-4">
            Use this calculator to quickly estimate payments for different loan types:
          </p>
          <QuickCalculator />
          <p className="mt-4">
            For a more detailed analysis, try our <Link to="/" className="text-blue-600 hover:underline">advanced student loan calculator</Link>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Federal Student Loans</h2>
          <p className="mb-4">
            Federal student loans are offered by the U.S. Department of Education and typically provide more benefits and protections than private loans.
          </p>
          <h3 className="text-xl font-medium mb-2">Types of Federal Student Loans</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">
              <strong><Tooltip term="Direct Subsidized Loans" definition="Federal loans for undergraduate students with financial need, where the government pays the interest while the student is in school.">Direct Subsidized Loans</Tooltip>:</strong> Available to undergraduate students with financial need. The government pays the interest while you're in school.
            </li>
            <li className="mb-2">
              <strong><Tooltip term="Direct Unsubsidized Loans" definition="Federal loans available to undergraduate and graduate students regardless of financial need, where interest accrues while the student is in school.">Direct Unsubsidized Loans</Tooltip>:</strong> Available to undergraduate and graduate students, regardless of financial need. Interest accrues while you're in school.
            </li>
            <li className="mb-2">
              <strong><Tooltip term="Direct PLUS Loans" definition="Federal loans available to graduate students and parents of dependent undergraduate students, with credit check required.">Direct PLUS Loans</Tooltip>:</strong> Available to graduate students and parents of dependent undergraduate students. Credit check required.
            </li>
            <li className="mb-2">
              <strong><Tooltip term="Direct Consolidation Loans" definition="Federal loans that allow you to combine multiple federal education loans into a single loan.">Direct Consolidation Loans</Tooltip>:</strong> Allows you to combine multiple federal education loans into a single loan.
            </li>
          </ul>
          <p className="mb-4">
            Learn more about <Link to="/repayment-strategies" className="text-blue-600 hover:underline">federal loan repayment strategies</Link> to find the best option for your situation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Private Student Loans</h2>
          <p className="mb-4">
            Private student loans are offered by banks, credit unions, and other financial institutions. They can help bridge the gap when federal loans, scholarships, and grants don't cover all your education expenses.
          </p>
          <h3 className="text-xl font-medium mb-2">Features of Private Student Loans</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Credit-based approval and pricing</li>
            <li className="mb-2">May require a cosigner</li>
            <li className="mb-2">Variable or fixed interest rates</li>
            <li className="mb-2">Various repayment options</li>
            <li className="mb-2">Fewer borrower protections compared to federal loans</li>
          </ul>
          <p className="mb-4">
            Understand the <Link to="/guide#private-loans" className="text-blue-600 hover:underline">pros and cons of private student loans</Link> before making a decision.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Comparing Federal and Private Student Loans</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 mb-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2">Feature</th>
                  <th className="border border-gray-300 p-2">Federal Loans</th>
                  <th className="border border-gray-300 p-2">Private Loans</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">Interest Rates</td>
                  <td className="border border-gray-300 p-2">Fixed rates set by Congress</td>
                  <td className="border border-gray-300 p-2">Variable or fixed rates based on creditworthiness</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Eligibility</td>
                  <td className="border border-gray-300 p-2">Based on financial need; no credit check for most</td>
                  <td className="border border-gray-300 p-2">Based on credit score and income</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Loan Limits</td>
                  <td className="border border-gray-300 p-2">Annual and aggregate limits</td>
                  <td className="border border-gray-300 p-2">Up to cost of attendance</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Repayment Plans</td>
                  <td className="border border-gray-300 p-2">Multiple options, including income-driven plans</td>
                  <td className="border border-gray-300 p-2">Varies by lender, generally less flexible</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Loan Forgiveness</td>
                  <td className="border border-gray-300 p-2">Available for certain public service jobs</td>
                  <td className="border border-gray-300 p-2">Generally not available</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Deferment/Forbearance</td>
                  <td className="border border-gray-300 p-2">Multiple options available</td>
                  <td className="border border-gray-300 p-2">Limited options, varies by lender</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mb-4">
            This table provides a general comparison. Specific terms may vary. Use our <Link to="/" className="text-blue-600 hover:underline">student loan calculator</Link> to compare the long-term costs of federal and private loans based on your specific situation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">What are the main types of student loans?</h3>
              <p>The main types of student loans are federal loans (including Direct Subsidized, Direct Unsubsidized, Direct PLUS, and Direct Consolidation Loans) and private loans offered by banks and other financial institutions.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">What are the advantages of federal student loans?</h3>
              <p>Federal student loans typically offer lower interest rates, income-driven repayment plans, loan forgiveness options, and more borrower protections compared to private loans.</p>
            </div>
            {/* ... more FAQ items ... */}
          </div>
        </section>

        <section className="mb-8 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Need Help Choosing the Right Loan?</h2>
          <p className="mb-4">
            Our comprehensive student loan calculator can help you compare different loan types and find the best option for your situation.
          </p>
          <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
            Use Our Loan Calculator
          </Link>
        </section>

        <nav className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Related Resources</h2>
          <ul className="list-disc pl-6">
            <li><Link to="/guide" className="text-blue-600 hover:underline">Comprehensive Student Loan Guide</Link></li>
            <li><Link to="/repayment-strategies" className="text-blue-600 hover:underline">Student Loan Repayment Strategies</Link></li>
            <li><Link to="/faq" className="text-blue-600 hover:underline">Student Loan FAQ</Link></li>
            <li><Link to="/glossary" className="text-blue-600 hover:underline">Student Loan Glossary</Link></li>
          </ul>
        </nav>
      </article>
    </>
  );
};

export default LoanTypes;