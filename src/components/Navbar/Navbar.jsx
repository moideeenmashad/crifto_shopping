import "./Navbar.css";
import Logo from "./h&m-logo.png";

const Navbar = () => {
  let headItemsNav = [
    { itemName: "Customer Service", linkTo: "#" },
    { itemName: "News Letter", linkTo: "#" },
    { itemName: "Find Store", linkTo: "#" },
  ];
  let headItemsNav2 = [
    { itemName: "Sign in", linkTo: "#", iconName: "bi bi-person" },
    { itemName: "Favourites", linkTo: "#", iconName: "bi bi-heart" },
    { itemName: "Shopping Cart", linkTo: "#", iconName: "bi bi-cart" },
  ];
  return (
    <div>
      <div
        className="container-fluid p-2 d-sm-none d-lg-block"
        id="head-items-1"
      >
        <div className="d-flex justify-content-between align-items-center mt-2 ms-auto">
          <div className="item-start">
            {headItemsNav.map((value, index) => {
              return (
                <a href={value.linkTo} className="nav-item head-nav-item">
                  {value.itemName}
                </a>
              );
            })}
          </div>
          <div className="item-center">
            <img src={Logo} alt="logo.png" className="brand-logo" />
          </div>
          <div className="item-end">
            {headItemsNav2.map((value, index) => {
              return (
                <a href={value.linkTo} className="nav-item head-nav-item">
                  <i className={value.iconName}></i>
                  {value.itemName}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg sticky-top" id="head-items-2">
        <div className="container-fluid">
          <img
            src={Logo}
            alt=""
            className="d-md-block d-lg-none nav-sm-md-logo"
          />
          <button
            className="navbar-toggler btn-outline-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main_nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-three-dots-vertical"></i>
          </button>
          <div className="collapse navbar-collapse" id="main_nav">
            <ul className="navbar-nav mx-auto">
              {" "}
              {/* Updated class to mx-auto */}
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
              {/* Additional menu items for sm and md screens */}
              <li className="nav-item d-sm-block d-md-block d-lg-none">
                <a className="nav-link" href="#">
                  Customer Service
                </a>
              </li>
              <li className="nav-item d-sm-block d-md-block d-lg-none">
                <a className="nav-link" href="#">
                  News Letter
                </a>
              </li>
              <li className="nav-item d-sm-block d-md-block d-lg-none">
                <a className="nav-link" href="#">
                  Find a Store
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
