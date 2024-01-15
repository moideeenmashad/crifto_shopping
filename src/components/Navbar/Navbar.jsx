import "./Navbar.css";
import Logo from "./h&m-logo.png";

const Navbar = () => {
  let headItemsNav = [
    { navItem: "Customer Service", linkTo: "#" },
    { navItem: "News Letter", linkTo: "#" },
    { navItem: "Find Store", linkTo: "#" },
  ];
  let headItemsNav2 = [
    { navItem: "Sign in", linkTo: "/crifto_shopping/signin", iconName: "bi bi-person me-1" },
    { navItem: "Favourites", linkTo: "#", iconName: "bi bi-heart me-1" },
    { navItem: "Shopping Cart", linkTo: "#", iconName: "bi bi-cart me-1" },
  ];
  let headItemsNavSmMd = headItemsNav.concat(headItemsNav2);
  let navbarItemList = [
    { navItem: "New & Featured", linkTo: "#" },
    { navItem: "Men", linkTo: "#" },
    { navItem: "Women", linkTo: "#" },
    { navItem: "Kids", linkTo: "#" },
    { navItem: "Sport", linkTo: "#" },
    { navItem: "Sustainability", linkTo: "#" },
  ];
  return (
    <div className="sticky-top" id="navbar-sticky-top">
      <div
        className="container-fluid p-4 d-sm-none d-lg-block"
        id="head-items-1"
      >
        <div className="d-flex justify-content-between align-items-center mt-2 ms-auto">
          <div className="item-start">
            {headItemsNav.map((value, index) => {
              return (
                <a href={value.linkTo} className="nav-item head-nav-item">
                  {value.navItem}
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
                  {value.navItem}
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
            className="navbar-toggler btn-outline-light d-md-none d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main_nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-three-dots-vertical"></i>
          </button>
          <div className="collapse navbar-collapse" id="main_nav">
            <ul className="navbar-nav mx-auto text-center text-sm-center text-md-center">
              {navbarItemList.map((value, index) => {
                return (
                  <li className="nav-item">
                    <a className="nav-link" href={value.linkTo}>
                      {value.navItem}
                    </a>
                  </li>
                );
              })}
              {/* <li className="nav-item dropdown has-megamenu">
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
              </li> */}
              {headItemsNavSmMd.map((value, index) => {
                return (
                  <li className="nav-item d-sm-block d-md-block d-lg-none">
                    <a className="nav-link" href={value.linkTo}>
                      {value.navItem}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
