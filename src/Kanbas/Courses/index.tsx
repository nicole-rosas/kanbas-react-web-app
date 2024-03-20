import { courses } from "../../Kanbas/Database";
import {
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import "./index.css";
import {
  FaAngleDown,
  FaBook,
  FaFolderOpen,
  FaHistory,
  FaHome,
  FaInbox,
  FaLink,
  FaPencilAlt,
  FaRegCalendarAlt,
  FaRegUserCircle,
  FaTachometerAlt,
} from "react-icons/fa";
import { useState } from "react";
import { MdExitToApp, MdHelp, MdMonitor, MdOutlineClose } from "react-icons/md";

function Courses({ courses }: { courses: any[] }) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const { pathname } = useLocation();
  const paths = pathname.split("/");
  const [kanbasNav, setKanbasNav] = useState(false);
  const [courseNav, setCourseNav] = useState(false);
  const links = [
    { label: "Home", icon: <FaHome /> },
    { label: "Modules", icon: <FaBook /> },
    { label: "Piazza", icon: <FaLink /> },
    { label: "Grades", icon: <FaFolderOpen /> },
    { label: "Assignments", icon: <FaPencilAlt /> },
  ];

  const linksNav = [
    { label: "Account", icon: <FaRegUserCircle /> },
    { label: "Dashboard", icon: <FaTachometerAlt /> },
    { label: "Courses", icon: <FaBook /> },
    { label: "Calendar", icon: <FaRegCalendarAlt /> },
    { label: "Inbox", icon: <FaInbox /> },
    { label: "History", icon: <FaHistory /> },
    { label: "Studio", icon: <MdMonitor /> },
    { label: "Commons", icon: <MdExitToApp /> },
    { label: "Help", icon: <MdHelp /> },
  ];

  return (
    <div className="course-screen">
      {kanbasNav && (
        <div className={"flex-fill mobile-kanbas-list"}>
          <MdOutlineClose
            size={30}
            className={"float-end"}
            onClick={() => setKanbasNav((prevState) => !prevState)}
          />
          <div className="mobile-kanbas-links">
            {linksNav.map((linksNav, index) => (
              <div key={index} className="mobile-kanbas-item">
                <Link to={`/Kanbas/${linksNav.label}`}>
                  {linksNav.icon}
                  {linksNav.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="col small-thing">
        <div className="flex-fill mobile-kanbas-nav">
          <HiMiniBars3
            size={30}
            onClick={() => setKanbasNav((prevState) => !prevState)}
          />
        </div>
        <div className="flex-fill mobile-course-head">
          {course?.name} <br /> {paths[paths.length - 1]}
        </div>
        <div className="flex-fill mobile-course-nav">
          <FaAngleDown
            size={30}
            onClick={() => setCourseNav((prevState) => !prevState)}
          />
        </div>
      </div>
      {courseNav && (
        <div className="mobile-course-list">
          {links.map((link, index) => (
            <div key={index} className="mobile-course-item">
              <Link to={link.label}>
                {link.icon}
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      )}
      <div className="col thing">
        <h1 className="course-header">
          <div className="d-flex">
            <HiMiniBars3 className="fs-2" />
            <Link to={"Home/"}>
              {course?._id}.{course?.number}.{course?.semester}
            </Link>
            <p>
              {" "}
              {">"} {paths[paths.length - 1]}
            </p>
          </div>
        </h1>
        <hr />
      </div>
      <div className="row">
        <div className="course-navigation-show col nothing">
          <CourseNavigation />
        </div>
        <div className="col">
          <div className="">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route
                path="Assignments/:assignmentId"
                element={<h1>Assignment Editor</h1>}
              />
              <Route path="Grades" element={<h1>Grades</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
