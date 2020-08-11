import React from "react";
import "./style.css";

function ContactBody() {
  return (
    <main className="container" id="contact-container">
      <div className="row">
        <div className="col-sm">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Contact Information</h5>
              <hr />
              <p id="contact-text">
                Please use the following information to reach out about any
                opportunities. I make sure to respond to any inqueries within
                twenty-four hours. You can also reach me by phone at:
                <br />
                <a href="tel:+17062515019">(706)251-5019</a>
              </p>
              <a
                href="mailto: cheacliatt@gmail.com"
                className="card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                cheacliatt@gmail.com
              </a>
              <br />
              <a
                href="https://github.com/cheacliatt"
                className="card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/chea-cliatt-b2a92b158/"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                LinkedIn
              </a>
              <a
                href="https://docs.google.com/document/d/1n9vzIYh6IPkhNoxoLfy_VqRGNaWDyRFiuc6jqUuHyVI/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContactBody;
