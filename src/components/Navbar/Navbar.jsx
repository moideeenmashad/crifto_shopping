import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [shoppingCart, SetshopingCart] = useState(0);
  return (
    <div>
      <div className="container-fluid bg-dark p-2" id="head-items-1">
        <div className="d-flex justify-content-around">
          <div className="item-start">
            <a href="#" className="head-nav-item">
              Customer Service
            </a>
            <a href="#" className="head-nav-item">
              News Letter
            </a>
            <a href="#" className="head-nav-item">
              Find a Store
            </a>
          </div>
          <div className="item-end">
            <a href="#" className="head-nav-item">
              <i className="bi bi-person"></i>Sign in
            </a>
            <a href="#" className="head-nav-item">
              <i className="bi bi-heart"></i>Favourites
            </a>
            <a href="#" className="head-nav-item">
              <i className="bi bi-cart"></i>Shopping Cart({shoppingCart})
            </a>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            CRIFTO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main_nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="main_nav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                {" "}
                <a className="nav-link" href="#">
                  Home{" "}
                </a>{" "}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {" "}
                  About{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {" "}
                  Services{" "}
                </a>
              </li>
              <li className="nav-item dropdown has-megamenu">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  {" "}
                  Mega menu{" "}
                </a>
                <div className="dropdown-menu megamenu" role="menu">
                  <div className="row g-3">
                    <div className="col-lg-3 col-6">
                      <div className="col-megamenu">
                        <div className="container">
                          <h6 className="title">Title Menu One</h6>
                          <ul className="list-unstyled">
                            <li>
                              <a href="#">Custom Menu</a>
                            </li>
                            <li>
                              <a href="#">Custom Menu</a>
                            </li>
                            <li>
                              <a href="#">Custom Menu</a>
                            </li>
                            <li>
                              <a href="#">Custom Menu</a>
                            </li>
                            <li>
                              <a href="#">Custom Menu</a>
                            </li>
                            <li>
                              <a href="#">Custom Menu</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-6">
                      <div className="col-megamenu">
                        <h6 className="title">Title Menu Two</h6>
                        <ul className="list-unstyled">
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-6">
                      <div className="col-megamenu">
                        <h6 className="title">Title Menu Three</h6>
                        <ul className="list-unstyled">
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-6">
                      <div className="col-megamenu">
                        <h6 className="title">Title Menu Four</h6>
                        <ul className="list-unstyled">
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {" "}
                  Menu item{" "}
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link  dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  {" "}
                  Dropdown right{" "}
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="#">
                      {" "}
                      Submenu item 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      {" "}
                      Submenu item 2{" "}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
