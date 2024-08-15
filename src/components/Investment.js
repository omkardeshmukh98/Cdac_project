import React, { useState, useEffect } from 'react';
import '../css/InvestmentLogger.css';

const InvestmentLogger = () => {
  const [investments, setInvestments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [newInvestment, setNewInvestment] = useState({
    crop: '',
    description: '',
    amount: '',
    date: '',
  });

  useEffect(() => {
    const fetchInvestments = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:8001/api/auth/investments');
        const data = await response.json();
        setInvestments(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInvestments();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const totalAmount = investments.reduce((acc, current) => acc + current.amount, 0);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8001/api/auth/investments/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        setInvestments(investments.filter((investment) => investment.id !== id));
      } else {
        console.error('Error deleting investment:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error deleting investment:', error);
    }
  };

  const handleAddExpense = async () => {
    const currentDate = new Date();
    const newInvestmentData = { ...newInvestment, date: currentDate.toISOString() };
    try {
      const response = await fetch('http://localhost:8001/api/auth/investments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newInvestmentData),
      });
      if (response.ok) {
        const newInvestmentData = await response.json();
        setInvestments([...investments, newInvestmentData]);
        setShowForm(false);
      } else {
        console.error('Error adding investment:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error adding investment:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewInvestment({ ...newInvestment, [name]: value });
  };

  return (
    <div className="container">
      <h1><b>Investment Logger</b></h1>
      <div className="add-expense-container">
  <button className="add-expense-button" onClick={() => setShowForm(!showForm)}>Add Expense</button>
  {showForm && (
    <form className={`add-expense-form ${showForm ? 'show' : ''}`}>
            <label>
              Crop:
              <input type="text" name="crop" value={newInvestment.crop} onChange={handleInputChange} />
            </label>
            <br />
            <label>
              Description:
              <input type="text" name="description" value={newInvestment.description} onChange={handleInputChange} />
            </label>
            <br />
            <label>
              Amount:
              <input type="number" name="amount" value={newInvestment.amount} onChange={handleInputChange} />
            </label>
            <br />
            <button onClick={handleAddExpense}>Submit</button>
          </form>
        )}
      </div>
      {investments.length === 0 ? (
        <h2>No expenses found.</h2>
      ) : (
        <table className="investment-table">
          <thead>
            <tr>
              <th>Crop</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {investments.map((investment) => (
              <tr key={investment.id}>
                <td>{investment.crop}</td>
                <td>{investment.description}</td>
                <td>{investment.amount}</td>
                <td>{investment.date}</td>
                <td>
                  <button onClick={() => handleDelete(investment.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colspan={2}>Total</td>
              <td>{totalAmount}</td>
              <td />
              <td />
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
};

export default InvestmentLogger;