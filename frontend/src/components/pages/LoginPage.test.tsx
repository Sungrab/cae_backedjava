import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { describe, expect, test, vi } from 'vitest';
import LoginPage from './LoginPage';
import { UserContext } from '../../contexts/UserContext';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

describe('LoginPage', () => {
  test('renders a form with username and password inputs', () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>,
    );
    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);

    expect(usernameInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
  });
  
  test('calls loginUser without remember me and navigates to HomePage when the form is submitted', async () => {
    const loginUserMock = vi.fn((user, rememberMe) => {
      if (rememberMe) {
        localStorage.setItem('authenticatedUser', JSON.stringify(user));
      }
      return Promise.resolve();
    });
    const navigateMock = vi.fn();
    const mockContextValue = {
      authenticatedUser: undefined,
      registerUser: vi.fn(),
      loginUser: loginUserMock,
      clearUser: vi.fn(),
    };
    vi.mocked(useNavigate).mockReturnValue(navigateMock);

    render(
      <MemoryRouter>
        <UserContext.Provider value={mockContextValue}>
          <LoginPage />
        </UserContext.Provider>
      </MemoryRouter>,
    );
    
    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /s'authentifier/i });

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    fireEvent.click(submitButton);

    expect(loginUserMock).toHaveBeenCalledWith(
      { username: 'testuser', password: 'testpassword' },
      false,
    );
    expect(localStorage.getItem('authenticatedUser')).toBeNull();

    await waitFor(() => expect(navigateMock).toHaveBeenCalledWith('/'));
  });

  test('calls loginUser with remember me and navigates to HomePage when the form is submitted', async () => {
    const loginUserMock = vi.fn((user, rememberMe) => {
      if (rememberMe) {
        localStorage.setItem('authenticatedUser', JSON.stringify(user));
      }
      return Promise.resolve();
    });
    const navigateMock = vi.fn();
    const mockContextValue = {
      authenticatedUser: undefined,
      registerUser: vi.fn(),
      loginUser: loginUserMock,
      clearUser: vi.fn(),
    };
    vi.mocked(useNavigate).mockReturnValue(navigateMock);

    render(
      <MemoryRouter>
        <UserContext.Provider value={mockContextValue}>
          <LoginPage />
        </UserContext.Provider>
      </MemoryRouter>,
    );
    
    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const rememberMeCheckbox = screen.getByLabelText(/Se souvenir de moi/i);
    const submitButton = screen.getByRole('button', { name: /s'authentifier/i });

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    fireEvent.click(rememberMeCheckbox);
    fireEvent.click(submitButton);

    expect(loginUserMock).toHaveBeenCalledWith(
      { username: 'testuser', password: 'testpassword' },
      true,
    );
    expect(localStorage.getItem('authenticatedUser')).not.toBeNull();

    const storedUser = localStorage.getItem('authenticatedUser');
    expect(storedUser).not.toBeNull();
    const parsedStoredUser = storedUser ? JSON.parse(storedUser) : {};
    expect(parsedStoredUser).toEqual({ username: 'testuser', password: 'testpassword' });
    

    await waitFor(() => expect(navigateMock).toHaveBeenCalledWith('/'));
  });

  test('navigates to HomePage when the user is already authenticated', async () => {
    const navigateMock = vi.fn();
    const mockContextValue = {
      authenticatedUser: { username: 'testuser', token: 'testtoken' },
      registerUser: vi.fn(),
      loginUser: vi.fn(),
      clearUser: vi.fn(),
    };
    vi.mocked(useNavigate).mockReturnValue(navigateMock);
    render(
      <MemoryRouter>
        <UserContext.Provider value={mockContextValue}>
          <LoginPage />
        </UserContext.Provider>
      </MemoryRouter>,
    );
    expect(localStorage.getItem('authenticatedUser')).not.toBeNull();

    expect(navigateMock).toHaveBeenCalledWith('/');
  });
});
