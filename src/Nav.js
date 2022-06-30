import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        aria-label="Offcanvas navbar large"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="/images/spotify_logo.png"
              alt=""
              width="100"
              // height="24"
              className="d-inline-block align-text-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar2"
            aria-controls="offcanvasNavbar2"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-white bg-dark"
            tabIndex="-1"
            id="offcanvasNavbar2"
            aria-labelledby="offcanvasNavbar2Label"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbar2Label">
                Offcanvas
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Premium
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Support
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Download
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    <div className="vr"></div>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Sign Up
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Login
                  </a>
                </li>
              </ul>
              {/* <form className="d-flex mt-3 mt-lg-0" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form> */}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
