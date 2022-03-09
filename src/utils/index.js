import Storage from "../services/storage"

/**
 * @returns `useAuth` returns boolean value if user logged in or not.
 */
export const useAuth = () => {
  const isLoggedIn = Storage.get("isLoggedIn")
  return isLoggedIn
}
