import React from "react";
import Card from "./Card";

class Main extends React.Component {
  render() {
    return (
      <div className="row text-center main">
        <h2 className="mb-5">The power of premium</h2>
        <Card
          path="./component-2/images/img_1.png"
          title="Ad free music listening."
          desc="Enjoy uninterrupted music."
        />
        <Card
          path="./component-2/images/img_2.png"
          title="Offline playback."
          desc="Save your data by listening online."
        />
        <Card
          path="./component-2/images/img_3.png"
          title="Play everywhere."
          desc="Listen on your speakers, TV and other favorite devices."
        />
        <Card
          path="./component-2/images/img_4.png"
          title="Pay your way."
          desc="Prepay with Paytm, UPI and more."
        />
      </div>
    );
  }
}

export default Main;
