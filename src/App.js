import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import Home from "./Pages/Home";
import Contact from "./Pages/Contact"
import Portfolio from "./Pages/Portfolio"

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path={process.env.PUBLIC_URL + '/'} component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/ccliatt-portfolio" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
