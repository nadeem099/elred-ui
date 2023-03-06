import React from "react";
import { useParams } from "react-router-dom";
import find from "lodash/find";
import { navItems } from "../helpers";

function Default() {
  const { currNav = "" } = useParams();

  const { name } = find(navItems, (item) => {
    if (item.navUrl === currNav) return item;
    return null;
  });
  return <div>{name}</div>;
}

export default Default;
