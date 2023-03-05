import React, { useState } from "react";
import PropTypes from "prop-types";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import isEmpty from "lodash/isEmpty";

function SideBarNav(props) {
  const { navItems = [] } = props;
  const { currNav } = useParams();

  return (
    <nav>
      <div>
        <ul>
          {navItems &&
            navItems.map((item = {}) => {
              const { id, icon, name, navUrl } = item;
              console.log(currNav, navUrl);
              const activeNavStyles =
                (isEmpty(currNav) && isEmpty(navUrl)) || currNav === navUrl
                  ? "bg-red-100 text-red-700"
                  : "";
              return (
                <li key={id}>
                  <Link to={`/${navUrl}`}>
                    <div
                      className={`text-gray-400 py-3 px-2 ${activeNavStyles}`}
                    >
                      <div className="w-8 inline-block">
                        <FontAwesomeIcon icon={["fas", icon]} size="lg" />
                      </div>
                      <span className="text-xs">{name}</span>
                    </div>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </nav>
  );
}

SideBarNav.defaultProps = {
  navItems: [
    {
      id: "nav-dashboard",
      icon: "dashboard",
      name: "Dashboard",
      navUrl: "",
    },
    {
      id: "nav-orders",
      icon: "shopping-basket",
      name: "Orders",
      navUrl: "orders",
    },
    {
      id: "nav-team-members",
      icon: "people-group",
      name: "Team Members",
      navUrl: "team-members",
    },
    {
      id: "nav-partners",
      icon: "handshake-angle",
      name: "Partners",
      navUrl: "partners",
    },
    {
      id: "nav-product-listings",
      icon: "list",
      name: "Product Listings",
      navUrl: "product-listings",
    },
    {
      id: "nav-awards-honours",
      icon: "award",
      name: "Awards & Honours",
      navUrl: "awards-honours",
    },
    {
      id: "nav-about-us",
      icon: "info",
      name: "About Us",
      navUrl: "about-us",
    },
    {
      id: "nav-payment-info",
      icon: "money-bill",
      name: "Payment Info",
      navUrl: "payment-info",
    },
  ],
};

SideBarNav.prototype = {
  navItems: PropTypes.shape([]),
};

export default SideBarNav;
