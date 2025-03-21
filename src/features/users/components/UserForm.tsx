import React, { useState, useEffect, FormEvent } from 'react';
import { User } from '../types';
import './UserForm.css';

interface UserFormProps {
  initialData?: User;
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<UserFormProps> = ({ initialData, onSubmit }) => {
  const [name, setName] = useState(initialData?.name || '');
  const [email, setEmail] = useState(initialData?.email || '');
  const [street, setStreet] = useState(initialData?.address.street || '');
  const [city, setCity] = useState(initialData?.address.city || '');
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    street: '',
    city: '',
  });

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setEmail(initialData.email);
      setStreet(initialData.address.street);
      setCity(initialData.address.city);
    }
  }, [initialData]);

  const validate = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', street: '', city: '' };

    if (!name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Valid email is required';
      isValid = false;
    }

    if (!street.trim()) {
      newErrors.street = 'Street is required';
      isValid = false;
    }

    if (!city.trim()) {
      newErrors.city = 'City is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const user: User = {
      id: initialData ? initialData.id : Date.now(),
      name,
      username: initialData?.username || '', // Optional default
      email,
      phone: initialData?.phone || '',
      website: initialData?.website || '',
      address: {
        street,
        suite: initialData?.address.suite || '', // Default empty
        city,
        zipcode: initialData?.address.zipcode || '',
        geo: {
          lat: initialData?.address.geo.lat || '',
          lng: initialData?.address.geo.lng || '',
        },
      },
      company: {
        name: initialData?.company.name || '',
        catchPhrase: initialData?.company.catchPhrase || '',
        bs: initialData?.company.bs || '',
      },
    };

    onSubmit(user);

    if (!initialData) {
      setName('');
      setEmail('');
      setStreet('');
      setCity('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <h2>{initialData ? 'Edit User' : 'Add User'}</h2>

      <div className="input-group">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        {errors.name && <span className="error-text">{errors.name}</span>}
      </div>

      <div className="input-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        {errors.email && <span className="error-text">{errors.email}</span>}
      </div>

      <div className="input-group">
        <label>Street:</label>
        <input
          type="text"
          value={street}
          onChange={e => setStreet(e.target.value)}
        />
        {errors.street && <span className="error-text">{errors.street}</span>}
      </div>

      <div className="input-group">
        <label>City:</label>
        <input
          type="text"
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        {errors.city && <span className="error-text">{errors.city}</span>}
      </div>

      <button type="submit" className="submit-btn">
        {initialData ? 'Update User' : 'Add User'}
      </button>
    </form>
  );
};

export default UserForm;
