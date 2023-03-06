import { useParams } from "react-router-dom";
import find from "lodash/find";
import MainComponents from "../components";
import { navItems } from "../helpers";

const withCurrentMainComponent = (WrappedComponent) => {
  const Component = () => {
    const { currNav = "" } = useParams();
    const { component } = find(navItems, (currItem) => {
      if (currItem.navUrl === currNav) return currItem;
    });
    return <WrappedComponent CurrMain={MainComponents[component]} />;
  };
  return Component;
};

export default withCurrentMainComponent;
