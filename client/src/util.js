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
        return "Username already exists";
      case "username invalid":
        return "Username should contain 4 to 16 alphanumeric characters";
      case "password invalid":
        return "Password should contain at least 8 characters, including one uppercase letter, one lowercase letter and one number";
      case "not matching":
        return "Passwords do not match";
    }
  }
}

export default Util;