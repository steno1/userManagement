import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { User } from '../../types';
import './UserDetail.css';

const UserDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const user = useSelector((state: RootState) =>
    state.users.users.find((u) => u.id === Number(id))
  ) as User | undefined;

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div className="user-detail">
      <h2>{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      {user.phone && <p><strong>Phone:</strong> {user.phone}</p>}
      {user.website && <p><strong>Website:</strong> {user.website}</p>}
      {user.address && (
        <>
          <h3>Address</h3>
          <p>{user.address.street}, {user.address.suite}</p>
          <p>{user.address.city}, {user.address.zipcode}</p>
        </>
      )}
      {user.company && (
        <>
          <h3>Company</h3>
          <p><strong>Name:</strong> {user.company.name}</p>
          <p><strong>Catch Phrase:</strong> {user.company.catchPhrase}</p>
          <p><strong>BS:</strong> {user.company.bs}</p>
        </>
      )}
    </div>
  );
};

export default UserDetail;