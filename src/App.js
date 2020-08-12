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
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
          <Route exact path="/ccliatt-portfolio/home" component={Home} />
          <Route exact path="/ccliatt-portfolio" component={Home} />
          <Route exact path="/ccliatt-portfolio/contact" component={Contact} />
          <Route exact path="/ccliatt-portfolio/portfolio" component={Portfolio} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

// {process.env.PUBLIC_URL + '/'}

export default App;
