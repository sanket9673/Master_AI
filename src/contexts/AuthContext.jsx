import React from 'react';
import { useSetState } from 'react-use';

const initialState = {
  isLoggedIn: false,
  isLoginPending: false,
  loginError: null,
};

export const AuthContext = React.createContext(null);

export const ContextProvider = (props) => {
  const [state, setState] = useSetState(initialState);

  const setLoginPending = (isLoginPending) => setState({ isLoginPending });
  const setLoginSuccess = (isLoggedIn, username) => setState({ isLoggedIn, username }); // Pass username
  const setLoginError = (loginError) => setState({ loginError });

  const login = (email, password, callback) => {
    setLoginPending(true);
    setLoginSuccess(false);
    setLoginError(null);

    // Simulate a login request
    fetchLogin(email, password, (error) => {
      setLoginPending(false);

      if (!error) {
        setLoginSuccess(true, email); // Use email as username for demo
        if (callback) callback();  // Navigate on success
      } else {
        setLoginError(error);
      }
    });
  };

  const logout = (callback) => {
    setState(initialState); // Reset to initial state
    if (callback) callback(); // Callback to navigate after logout
  };

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

// Simulated login function
const fetchLogin = (email, password, callback) => {
  setTimeout(() => {
    if (email === 'admin' && password === 'admin') {
      return callback(null);  // success
    } else {
      return callback(new Error('Invalid email and password'));  // failure
    }
  }, 1000);
};

export default AuthContext; 
