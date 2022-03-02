import React from "react"
import { Navigate } from "react-router-dom"
import { routes } from "."
import { useAuth } from "../utils/index"

const PublicRoute = ({ isRestricted, element: Element }) => {
  const isLogin = useAuth()
  console.log({ isLogin })
  if (isLogin || isRestricted) {
    return <Navigate to={routes.home.path} />
  }
  return <Element />
}

export default PublicRoute
