import { Link, useLocation } from "react-router-dom";
import "./index.css";
import {
  FaTachometerAlt,
  FaRegUserCircle,
  FaBook,
  FaRegCalendarAlt,
  FaInbox,
  FaHistory,
} from "react-icons/fa";

import { MdMonitor, MdExitToApp, MdHelp } from "react-icons/md";

function KanbasNavigation() {
  const links = [
    { label: "Account", icon: <FaRegUserCircle className="fs-2" /> },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
    { label: "Courses", icon: <FaBook className="fs-2" /> },
    { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox", icon: <FaInbox className="fs-2" /> },
    { label: "History", icon: <FaHistory className="fs-2" /> },
    { label: "Studio", icon: <MdMonitor className="fs-2" /> },
    { label: "Commons", icon: <MdExitToApp className="fs-2" /> },
    { label: "Help", icon: <MdHelp className="fs-2" /> },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      <li className="neu-logo">
        <img src="/images/neu.png" height="50px" alt="NEU logo" />
      </li>
      {links.map((link, index) => (
        <li
          key={index}
          className={
            (pathname.includes(link.label) && link.label.includes("Account")
              ? "wd-account-active"
              : "") ||
            (pathname.includes(link.label) ? "wd-active" : "") ||
            (link.label.includes("Account") ? "wd-account" : "")
          }
        >
          <Link to={`/Kanbas/${link.label}`} className={"test"}>
            {" "}
            {link.icon}
            <br />
            <p className={`test1`}>{link.label} </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;
