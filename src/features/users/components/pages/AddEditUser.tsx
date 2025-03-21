import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addUser, updateUser } from '../../userSlice';

import {RootState, AppDispatch } from '../../../../app/store';

import { useNavigate, useParams } from 'react-router-dom';

import UserForm from '../UserForm';

import { User } from '../../types';
import './AddEditUser.css'

const AddEditUser: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  
  const users = useSelector((state: RootState) => state.users.users);
  const existingUser = users.find(user => user.id === Number(id));

  const handleSubmit = (userData: User) => {
    if (existingUser) {
      dispatch(updateUser(userData));
    } else {
      dispatch(addUser(userData));
    }
    navigate('/users');
  };

  return (
    <div className="form-container">
      <h2>{existingUser ? 'Edit User' : 'Add User'}</h2>
      <UserForm initialData={existingUser} onSubmit={handleSubmit} />
    </div>
  );
};

export default AddEditUser;
