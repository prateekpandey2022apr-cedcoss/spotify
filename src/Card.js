import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="col-md-6 col-lg-3">
        <div className="xcard">
          <p>
            <img
              src={this.props.path}
              width={142}
              className="card-"
              alt="this is alt"
            />
          </p>
          <div className="">
            <h5 className="">{this.props.title}</h5>
            <small>{this.props.desc}</small>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
