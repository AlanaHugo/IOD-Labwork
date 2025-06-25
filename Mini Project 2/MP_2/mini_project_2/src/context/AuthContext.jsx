import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Load current user from localStorage on mount
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('currentUser'));
    if (savedUser) setUser(savedUser);
  }, []);

  // Register function
  const register = (username, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.find(u => u.username === username)) {
      return { success: false, message: 'Username already taken' };
    }

    const newUser = { username, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    setUser(newUser);

    return { success: true };
  };

  // Login function
  const login = (username, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const foundUser = users.find(u => u.username === username && u.password === password);

    if (foundUser) {
      localStorage.setItem('currentUser', JSON.stringify(foundUser));
      setUser(foundUser);
      return { success: true };
    } else {
      return { success: false, message: 'Invalid credentials' };
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('currentUser');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
