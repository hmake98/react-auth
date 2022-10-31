import { Navigate } from "react-router-dom";
import routes from ".";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ element: Element }: any) => {
  const isLogin = useAuth();
  if (!isLogin) {
    return <Navigate to={routes.login.path} />;
  }
  return <Element />;
};

export default PrivateRoute;
