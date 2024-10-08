import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import LoanCalculator from './components/LoanCalculator';
import StudentLoanGuide from './components/StudentLoanGuide';
import LoanTypes from './components/LoanTypes';
import RepaymentStrategies from './components/RepaymentStrategies';
import Glossary from './components/Glossary';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LoanCalculator />} />
            <Route path="/guide" element={<StudentLoanGuide />} />
            <Route path="/loan-types" element={<LoanTypes />} />
            <Route path="/repayment-strategies" element={<RepaymentStrategies />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;