import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, deleteUser } from '../../userSlice';
import { RootState, AppDispatch } from '../../../../app/store';
import UserCard from '../UserCard';
import { Link } from 'react-router-dom';
import './UserList.css';

const UserList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.users.users);
  const loading = useSelector((state: RootState) => state.users.loading);
  const error = useSelector((state: RootState) => state.users.error);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers());
    }
  }, [dispatch, users.length]);

  const handleDelete = (id: number) => {
    dispatch(deleteUser(id));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="user-list-container">
      <div className="user-list-header">
        <h2>User List</h2>
        <Link to="/add-user">
          <button className="add-user-button">Add User</button>
        </Link>
      </div>

      <div className="user-list">
        {users.map(user => (
          <UserCard key={user.id} user={user} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
