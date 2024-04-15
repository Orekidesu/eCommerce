// authController.ts
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../data/repository/firebaseConfig.ts";

export const authController = {
  logout: async () => {
    try {
      await signOut(auth);
      return true;
    } catch (error) {
      console.error("Error logging out:", error);
      return false;
    }
  },
  isLoggedIn: () => {
    let loggedIn = false;
    onAuthStateChanged(auth, (user) => {
      if (user) {
        loggedIn = true;
      } else {
        loggedIn = false;
      }
    });
    return loggedIn;
  },
};
