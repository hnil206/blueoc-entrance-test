import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from './postsSlice';
import '../../css/PostForm.css';

const PostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && body) {
      dispatch(addPost({ title, body }));
      setTitle('');
      setBody('');
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h2>Add New Post</h2>
      
      {showSuccess && (
        <div className="success-message">
          Post added successfully!
        </div>
      )}
      
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      
      <div className="form-group">
        <textarea
          className="form-control"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          rows="5"
        ></textarea>
      </div>
      
      <button 
        type="submit" 
        className="btn btn-primary"
        disabled={!title || !body}
      >
        Add Post
      </button>
    </form>
  );
};

export default PostForm;