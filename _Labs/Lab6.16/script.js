function isStrongPassword(password) {
    if (password.length < 8) { // Check if password is at least 8 characters long
      return false;
    }
    if (password.includes("password")) { // Check if password contains the string "password"
      return false;
    }
    let uppercase = false;
    for (let i = 0; i < password.length; i++) {
      if (password[i] === password[i].toUpperCase()) { // Check if password contains at least one uppercase character
        uppercase = true;
        break;
      }
    }
    if (!uppercase) {
      return false;
    }
    return true;
  }
  
