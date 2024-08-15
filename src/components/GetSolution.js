import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import Header from './Header';

const GetSolution = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
  
    try {
      // Log values being sent to the API
      console.log('Submitting  with values:', { name, email, feedback });
  
      const response = await axios.post('http://localhost:8001/api/auth/feedback', {
        name,
        email,
        description: feedback,
      });
  
      // Log the response status
      console.log('API response status:', response.status);
  
      if (response.status === 200) {
        setSuccess('We Will Get Back to You Soon Thanks!');
        setName('');
        setEmail('');
        setFeedback('');
      } else {
        setError('Failed to submit .');
      }
    } catch (err) {
      // Log any error details
      console.error('Error occurred:', err);
      setError('An error occurred while submitting.');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div>
      <div className="container my-5">
        <h1>Get Solution :</h1>
       
        <form onSubmit={handleSubmit} className="feedback-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Mobile No </label>
            <input
              type="number"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="feedback">Enter Your Query Please </label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
              className="form-control"
              rows="5"
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
        {success && <div className="alert alert-success mt-3">{success}</div>}
        {error && <div className="alert alert-danger mt-3">{error}</div>}
      </div>
    </div>
  );
};

export default GetSolution;
