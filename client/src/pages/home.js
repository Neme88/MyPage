import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3002/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          {post.author && <p>Author: {post.author}</p>}
          <p>Created At: {new Date(post.createdAt).toLocaleString()}</p>
          <Link to={`/posts/${post._id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
};

//export default Home;

