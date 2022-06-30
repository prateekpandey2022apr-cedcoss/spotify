import React from "react";
import uuid from "react-uuid";

class Accordian extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.id_main = props.title.replaceAll(" ", "-") + "_main";
    this.id_sec = props.title.replaceAll(" ", "-") + "_sec";
    this.id = "#" + this.id_sec;
  }

  render() {
    const myId = `#${this.id}`;
    return (
      <div className="accordion-item">
        <h2 className="accordion-header" id={this.id_main}>
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={this.id}
            aria-expanded="true"
            aria-controls={this.id_sec}
          >
            {this.props.title}
          </button>
        </h2>
        <div
          id={this.id_sec}
          className="accordion-collapse collapse"
          aria-labelledby={this.id_main}
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Accordian;
