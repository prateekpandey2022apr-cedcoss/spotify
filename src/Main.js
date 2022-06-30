import React from "react";
import Card from "./Card";

class Main extends React.Component {
  render() {
    return (
      <>
        <div className="row main">
          <div className="intro text-center mb-4">
            <h2 className="">
              <i className="bi bi-check"></i>Pick your Premium
            </h2>
            <p>
              Listen without limits on your phone, speaker, and other devices
            </p>
            <p className="payment-options">
              <img src="./component-4/images/po-1.svg" alt="upi" />
              <img src="./component-4/images/po-2.svg" alt="paytm" />
              <img src="./component-4/images/po-3.svg" alt="visa" />
              <img src="./component-4/images/po-4.svg" alt="mc" />
              <img src="./component-4/images/po-5.svg" alt="amex" />
            </p>
          </div>
          <Card
            trial={false}
            offer="1 month free"
            title="Mini."
            info_1="From &#8377;7/day"
            info_2="1 account"
            terms="Terms and conditions apply"
          >
            <ul>
              <li>Add free music listening on mobile.</li>
              <li>Group Session.</li>
              <li>Download 30 songs on 1 mobile device.</li>
              <li>Download 10k songs/device on 5 devices per account.</li>
            </ul>
          </Card>
          <Card
            path="./component-3/images/img_1.png"
            trial={true}
            offer="1 month free"
            title="Duo"
            info_1="From &#8377;149/month after trial period"
            info_2="2 account"
            terms="Terms and conditions apply. 1 month free not available for users who have already tried Premium."
          >
            <ul>
              <li>Add free music listening on mobile.</li>
              <li>Group Session.</li>
              <li>Download 10k songs/device on 5 devices.</li>
              <li>Download 10k songs/device on 5 devices per account.</li>
            </ul>
          </Card>
          <Card
            path="./component-3/images/img_1.png"
            trial={true}
            offer="1 month free"
            title="Individual"
            info_1="From &#8377;119/month after trial period"
            info_2="2 account"
            terms="Terms and conditions apply. 1 month free not available for users who have already tried Premium."
          >
            <ul>
              <li>For couples who live together.</li>
              <li>Add free music listening on mobile.</li>
              <li>Group Session.</li>
              <li>Download 10k songs/device on 5 devices per account.</li>
            </ul>
          </Card>
          <Card
            path="./component-3/images/img_1.png"
            trial={true}
            offer="1 month free"
            title="Family"
            info_1="From &#8377;179/month after trial period"
            info_2="Up to 6 accounts"
            terms="Terms and conditions apply. 1 month free not available for users who have already tried Premium."
          >
            <ul>
              <li>For couples who live together.</li>
              <li>Add free music listening on mobile.</li>
              <li>Group Session.</li>
              <li>Download 10k songs/device on 5 devices per account.</li>
            </ul>
          </Card>
        </div>
        <div className="row mb-3">
          <div className="offer text-center mx-auto">
            <p>
              Special discount for eligible students in university &nbsp;
              <a href="/" className="btn btn-outline-dark rounded-pill">
                LEARN MORE
              </a>
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Main;
