/* eslint-disable no-undef */

exports.__esModule = true;
var Container_1 = require("react-bootstrap/Container");
var Nav_1 = require("react-bootstrap/Nav");
var Navbar_1 = require("react-bootstrap/Navbar");
var react_router_dom_1 = require("react-router-dom");
function Navigation() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      Navbar_1["default"],
      { collapseOnSelect: true, expand: "lg", bg: "transparent" },
      React.createElement(
        Container_1["default"],
        null,
        React.createElement(Navbar_1["default"].Brand, { href: "/" }, "Kriya"),
        React.createElement(Navbar_1["default"].Toggle, {
          "aria-controls": "responsive-navbar-nav",
        }),
        React.createElement(
          Navbar_1["default"].Collapse,
          { id: "responsive-navbar-nav" },
          React.createElement(Nav_1["default"], { className: "me-auto" }),
          React.createElement(
            Nav_1["default"],
            null,
            React.createElement(
              Nav_1["default"].Link,
              { href: "/company" },
              "Our Company"
            ),
            React.createElement(
              Nav_1["default"].Link,
              { href: "/products" },
              "Our Products"
            ),
            React.createElement(
              Nav_1["default"].Link,
              { href: "/impact" },
              "Our Impact"
            ),
            React.createElement(
              Nav_1["default"].Link,
              { href: "/r&d" },
              "Our R&D"
            ),
            React.createElement(Nav_1["default"].Link, { href: "/" }, "===")
          )
        )
      )
    ),
    React.createElement(react_router_dom_1.Outlet, null)
  );
}
exports["default"] = Navigation;
