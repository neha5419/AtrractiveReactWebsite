import React from 'react';
import './BlogPosts.css';

const BlogPosts = ({ posts }) => {
  return (
    <section className="blog-posts">
      <h2>Blog Posts</h2>
      <div className="posts-grid">
        {posts.map((post, index) => (
          <div className="post-card" key={index}>
            <img src={post.image} alt={post.title} className="post-image" />
            <h3 className="post-title">{post.title}</h3>
            <p className="post-summary">{post.summary}</p>
            <a href={post.link} className="read-more">Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPosts;
