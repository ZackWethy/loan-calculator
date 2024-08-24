import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path: string) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Student Loan Calculator</Link>
          <button className="md:hidden" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} absolute md:relative top-16 md:top-0 left-0 right-0 bg-blue-600 md:bg-transparent`}>
            <ul className="md:flex space-y-2 md:space-y-0 md:space-x-4 p-4 md:p-0">
              <li><button onClick={() => handleNavigation('/')} className="block hover:text-blue-200 w-full text-left">Calculator</button></li>
              <li><button onClick={() => handleNavigation('/guide')} className="block hover:text-blue-200 w-full text-left">Guide</button></li>
              <li><button onClick={() => handleNavigation('/loan-types')} className="block hover:text-blue-200 w-full text-left">Loan Types</button></li>
              <li><button onClick={() => handleNavigation('/repayment-strategies')} className="block hover:text-blue-200 w-full text-left">Repayment</button></li>
              <li><button onClick={() => handleNavigation('/glossary')} className="block hover:text-blue-200 w-full text-left">Glossary</button></li>
              <li><button onClick={() => handleNavigation('/faq')} className="block hover:text-blue-200 w-full text-left">FAQ</button></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-gray-100 text-center py-4">
        <p>&copy; 2024 Student Loan Calculator. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;