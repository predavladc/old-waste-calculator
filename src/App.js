import Selector from "./components/Selector";
import AddElec from "./components/Electricity/AddElec.js";
import ElecCalc from "./components/Electricity/ElecCalc.js";
import Homepage from "./components/Homepage";
import { Children, useState, useEffect, useContext } from "react";

import "./index.css";
import { Grommet } from "grommet";

import RouterContext from "./Context/RouterContext";
import ElecChoose from "./components/Electricity/ElecChoose";

const Router = ({ children }) => {
  const [path, setPath] = useState("/");

  useEffect(() => {
    const onPopState = () => setPath(document.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const push = (nextPath) => {
    if (nextPath !== path) {
      window.history.pushState(undefined, undefined, nextPath);
      setPath(nextPath);
      window.scrollTo(0, 0);
    }
  };

  return (
    <RouterContext.Provider value={{ path, push }}>
      {children}
    </RouterContext.Provider>
  );
};

const Routes = ({ children }) => {
  const { path: contextPath } = useContext(RouterContext);
  let found;
  Children.forEach(children, (child) => {
    if (!found && contextPath === child.props.path) found = child;
  });
  return found;
};

const Route = ({ Component, path }) => {
  const { path: contextPath } = useContext(RouterContext);
  return contextPath === path ? <Component /> : null;
};

const theme = {
  global: {
    colors: {
      background: {
        light: "#ffffff",
        dark: "#000000",
      },
    },
    font: {
      family:
        '-apple-system,\n         BlinkMacSystemFont, \n         "Segoe UI", \n         Roboto, \n         Oxygen, \n         Ubuntu, \n         Cantarell, \n         "Fira Sans", \n         "Droid Sans",  \n         "Helvetica Neue", \n         Arial, sans-serif,  \n         "Apple Color Emoji", \n         "Segoe UI Emoji", \n         "Segoe UI Symbol"',
    },
  },
  button: {
    extend: [null],
  },
};

const App = () => (
  <Grommet full theme={theme}>
    <Router>
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/select" Component={Selector} />
        <Route path="/addelec" Component={AddElec} />
        <Route path="/eleccalc" Component={ElecCalc} />
        <Route path="/elecchoose" Component={ElecChoose} />
      </Routes>
    </Router>
  </Grommet>
);

export default App;
