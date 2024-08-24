import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqItems: FAQItem[] = [
  {
    question: "What is the difference between federal and private student loans?",
    answer: (
      <>
        Federal student loans are offered by the government and typically have more favorable terms, including fixed interest rates, income-driven repayment plans, and potential loan forgiveness. Private student loans are offered by banks, credit unions, and other financial institutions, often with variable interest rates and fewer repayment options. Learn more about <Link to="/loan-types" className="text-blue-600 hover:underline">loan types here</Link>.
      </>
    )
  },
  {
    question: "How do I apply for federal student loans?",
    answer: "To apply for federal student loans, you need to complete the Free Application for Federal Student Aid (FAFSA). This form can be filled out online at studentaid.gov. It's important to submit your FAFSA as early as possible, as some aid is awarded on a first-come, first-served basis."
  },
  {
    question: "What is the current interest rate for federal student loans?",
    answer: "Interest rates for federal student loans are set annually by Congress and can vary based on the loan type and your academic level. For the most current rates, visit the official Federal Student Aid website or use our loan calculator to estimate payments with current rates."
  },
  {
    question: "Can I refinance my student loans?",
    answer: "Yes, you can refinance both federal and private student loans. Refinancing can potentially lower your interest rate or extend your repayment term. However, refinancing federal loans with a private lender means losing federal benefits like income-driven repayment plans and loan forgiveness options. Consider the pros and cons carefully before refinancing."
  },
  {
    question: "What are income-driven repayment plans?",
    answer: "Income-driven repayment plans are federal repayment options that base your monthly payment on your income and family size. These plans can make your payments more affordable and may lead to loan forgiveness after 20-25 years of payments. There are several types of income-driven plans, including Income-Based Repayment (IBR), Pay As You Earn (PAYE), and Revised Pay As You Earn (REPAYE)."
  },
  {
    question: "How can I calculate my student loan payments?",
    answer: (
      <>
        You can use our <Link to="/" className="text-blue-600 hover:underline">student loan calculator</Link> to estimate your monthly payments based on your loan amount, interest rate, and repayment term. This tool can help you compare different repayment scenarios and plan your budget accordingly.
      </>
    )
  },
  // Add more FAQ items as needed
];

const FAQ: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Student Loan FAQ | Answers to Common Questions</title>
        <meta name="description" content="Find answers to frequently asked questions about student loans, including federal and private loans, repayment options, interest rates, and more." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": typeof item.answer === 'string' ? item.answer : 'See website for detailed answer.'
              }
            }))
          })}
        </script>
      </Helmet>

      <article className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions About Student Loans</h1>
        
        <p className="mb-8">
          Find answers to common questions about student loans below. If you can't find what you're looking for, feel free to contact us or use our <Link to="/" className="text-blue-600 hover:underline">student loan calculator</Link> for personalized estimates.
        </p>

        <div className="space-y-8">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b pb-6">
              <h2 className="text-xl font-semibold mb-2">{item.question}</h2>
              <div className="text-gray-700">{item.answer}</div>
            </div>
          ))}
        </div>

        <section className="mt-12 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Still Have Questions?</h2>
          <p className="mb-4">
            Our comprehensive student loan calculator can help you estimate payments and compare different loan scenarios.
          </p>
          <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors inline-block">
            Try Our Loan Calculator
          </Link>
        </section>
      </article>
    </>
  );
};

export default FAQ;