import Storage from "../services/storage";

/**
 * @returns `useAuth` returns boolean value if user logged in or not.
 */
function useAuth(): boolean {
  const storage = new Storage();
  const isLoggedIn = storage.get("isLoggedIn");
  return isLoggedIn;
}

export default useAuth;
