import { Navigate } from "react-router-dom";
import routes from ".";
import useAuth from "../hooks/useAuth";

const PublicRoute = ({ isRestricted, element: Element }: any) => {
  const isLogin = useAuth();
  if (isLogin || isRestricted) {
    return <Navigate to={routes.home.path} />;
  }
  return <Element />;
};

export default PublicRoute;
