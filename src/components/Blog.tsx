import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const Blog: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Student Loan Blog | Expert Advice and Tips</title>
        <meta name="description" content="Stay informed about student loans with our expert blog. Get tips on loan management, repayment strategies, and financial planning for your education." />
      </Helmet>

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6 bg-blue-50">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Student Loan Blog</h1>
          <p className="text-gray-600 mb-4">
            Expert advice, tips, and insights to help you navigate the world of student loans and make informed financial decisions.
          </p>
        </div>

        <div className="p-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="mb-8 border-b pb-6">
              <h2 className="text-2xl font-semibold mb-2">
                <Link to={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-2">{post.excerpt}</p>
              <div className="text-sm text-gray-500">
                <span>{post.date}</span> • <span>{post.author}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 bg-gray-50">
          <h2 className="text-2xl font-semibold mb-4">Need Help with Your Student Loans?</h2>
          <p className="mb-4">
            Use our comprehensive student loan calculator to estimate payments, compare repayment strategies, and plan your financial future.
          </p>
          <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors inline-block">
            Try Our Loan Calculator
          </Link>
        </div>
      </div>
    </>
  );
};

export default Blog;