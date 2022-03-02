/**
 * @returns `useAuth` returns boolean value if user logged in or not.
 */
export const useAuth = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn")
  return isLoggedIn
}
