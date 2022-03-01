import './App.css';
import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRoute from './router/PrivateRouter';
import PublicRoute from './router/PublicRouter';
import { routes } from './router/index';

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          {Object.keys(routes).map(key => {
            const value = routes[key];
            const { isPublic, isStatic } = value
            if (isStatic) {
              return <Route {...value} key={key} />
            }
            return isPublic ? <PublicRoute {...value} key={key} /> : <PrivateRoute {...value} key={key} />
          })}
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
