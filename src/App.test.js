import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('renders form', () => {

  test('renders nameinp', () => {
    render(<App />);
    const Elem1 = screen.getByTestId("name-input");
    expect(Elem1).toBeInTheDocument();

    expect(Elem1).toHaveAttribute("type", "text");
  });
  test('renders phoneinp', () => {
    render(<App />);
    const Elem2 = screen.getByTestId("phone-input");
    expect(Elem2).toBeInTheDocument();

    expect(Elem2).toHaveAttribute("type", "tel");
  });
  test('renders emailinp', () => {
    render(<App />);
    const Elem3 = screen.getByTestId("email-input");
    expect(Elem3).toBeInTheDocument();

    expect(Elem3).toHaveAttribute("type", "email");
  });
  test('pass valid email to test email input field', () => {
    render(<App />);

    const inputEl = screen.getByTestId("email-input");
    userEvent.type(inputEl, "test@mail.com");

    expect(screen.getByTestId("email-input")).toHaveValue("test@mail.com");
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
  });
});

