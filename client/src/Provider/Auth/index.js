  
import React, { useEffect, useState, createContext } from 'react';
import app from './config';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(true);
  const [isAuth, authenticate] = useState(false);

  useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser);
    authUser();
  }, []);

  const authUser = async () => {
    app.auth().onAuthStateChanged(user => {
      if( user ) authenticate( true );
      else authenticate( false );
    });
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAuth
      }}
    >
      { children }
    </AuthContext.Provider>
  );
};