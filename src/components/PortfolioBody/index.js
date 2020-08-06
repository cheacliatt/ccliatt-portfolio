import React from "react";
import "./style.css";
import Pokemon from "./assets/pokess.PNG";
import Movie from "./assets/movie.PNG";
import Password from "./assets/password.PNG";
import Scheduler from "./assets/scheduler.PNG";
import Tracker from "./assets/tracker.PNG";
import Weather from "./assets/weather.PNG";

function PortfolioBody() {
  return (
    <main className="container" id="portfolio-container">
      <header className="row">
        <div className="col">
          <h1>Portfolio</h1>
        </div>
      </header>
      <hr />
      <segment className="row">
        <div className="col-sm-6">
          <a
            href="https://cheacliatt.github.io/Staying-in-Tonight-Generator/"
            target="_blank"
            className="card-link"
            ><img
              src={Movie}
              alt="Movie Suggestion ScreenShot"
          /></a>
          <br />
          <h8>Movie Generator</h8><a href="https://github.com/cheacliatt/Staying-in-Tonight-Generator">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          <p className="app-description">
            A movie and video game recommendation generator using jQuery and
            API's.
          </p>
        </div>
        <div className="col-sm-6">
          <a
            href="https://cheacliatt.github.io/gt-weather-dashboard/"
            target="_blank"
            className="card-link"
            ><img
              src={Weather}
              alt="Weather Forecast ScreenShot"
          /></a>
          <br />
          <h8>Weather Forecast</h8><a href="https://github.com/cheacliatt/gt-weather-dashboard">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          <p className="app-description">
            A weather forecast web application that is made using jQuery and a
            weather API.
          </p>
        </div>
      </segment>
      <segment className="row">
        <div className="col-sm-6">
          <a
            href="https://cheacliatt.github.io/gt-work-day-scheduler/"
            target="_blank"
            className="card-link"
            ><img src={Scheduler} alt="Work Scheduler ScreenShot"
          /></a>
          <br />
          <h8>Work Planner</h8><a href="https://github.com/cheacliatt/gt-work-day-scheduler">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          <p className="app-description">
            A work day planner built with Javascript and Moment JS.
          </p>
        </div>
        <div className="col-sm-6">
          <a
            href="https://cheacliatt.github.io/gt-password-generator/"
            target="_blank"
            className="card-link"
            ><img src={Password} alt="Password ScreenShot"
          /></a>
          <br />
          <h8>Password Generator</h8><a href="https://github.com/cheacliatt/gt-password-generator">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          <p className="app-description">
            A generator that creates for the user a specified password.
          </p>
        </div>
      </segment>
      <segment className="row">
        <div className="col-sm-6">
          <a
            href="https://gt-poketrader.herokuapp.com/"
            target="_blank"
            className="card-link"
            ><img src={Pokemon} alt="Pokemon App ScreenShot"
          /></a>
          <br />
          <h8>Card Collector App</h8><a href="https://github.com/cheacliatt/poketrader-app">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          <p className="app-description">
            A website hosting MySQL database for collecting cards.
          </p>
        </div>
        <div className="col-sm-6">
          <a
            href="https://drive.google.com/file/d/166ca_0bjH4tHpEGkrb_EkgIUOZiyjl8T/view"
            target="_blank"
            className="card-link"
            ><img src={Tracker} alt="CLA ScreenShot"
          /></a>
          <br />
          <h8>Command Line App</h8><a href="https://github.com/cheacliatt/gt-employee-tracker">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          <p className="app-description">
            A CLA that keeps track of employees within an organization.
          </p>
        </div>
      </segment>
    </main>
  );
}

export default PortfolioBody;