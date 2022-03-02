import "./App.css"
import React, { Fragment } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PrivateRoute from "./router/PrivateRouter"
import PublicRoute from "./router/PublicRouter"
import { routes } from "./router/index"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}

const theme = extendTheme({ colors })

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Fragment>
          <Routes>
            {Object.keys(routes).map((key) => {
              const value = routes[key]
              const { isPublic, isStatic, path, element: Element } = value
              if (isStatic) {
                return <Route path={path} element={<Element />} key={key} />
              }
              return (
                <Route
                  path={path}
                  element={
                    isPublic ? (
                      <PublicRoute {...value} key={key} />
                    ) : (
                      <PrivateRoute {...value} key={key} />
                    )
                  }
                  key={key}
                />
              )
            })}
          </Routes>
        </Fragment>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
