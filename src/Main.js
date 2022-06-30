import React from "react";
import Card from "./Card";
import Accordian from "./Accordian";

class Main extends React.Component {
  render() {
    return (
      <>
        <div className="row main">
          <div className="intro text-center mb-4">
            <h2 className="">Questions?</h2>
            <p>We've got answers</p>
          </div>

          <div className="accordion" id="accordionExample">
            <Accordian title="What is Spotify and Spotify premium">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
                blanditiis quisquam quae numquam sunt molestiae laboriosam
                commodi vitae voluptas illum repellendus, velit at aliquid
                adipisci possimus, ad error fugiat nihil!
              </p>
            </Accordian>

            <Accordian title="How do I cancel">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
                blanditiis quisquam quae numquam sunt molestiae laboriosam
                commodi vitae voluptas illum repellendus, velit at aliquid
                adipisci possimus, ad error fugiat nihil!
              </p>
            </Accordian>

            <Accordian title="How des Duo an dFamily plan work">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
                blanditiis quisquam quae numquam sunt molestiae laboriosam
                commodi vitae voluptas illum repellendus, velit at aliquid
                adipisci possimus, ad error fugiat nihil!
              </p>
            </Accordian>

            <Accordian title="How many Devices can I listen to">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
                blanditiis quisquam quae numquam sunt molestiae laboriosam
                commodi vitae voluptas illum repellendus, velit at aliquid
                adipisci possimus, ad error fugiat nihil!
              </p>
            </Accordian>

            <Accordian title="How does the stuednt plan work">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
                blanditiis quisquam quae numquam sunt molestiae laboriosam
                commodi vitae voluptas illum repellendus, velit at aliquid
                adipisci possimus, ad error fugiat nihil!
              </p>
            </Accordian>
          </div>
        </div>
      </>
    );
  }
}

export default Main;
