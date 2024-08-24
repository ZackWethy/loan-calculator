import React from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Student Loan Calculator</Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/guide" className="hover:underline">Student Loan Guide</Link></li>
              <li><Link to="/loan-types" className="hover:underline">Loan Types</Link></li>
              <li><Link to="/repayment-strategies" className="hover:underline">Repayment Strategies</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-4">
        {children}
      </main>

      <footer className="bg-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="text-sm text-gray-600 text-center">
            © 2023 Student Loan Calculator. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;