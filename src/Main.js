import React from "react";
import Card from "./Card";
import Accordian from "./Accordian";

class Main extends React.Component {
  render() {
    return (
      <>
        {/* <div className="row main bg-dark text-white">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
            blanditiis quisquam quae numquam sunt molestiae laboriosam commodi
            vitae voluptas illum repellendus, velit at aliquid adipisci
            possimus, ad error fugiat nihil!s
          </p>
          <div class="d-flex bd-highlight mb-3">
            <div className="row">
              <div class="p-2 bd-highlight col-sm-3">
                <div className="">
                  <p>
                    <img width={100} src="/images/spotify_logo.png" />
                  </p>
                </div>
              </div>
              <div class="p-2 bd-highlight col-sm-6">
                <div className="">
                  <div className="row">
                    <div className="col-4">
                      <p className="">COMPANY</p>
                      <ul>
                        <li>About</li>
                        <li>Jobs</li>
                        <li>For the record</li>
                      </ul>
                    </div>
                    <div className="col-4">
                      <p>COMMUNITIES</p>
                      <ul>
                        <li>For Artists</li>
                        <li>Developers</li>
                        <li>Advertising</li>
                        <li>Investor</li>
                        <li>Vendors</li>
                      </ul>
                    </div>
                    <div className="col-4">
                      <p>USEFUL LINKS</p>
                      <ul>
                        <li>Support</li>
                        <li>Web Player</li>
                        <li>Free Mobile App</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ms-auto p-2 bd-highlight">Flex item</div>
            </div>
          </div>
        </div> */}
        <footer>
          <div className="row main bg-dark text-white">
            <div className="col-sm-3">
              <p>
                <img width={100} src="/images/spotify_logo.png" />
              </p>
            </div>
            <div className="col-sm-6">
              <div className="row">
                <div className="col-4">
                  <p className="title">COMPANY</p>
                  <ul>
                    <li>About</li>
                    <li>Jobs</li>
                    <li>For the record</li>
                  </ul>
                </div>
                <div className="col-4">
                  <p className="title">COMMUNITIES</p>
                  <ul>
                    <li>For Artists</li>
                    <li>Developers</li>
                    <li>Advertising</li>
                    <li>Investor</li>
                    <li>Vendors</li>
                  </ul>
                </div>
                <div className="col-4">
                  <p className="title">USEFUL LINKS</p>
                  <ul>
                    <li>Support</li>
                    <li>Web Player</li>
                    <li>Free Mobile App</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-3 social-icons">
              <div>
                <p>
                  <span>
                    <i className="bi bi-instagram"></i>
                  </span>
                  <span>
                    <i className="bi bi-twitter"></i>
                  </span>
                  <span>
                    <i className="bi bi-facebook"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="row bg-dark text-white">
            <div className="d-flex bd-highlight mb-3">
              <div className="p-2 bd-highlight">
                <a href="">Legal</a>
              </div>
              <div className="p-2 bd-highlight">
                <a href="#">Privacy Center</a>
              </div>
              <div className="p-2 bd-highlight">
                <a href="#">Privacy Policy</a>
              </div>
              <div className="p-2 bd-highlight">
                <a href="#">Cookies</a>
              </div>
              <div className="p-2 bd-highlight">
                <a href="#">About Ads</a>
              </div>

              <div className="ms-auto p-2 bd-highlight">2022 Spotify AB</div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Main;
