import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const BlogPostComponent = post.component;

  return (
    <div className="blog-post-container">
      <BlogPostComponent />
    </div>
  );
};

export default BlogPost;