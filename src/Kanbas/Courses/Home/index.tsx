import ModuleList from "../Modules/List";
import Status from "./Status/index";
import "./index.css";

function Home() {
  return (
    <div className="d-flex">
      <div className="module flex-grow-1">
        <ModuleList />
      </div>
      <div className="status">
        <Status />
      </div>
    </div>
  );
}
export default Home;
