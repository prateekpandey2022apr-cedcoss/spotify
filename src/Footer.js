import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="row text-center footer">
        <div className="col">
          <h3>Introducing Premium Mini</h3>
          <p>
            &#8377; 7 for 1 day. <br />
            &#8377; 25 for 1 week.
          </p>
          <p>
            <button type="button" className="btn btn-light rounded-pill">
              Get Mini
            </button>

            {/* <a href="#" className="btn btn-primary my-2">
              Get Started
            </a> */}
          </p>
          <small className="muted">
            <a href="#">Terms and conditions apply</a>
          </small>
        </div>
      </div>
    );
  }
}

export default Footer;
