import React, {useEffect, useState} from 'react';
import './users.css';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/users');
        const data = await response.json();

        if (response.ok) {
          setUsers(data);
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError('Error occurred while fetching users.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="user-container">
      <h2>User List</h2>
      {users.map(user => (
        <div key={user.id} className="user-card">
          <h3>{user.username}</h3>
        </div>
      ))}
    </div>
  );
};

export default Users;
