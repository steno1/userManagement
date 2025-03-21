import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../types';
import './UserCard.css';

interface UserCardProps {
  user: User;
  onDelete: (id: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onDelete }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/edit-user/${user.id}`);
  };

  const handleView = () => {
    navigate(`/users/${user.id}`);
  };

  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Address: {user.address.street}, {user.address.city}</p>
      <div className="user-card__buttons">
        <button onClick={handleView}>View</button>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => onDelete(user.id)}>Delete</button>
      </div>
    </div>
  );
};

export default UserCard;