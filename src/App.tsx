// Imports
import { Router, Switch, Route } from "wouter";

// Pages
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";

// CSS Imports
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Home} path="/" />
        <Route component={Signup} path="/signup" />
        <Route component={Login} path="/login" />
      </Switch>
    </Router>
  );
}

export default App;
