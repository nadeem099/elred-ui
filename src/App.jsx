import "./App.css";
import "./helpers/fontAwesome";
import { MasterLayout } from "./Layouts";
import { SideBarNav } from "./components";

function App() {
  return <MasterLayout sideBarNav={<SideBarNav />} />;
}

export default App;
