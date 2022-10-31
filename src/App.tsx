import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import PrivateRoute from "./router/Private";
import PublicRoute from "./router/Public";
import routes from "./router/index";
import "./App.scss";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {Object.keys(routes).map((key) => {
            const value = routes[key];
            const { isPublic, isStatic, path, element: Element } = value;
            if (isStatic) {
              return <Route path={path} element={<Element />} key={key} />;
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
            );
          })}
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
