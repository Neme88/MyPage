import React, { useState } from 'react';
import axios from 'axios';

export const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [authorId, setAuthorId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3002/posts', {
        title,
        content,
        authorId,
      });

      console.log('Blog post created:', response.data);
      alert('Your blog post has been successfully submitted!');
      // Optionally, you can redirect the user to the home page or show a success message
    } catch (error) {
      console.error('Error creating blog post:', error);
      // Handle error: display error message to the user or log it
    }
  };

  return (
    <div>
      <h1>Create a New Blog Post</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="title">Title:</label>
        <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          rows="10"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <label htmlFor="authorId">Author ID:</label>
        <input id="authorId" type="text" value={authorId} onChange={(e) => setAuthorId(e.target.value)} />

        <button type="submit">Create Blog Post</button>
      </form>
    </div>
  );
};

//export default CreatePost;

