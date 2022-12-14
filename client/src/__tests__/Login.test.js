import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, screen} from '@testing-library/react'
import Login from '../components/Login'
import userEvent from "@testing-library/user-event";

describe('Login', () => {
  test('Login form renders correctly', () => {
    render(<Login/>);

    const usernameField = screen.getByLabelText(/Käyttäjätunnus/);
    const passwordField = screen.getByLabelText(/Salasana/);
    const submitButton = screen.getByRole("button");
    const signUpLink = screen.getByText("Ei vielä tiliä? Luo tili täällä!");

    expect(usernameField).toBeInTheDocument();
    expect(usernameField).toHaveValue("");
    expect(usernameField).toHaveFocus();
    expect(passwordField).toBeInTheDocument();
    expect(passwordField).toHaveValue("");
    expect(submitButton).toBeInTheDocument();
    expect(submitButton.type).toBe('submit');
    expect(signUpLink).toBeInTheDocument();
  });

  test('open signup modal on text click', async () => {

    const user = userEvent.setup();

    render(<Login/>);

    const signUpLink = screen.getByText("Ei vielä tiliä? Luo tili täällä!");

    expect(screen.queryByRole("presentation")).not.toBeInTheDocument();
    await user.click(signUpLink);
    expect(screen.queryByRole("presentation")).toBeInTheDocument();
  });

  // test("login on button click", async () => {
  //
  //   const user = userEvent.setup();
  //
  //   render(<Login/>);
  //
  //   const usernameField = screen.getByLabelText(/Käyttäjätunnus/);
  //   const passwordField = screen.getByLabelText(/Salasana/);
  //   const submitButton = screen.getByRole("button");
  //
  //   await user.type(usernameField, "Testi123");
  //   await user.type(passwordField, "Testi123");
  //
  //   expect(usernameField).toHaveValue("Testi123");
  //   expect(passwordField).toHaveValue("Testi123");
  //
  //   await user.click(submitButton);
  //   await user.click(usernameField);
  // });
});