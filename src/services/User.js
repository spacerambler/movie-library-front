// Tyler -- review and make edits as needed to match server side

import decode from "jwt-decode";

const UserService = {
  checkIfLoggedIn() {
    // Checks if there is a saved token and if it's still valid
    const token = localStorage.getItem("token");
    return Boolean(token) && !this.checkIfTokenExpired(token);
  },

  checkIfTokenExpired(token) {
    try {
      if (decode(token).exp < Date.now() / 1000) {
        return true;
      }
      return false;
    } catch ({ message }) {
      console.error(message);
      return false;
    }
  },

  getUser() {
    const token = localStorage.getItem("token");
    return token ? decode(localStorage.getItem("token")).user : null;
  },

  login(idToken) {
    // Saves user token to localStorage
    localStorage.setItem("token", idToken);
  },

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem("token");
  },
};

export default UserService;