import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import SideBar from "./SideBar";
import Main from "./Main";

function MasterLayout(props) {
  const { sideBarNav } = props;
  return (
    <div>
      <Header />
      <section className="flex p-4 gap-x-4">
        <SideBar>{sideBarNav}</SideBar>
        <Main />
      </section>
    </div>
  );
}

MasterLayout.prototype = {
  sideBarNav: PropTypes.element.isRequired,
};

export default MasterLayout;
