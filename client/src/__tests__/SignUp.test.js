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

describe('SignUp', () => {
  it('renders SignUp component', () => {
    render(<SignUp/>);

    screen.debug();
  });
});