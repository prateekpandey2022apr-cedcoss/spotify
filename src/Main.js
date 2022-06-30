import React from "react";
import Card from "./Card";

class Main extends React.Component {
  render() {
    return (
      <div className="row text-center main">
        <h2 className="mb-5">Connect with music culture</h2>
        <Card
          path="./component-3/images/img_1.png"
          title="Bollywood Butter."
          desc="The Finest quality bollywood music picked up for you."
        />
        <Card
          path="./component-3/images/img_2.png"
          title="Pubjabi 101."
          desc="The ultimate pubjabi hits."
        />
        <Card
          path="./component-3/images/img_3.png"
          title="Tollywood Pearls."
          desc="The finest music from Telugu films."
        />
        <Card
          path="./component-3/images/img_4.png"
          title="Hot Hits India."
          desc="50 hottest hits from across the globe."
        />
      </div>
    );
  }
}

export default Main;
