import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import UserList from '../features/users/components/pages/UserList';

import UserDetail from '../features/users/components/pages/UserDetail';

import AddEditUser from '../features/users/components/pages/AddEditUser';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/users" />} />
      <Route path="/users" element={<UserList />} />
      <Route path="/users/:id" element={<UserDetail />} />
      <Route path="/add-user" element={<AddEditUser />} />
      <Route path="/edit-user/:id" element={<AddEditUser />} />
    </Routes>
  </Router>
);

export default AppRoutes;
