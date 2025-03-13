import { createContext, useState, ReactNode, useEffect } from 'react';
import {
  MaybeAuthenticatedUser,
  UserContextType,
  User,
  AuthenticatedUser,
} from '../types';

import {
  clearAuthenticatedUser,
  storeAuthenticatedUser,
  getAuthenticatedUser,
} from '../utils/session';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = 'http://localhost:3000/auths';
const apiBaseUrlUsers = 'http://localhost:3000/users';

const defaultUserContext: UserContextType = {
  authenticatedUser: undefined,
  registerUser: async () => {},
  loginUser: async () => {},
  clearUser: () => {},
};

const UserContext = createContext<UserContextType>(defaultUserContext);

const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [authenticatedUser, setAuthenticatedUser] =
    useState<MaybeAuthenticatedUser>(undefined);

  const navigate = useNavigate();

  useEffect(() => {
    const refreshToken = async () => {
      const storedUser = getAuthenticatedUser();
      if (!storedUser || !storedUser.token) return;

      try {
        const options = {
          method: 'POST',
          body: JSON.stringify(storedUser.token),
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const response = await fetch(`${apiBaseUrlUsers}/me`, options);

        if (!response.ok) {
          throw new Error('token is invalid or expired');
        }

        const authenticatedUser = await response.json();
        setAuthenticatedUser(authenticatedUser);
        storeAuthenticatedUser(authenticatedUser);
      } catch (err) {
        console.error('refreshToken::error: ', err);
        clearAuthenticatedUser();
        navigate('/login');
      }
    };
    refreshToken();
  }, []);

  const registerUser = async (newUser: User) => {
    try {
      const options = {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const response = await fetch(`${API_BASE_URL}/register`, options);

      if (!response.ok)
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`,
        );

      const createdUser: AuthenticatedUser = await response.json();

      setAuthenticatedUser(createdUser);
      storeAuthenticatedUser(createdUser);
      console.log('createdUser: ', createdUser);
    } catch (err) {
      console.error('registerUser::error: ', err);
      throw err;
    }
  };

  const loginUser = async (user: User, rememberMe: boolean) => {
    try {
      const options = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const response = await fetch(`${API_BASE_URL}/login`, options);

      if (!response.ok)
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`,
        );

      const authenticatedUser: AuthenticatedUser = await response.json();
      console.log('authenticatedUser: ', authenticatedUser);

      setAuthenticatedUser(authenticatedUser);

      if (rememberMe) {
        storeAuthenticatedUser(authenticatedUser);
      } else {
        clearAuthenticatedUser();
      }
    } catch (err) {
      console.error('loginUser::error: ', err);
      throw err;
    }
  };

  const clearUser = () => {
    clearAuthenticatedUser();
    setAuthenticatedUser(undefined);
  };

  const myContext: UserContextType = {
    authenticatedUser,
    registerUser,
    loginUser,
    clearUser,
  };

  return (
    <UserContext.Provider value={myContext}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
