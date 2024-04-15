import { ref } from "vue";

export function useLoginModel() {
  const email = ref("");
  const password = ref("");

  return { email, password };
}
