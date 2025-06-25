import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from './AuthContext';

export default function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    // Redirect to login if not logged in
    return <Navigate to="/login" replace />;
  }

  return children;
}
