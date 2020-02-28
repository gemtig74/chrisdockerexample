import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// You can think of these components as "pages"
// in your app.
import Navigation from "./components/navigation";
import Home from "./pages/home";
import About from "./pages/about";
import Dashboard from "./pages/dashboard";

// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

// A <Switch> looks through all its children <Route>
// elements and renders the first one whose path
// matches the current URL. Use a <Switch> any time
// you have multiple routes, but you want only one
// of them to render at a time

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
