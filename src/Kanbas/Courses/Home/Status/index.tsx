import {
  FaArrowDown,
  FaBell,
  FaBullhorn,
  FaCalendarAlt,
  FaChartBar,
  FaCheckCircle,
  FaCloudDownloadAlt,
  FaCompress,
} from "react-icons/fa";

import "./index.css";
import { RiProhibitedLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function Status() {
  const links = [
    {
      label: "Import Existing Content",
      icon: <FaCloudDownloadAlt className="fs-5" />,
    },
    {
      label: "Import From Commons",
      icon: <FaArrowDown className="fs-5" />,
    },
    { label: "Choose Home Page", icon: <FaCompress className="fs-5" /> },
    {
      label: "View Course Stream",
      icon: <FaChartBar className="fs-5" />,
    },
    { label: "New Announcement", icon: <FaBullhorn className="fs-5" /> },
    { label: "New Analytics", icon: <FaChartBar className="fs-5" /> },
    {
      label: "View Course Notifications",
      icon: <FaBell className="fs-5" />,
    },
  ];

  return (
    <div>
      <h3>Course Status</h3>
      <div className="d-flex">
        <button className="btn unpublish">
          <RiProhibitedLine /> Unpublish
        </button>
        <button className="btn publish">
          <FaCheckCircle /> Published
        </button>
      </div>
      <div className="d-flex flex-column">
        {links.map((link, index) => (
          <button key={index} className=" btn button-list">
            {link.icon} {link.label}
          </button>
        ))}
      </div>
      <div className="coming-up">
        <div className="d-flex">
          <h4>Coming Up</h4>
          <button className="btn calendar">
            <FaCalendarAlt /> View Calendar
          </button>
        </div>

        <hr />
        <div className="d-flex">
          <FaCalendarAlt />
          <div className="lecture">
            <h5>Lecture</h5>
            <p>Course SP23</p>
            <p>Mar 30 at 6pm</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Status;
