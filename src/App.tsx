// Imports
import { Router, Switch, Route } from "wouter";

// Pages
import Home from "./pages/home/Home";

// CSS Imports
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Home} path="/" />
      </Switch>
    </Router>
  );
}

export default App;
