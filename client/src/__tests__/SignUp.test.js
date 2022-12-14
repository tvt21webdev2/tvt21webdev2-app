// Käytännössä suositellaan käytettävän React Testing Libraryä ja Jest työkaluja.
//   Ne mahdollistavat komponenttien testaamisen yllä kuvatulla tavalla. Testattaville komponenteille kirjoitetaan testikoodi, joka renderöi komponentin ja sen jälkeen
//   testikoodilla tarkastetaan sen toiminta, syötetään komponentille tapahtumia ja tarkastetaan vasteet.
//
//   React-sovelluksesta tässä projektissa pitäisi testata:
//   käyttäjän luonti,
//   käyttäjän kirjautuminen ja
// käyttäjän poistaminen
//
// Käytännön tekeminen riippuu ryhmän toteuttamasta komponenttirakenteesta noiden osalta, mutta noista toiminnoista pitäisi testata ainakin seuraavat asiat:
//   komponenttien renderöityminen oikein
// nappien toiminta komponenteissa
// lomakkeiden toiminta komponenteissa
// mahdollisten propseina toimitettujen funktioiden kutsuminen komponenteissa

import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, screen} from '@testing-library/react'
import SignUp from '../components/SignUp'
import userEvent from "@testing-library/user-event";

describe('SignUp', () => {
  test('SignUp form renders correctly', () => {
    render(<SignUp/>);

    const usernameField = screen.getByLabelText(/Käyttäjätunnus/);
    const passwordField = screen.getByLabelText(/Salasana/);
    const passwordAgainField = screen.getByLabelText(/Vahvista salasana/);
    const submitButton = screen.getByRole("button");

    expect(usernameField).toBeInTheDocument();
    expect(usernameField).toHaveValue("");
    expect(usernameField).toHaveFocus();
    expect(passwordField).toBeInTheDocument();
    expect(passwordField).toHaveValue("");
    expect(passwordAgainField).toBeInTheDocument();
    expect(passwordAgainField).toHaveValue("");
    expect(submitButton).toBeInTheDocument();
    expect(submitButton.type).toBe('submit');
  });

  // test("form submission on button click", async () => {
  //
  //   render(<SignUp/>);
  //
  //   const user = userEvent.setup();
  //
  //   const usernameField = screen.getByLabelText(/Käyttäjätunnus/);
  //   const passwordField = screen.getByLabelText(/Salasana/);
  //   const passwordAgainField = screen.getByLabelText(/Vahvista salasana/);
  //   const submitButton = screen.getByRole("button");
  //
  //   await user.type(usernameField, "Testi123");
  //   await user.type(passwordField, "Testi123");
  //   await user.type(passwordAgainField, "Testi123");
  //
  //   expect(usernameField).toHaveValue("Testi123");
  //   expect(passwordField).toHaveValue("Testi123");
  //   expect(passwordAgainField).toHaveValue("Testi123");
  //
  //   await user.click(submitButton);
  //   await user.click(submitButton);
  //
  // });


});