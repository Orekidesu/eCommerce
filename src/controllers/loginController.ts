import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../data/repository/firebaseConfig.ts";
import { useLoginModel } from "@/models/loginModel";
import { useRouter } from "vue-router";
import { getDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../data/repository/firebaseConfig.ts"; // adjust the path to match your file structure

export function useLoginController() {
  const { email, password } = useLoginModel();
  const router = useRouter();
  const provider = new GoogleAuthProvider();

  const submitForm = async () => {
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
      // Navigate to the dashboard
      router.push("/dashboard");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const loginWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;

      // If the user's email is null, throw an error
      if (!user.email) {
        throw new Error("User does not have an email");
      }

      // If the user's display name is null, use the local part of the email as the name
      const name = user.displayName || user.email.split("@")[0];

      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);

      // Only add a new document to the users collection if it doesn't already exist
      if (!userDoc.exists()) {
        try {
          await setDoc(userDocRef, {
            name: name,
            email: user.email,
            uid: user.uid,
          });
        } catch (error) {
          console.error("Error adding user to Firestore:", error);
        }
      }

      // Navigate to the dashboard
      router.push("/dashboard");
    } catch (error) {
      console.error("Error logging in with Google:", error);
    }
  };
  return { email, password, submitForm, loginWithGoogle };
}
