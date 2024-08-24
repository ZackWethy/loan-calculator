import UnderstandingStudentLoanInterest from '../components/blog-posts/UnderstandingStudentLoanInterest';
import FederalVsPrivateLoans from '../components/blog-posts/FederalVsPrivateLoans';
import LoanForgivenessPrograms from '../components/blog-posts/LoanForgivenessPrograms';
import IncomeDrivenRepayment from '../components/blog-posts/IncomeDrivenRepayment';
import ImprovingCreditScore from '../components/blog-posts/ImprovingCreditScore';
import RefinancingStudentLoans from '../components/blog-posts/RefinancingStudentLoans';
import BudgetingForLoanRepayment from '../components/blog-posts/BudgetingForLoanRepayment';
import LoanRepaymentStrategies from '../components/blog-posts/LoanRepaymentStrategies';
import ManagingMultipleLoans from '../components/blog-posts/ManagingMultipleLoans';
import StudentLoanScams from '../components/blog-posts/StudentLoanScams';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  slug: string;
  component: React.ComponentType;
}

export const blogPosts: BlogPost[] = [
  {
    id: "understanding-student-loan-interest",
    title: "Understanding Student Loan Interest: How It Works and Ways to Minimize It",
    excerpt: "Learn how student loan interest is calculated and discover strategies to reduce the overall interest you'll pay on your loans.",
    date: "2024-08-24",
    author: "Financial Aid Expert",
    slug: "understanding-student-loan-interest",
    component: UnderstandingStudentLoanInterest
  },
  {
    id: "federal-vs-private-loans",
    title: "Federal vs. Private Student Loans: Which is Right for You?",
    excerpt: "Compare the pros and cons of federal and private student loans to determine the best option for your education financing needs.",
    date: "2024-08-23",
    author: "Loan Specialist",
    slug: "federal-vs-private-loans",
    component: FederalVsPrivateLoans
  },
  {
    id: "loan-forgiveness-programs",
    title: "A Guide to Student Loan Forgiveness Programs",
    excerpt: "Explore various student loan forgiveness programs and find out if you qualify for any of them.",
    date: "2024-08-22",
    author: "Education Policy Analyst",
    slug: "loan-forgiveness-programs",
    component: LoanForgivenessPrograms
  },
  {
    id: "income-driven-repayment",
    title: "Income-Driven Repayment Plans: Are They Right for You?",
    excerpt: "Understand how income-driven repayment plans work and determine if they're a good fit for your financial situation.",
    date: "2024-08-20",
    author: "Financial Planner",
    slug: "income-driven-repayment",
    component: IncomeDrivenRepayment
  },
  {
    id: "improving-credit-score",
    title: "How to Improve Your Credit Score While Paying Off Student Loans",
    excerpt: "Discover strategies to boost your credit score while managing your student loan repayments.",
    date: "2024-08-18",
    author: "Credit Counselor",
    slug: "improving-credit-score",
    component: ImprovingCreditScore
  },
  {
    id: "refinancing-student-loans",
    title: "The Pros and Cons of Refinancing Your Student Loans",
    excerpt: "Weigh the advantages and disadvantages of refinancing your student loans to make an informed decision.",
    date: "2024-08-16",
    author: "Financial Advisor",
    slug: "refinancing-student-loans",
    component: RefinancingStudentLoans
  },
  {
    id: "budgeting-for-loan-repayment",
    title: "Creating a Budget for Successful Student Loan Repayment",
    excerpt: "Learn how to create an effective budget that prioritizes your student loan repayment without sacrificing your quality of life.",
    date: "2024-08-14",
    author: "Personal Finance Expert",
    slug: "budgeting-for-loan-repayment",
    component: BudgetingForLoanRepayment
  },
  {
    id: "loan-repayment-strategies",
    title: "Comparing Loan Repayment Strategies: Snowball vs. Avalanche",
    excerpt: "Analyze the differences between the snowball and avalanche repayment methods to choose the best strategy for your loans.",
    date: "2024-08-12",
    author: "Debt Management Specialist",
    slug: "loan-repayment-strategies",
    component: LoanRepaymentStrategies
  },
  {
    id: "managing-multiple-loans",
    title: "Tips for Managing Multiple Student Loans Effectively",
    excerpt: "Get practical advice on how to keep track of and efficiently repay multiple student loans.",
    date: "2024-08-10",
    author: "Loan Servicing Expert",
    slug: "managing-multiple-loans",
    component: ManagingMultipleLoans
  },
  {
    id: "student-loan-scams",
    title: "How to Avoid Student Loan Scams and Predatory Practices",
    excerpt: "Learn to identify and protect yourself from common student loan scams and predatory lending practices.",
    date: "2024-08-08",
    author: "Consumer Protection Advocate",
    slug: "student-loan-scams",
    component: StudentLoanScams
  }
];