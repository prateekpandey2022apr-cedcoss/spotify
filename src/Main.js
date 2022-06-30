import React from "react";

class Main extends React.Component {
  render() {
    return (
      <div className="row text-center main">
        <div className="col">
          <h2>Get Premium free for 1 month</h2>
          <p>
            Just &#8377;119/month after. Debit credit cards accepted. Cancel
            anytime.
          </p>
          <p>
            {/* <a href="#" className="btn btn-primary my-2">
              Get Started
            </a> */}
            <button type="button" className="btn btn-dark rounded-pill">
              GET STARTED
            </button>

            <button type="button" className="btn btn-dark rounded-pill plans">
              SEE OTHER PLANS
            </button>

            {/* <a href="#" className="btn btn-secondary my-2">
              See other Plans
            </a> */}
          </p>
          <small className="muted">
            <a href="#">Terms and conditions apply</a> 1 month free not
            avaliable for users who have already tried premium.
          </small>
        </div>
      </div>
    );
  }
}

export default Main;
