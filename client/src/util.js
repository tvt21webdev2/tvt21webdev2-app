class Util {

  static generateRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
  }

  static selectErrorMessage(errorMessage) {
    switch (errorMessage) {
      case "name already exists":
        return "Antamasi käyttäjänimi on varattu";
      case "username invalid":
        return "Käyttäjänimen täytyy sisältää 4-16 kirjainta ja/tai numeroa";
      case "password invalid":
        return "Salasanan täytyy sisältää vähintään 8 merkkiä, sekä vähintään yksi iso kirjain ja numero";
      case "not matching":
        return "Salasanat eivät täsmää";
      case "user doesn't exist":
        return "Tiliä ei löytynyt";
      case "wrong password":
        return "Väärä salasana";
    }
  }

  static selectAlertMessage(snackbarOpen) {
    switch (snackbarOpen) {
      case "signup":
        return "Tilin luonti onnistui!"
      case "login":
        return "Kirjautuminen onnistui!"
      case "logout":
        return "Uloskirjautuminen onnistui!"
      case "deleteuser":
        return "Käyttäjän poisto onnistui!"
      case "deleteview":
        return "Näkymän poisto onnistui!"
    }
  }
}

export default Util;