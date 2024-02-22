import React, { useState } from "react";
import {
  FaBook,
  FaCaretDown,
  FaCaretUp,
  FaCheckCircle,
  FaEllipsisV,
  FaGripLinesVertical,
  FaPlus,
  FaPlusCircle,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css";
import { HiDotsVertical } from "react-icons/hi";
function Assignments() {
  const [collapse, setCollapse] = useState(false);
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId,
  );
  return (
    <div className="assign-page">
      <div className="assign-buttons d-flex">
        <div className="flex-fill">
          <input
            type={"text"}
            placeholder={"Search for Assignments"}
            className={"assignment-search-input"}
          />
        </div>
        <div className="float-end">
          <button className="basic-button">
            <FaPlus /> Group
          </button>
          <button className="basic-button">
            <FaPlus /> Assignment
          </button>
          <button className="btn basic-button">
            <HiDotsVertical />
          </button>
        </div>
      </div>
      <div className="wd-modules">
        <div className="assign-section">
          <div className="assign-section-item">
            <FaEllipsisV className="ms-2" />
            <FaEllipsisV />
            {!collapse && (
              <FaCaretDown
                className={"main-content-chevron"}
                onClick={() => setCollapse(true)}
              />
            )}
            {collapse && (
              <FaCaretUp
                className={"main-content-chevron"}
                onClick={() => setCollapse(false)}
              />
            )}
            ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success me-3" />
              <FaPlusCircle className="me-3" />
              <FaEllipsisV className="me-2" />
            </span>
          </div>
          <div
            className="assign-subsection"
            style={{ display: collapse ? "none" : "" }}
          >
            {assignmentList.map((assignment) => (
              <div className="assign-subsection-item d-flex">
                <div className={""}>
                  <FaEllipsisV className="ms-2" />
                  <FaEllipsisV className="me-2" />
                  <FaBook className="me-2 book-icon" />
                </div>
                <div className="container assign-text flex-fill">
                  <Link
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                  >
                    {assignment.title}
                  </Link>
                  <span className="d-flex">
                    <p className="mult-module">Multiple Modules</p>
                    <FaGripLinesVertical size={10} />
                    <p className="due"> Due </p>
                    <p> Oct 2 at 11:59pm</p>
                    <FaGripLinesVertical size={10} />
                    <p>100 pts</p>
                  </span>
                </div>
                <div className={"flex-fill"}>
                  <span className="float-end assign-end">
                    <FaCheckCircle size={15.5} className="text-success me-3" />
                    <FaEllipsisV size={15.5} className="me-2" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Assignments;
