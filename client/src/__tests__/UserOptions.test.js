import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, screen} from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import UserOptions from "../components/UserOptions";

describe('Logout', () => {
  test('Logout modal renders correctly', () => {
    render(<UserOptions/>);

    const logoutButton = screen.getByText("Kirjaudu ulos");
    const deleteButton = screen.getByText("Poista tili");

    expect(logoutButton).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  });

  test('Delete button works', async () => {
    const user = userEvent.setup();

    render(<UserOptions/>);

    const deleteButton = screen.getByText("Poista tili");

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    await user.click(deleteButton);
    expect(screen.queryByRole("dialog")).toBeInTheDocument();
  });

  test('Delete button dialog renders correctly', async () => {
    const user = userEvent.setup();

    render(<UserOptions/>);

    const deleteButton = screen.getByText("Poista tili");

    await user.click(deleteButton);

    const cancelButton = screen.getByText("Peruuta");
    const confirmButton = screen.getByText("Vahvista");

    expect(cancelButton).toBeInTheDocument();
    expect(confirmButton).toBeInTheDocument();
  });

  // test('Logout button works', async () => {
  //   const user = userEvent.setup();
  //
  //   render(<UserOptions/>);
  //
  //   const logoutButton = screen.getByText("Kirjaudu ulos");
  //
  //   await user.click(logoutButton);
  // });


});