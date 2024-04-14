import { useRouter } from "vue-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../data/repository/firebaseConfig.ts"; // adjust the path to match your file structure
import { useSignupModel } from "@/models/signupModel";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../data/repository/firebaseConfig.ts"; // adjust the path to match your file structure

export function useSignupController() {
  const { firstName, lastName, email, password } = useSignupModel();
  const router = useRouter();

  const submitForm = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );
      const user = userCredential.user;

      // Save the first name, last name, email, and uid to the Firestore database
      await setDoc(doc(db, "users", user.uid), {
        name: firstName.value + " " + lastName.value,
        email: email.value,
        uid: user.uid,
      });

      // Navigate to the dashboard
      router.push("/dashboard");
    } catch (error) {
      console.error("Error creating new user:", error);
    }
  };

  return { firstName, lastName, email, password, submitForm };
}

// case 1: should throw error if using the same email
