/* eslint-disable import/no-cycle */
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import ForgotPassword from "../pages/ForgotPassword";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import { Routes } from "../types";

const routes: Routes = {
  no_match: {
    id: "no_match",
    path: "*",
    name: "Not Found",
    isPublic: true,
    exact: true,
    isStatic: true,
    isRestricted: false,
    element: NotFound,
  },
  index: {
    id: "index",
    path: "/",
    name: "Home",
    isPublic: false,
    exact: true,
    isRestricted: false,
    isStatic: false,
    element: Home,
  },
  home: {
    id: "home",
    path: "/home",
    name: "Home",
    isPublic: false,
    exact: true,
    isStatic: false,
    isRestricted: false,
    element: Home,
  },
  login: {
    id: "login",
    path: "/login",
    name: "Login",
    isPublic: true,
    exact: true,
    isStatic: false,
    isRestricted: false,
    element: Login,
  },
  signup: {
    id: "signup",
    path: "/signup",
    name: "Signup",
    isPublic: true,
    exact: true,
    isStatic: false,
    isRestricted: false,
    element: Signup,
  },
  forgot_password: {
    id: "forgot_password",
    path: "/forgot-password",
    name: "Forgot Password",
    isPublic: true,
    exact: true,
    isStatic: false,
    isRestricted: false,
    element: ForgotPassword,
  },
};

export default routes;
