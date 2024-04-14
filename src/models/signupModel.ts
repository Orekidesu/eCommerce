import { ref } from "vue";

export function useSignupModel() {
  const firstName = ref("");
  const lastName = ref("");
  const email = ref("");
  const password = ref("");

  return { firstName, lastName, email, password };
}
