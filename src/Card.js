import React from "react";

class Card extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="col-md-6 col-lg-3">
        <div className="xcard">
          <div className="">
            {this.props.trial && (
              <p>
                <span className="bg-primary text-white p-2 border border-primary rounded">
                  1 month free
                </span>
              </p>
            )}
            <p className="border border-primary p-1 rounded">
              One-time plans available
            </p>
            <h5 className="">{this.props.title}</h5>
            <small>{this.props.info_1}</small> <br />
            <small>{this.props.info_2}</small>
          </div>

          <hr />

          {this.props.children}

          <div className="d-grid">
            <button type="button" className="btn btn-dark rounded-pill">
              VIEW PLANS
            </button>
          </div>

          <div className="terms mt-3">
            <small>{this.props.terms}</small>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
