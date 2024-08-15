import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import Header from './Header';

const Feedback = () => {
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
      console.log('Submitting feedback with values:', { name, email, feedback });
  
      const response = await axios.post('http://localhost:8001/api/auth/feedback', {
        name,
        email,
        description: feedback,
      });
  
      // Log the response status
      console.log('API response status:', response.status);
  
      if (response.status === 200) {
        setSuccess('Feedback submitted successfully!');
        setName('');
        setEmail('');
        setFeedback('');
      } else {
        setError('Failed to submit feedback.');
      }
    } catch (err) {
      // Log any error details
      console.error('Error occurred:', err);
      setError('An error occurred while submitting feedback.');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div>
      <div className="container my-5">
        <h1>Feedback</h1>
        <p>
          We value your feedback. Please let us know your thoughts about our services or any suggestions you may have.
        </p>
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
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="feedback">Feedback</label>
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

export default Feedback;
