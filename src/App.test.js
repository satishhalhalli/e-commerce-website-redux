import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  render(<App />);
  const headerElement = screen.getByTestId('header');
  expect(headerElement).toBeInTheDocument();
});

test('renders home page by default', () => {
  render(<App />);
  const homeElement = screen.getByTestId('home-page');
  expect(homeElement).toBeInTheDocument();
});

test('renders about page', () => {
  render(<App />);
  const aboutLink = screen.getByText(/about/i);
  userEvent.click(aboutLink);
  const aboutElement = screen.getByTestId('about-page');
  expect(aboutElement).toBeInTheDocument();
});

test('renders store page when user is logged in', () => {
  const mockState = { isLogin: true };
  render(<App />, { initialState: mockState });
  const storeLink = screen.getByText(/store/i);
  userEvent.click(storeLink);
  const storeElement = screen.getByTestId('store-page');
  expect(storeElement).toBeInTheDocument();
});

test('redirects to login page when user is not logged in', () => {
  const mockState = { isLogin: false };
  render(<App />, { initialState: mockState });
  const storeLink = screen.getByText(/store/i);
  userEvent.click(storeLink);
  const loginElement = screen.getByTestId('login-page');
  expect(loginElement).toBeInTheDocument();
});

test('renders contact page', () => {
  render(<App />);
  const contactLink = screen.getByText(/contact/i);
  userEvent.click(contactLink);
  const contactElement = screen.getByTestId('contact-page');
  expect(contactElement).toBeInTheDocument();
});

test('renders login page when user is not logged in', () => {
  const mockState = { isLogin: false };
  render(<App />, { initialState: mockState });
  const loginLink = screen.getByText(/login/i);
  userEvent.click(loginLink);
  const loginElement = screen.getByTestId('login-page');
  expect(loginElement).toBeInTheDocument();
});

test('redirects to store page when user is logged in', () => {
  const mockState = { isLogin: true };
  render(<App />, { initialState: mockState });
  const loginLink = screen.getByText(/login/i);
  userEvent.click(loginLink);
  const storeElement = screen.getByTestId('store-page');
  expect(storeElement).toBeInTheDocument();
});

test('renders product detail page', () => {
  render(<App />);
  const productLink = screen.getByTestId('product-link');
  userEvent.click(productLink);
  const productDetailElement = screen.getByTestId('product-detail');
  expect(productDetailElement).toBeInTheDocument();
});

test('renders signup page', () => {
  render(<App />);
  const signupLink = screen.getByText(/signup/i);
  userEvent.click(signupLink);
  const signupElement = screen.getByTestId('signup-page');
  expect(signupElement).toBeInTheDocument();
});
