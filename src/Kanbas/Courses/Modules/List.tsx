import React, { useState } from "react";
import "./index.css";
import {
  FaEllipsisV,
  FaCheckCircle,
  FaPlusCircle,
  FaPlus,
  FaCaretDown,
  FaCaretUp,
} from "react-icons/fa";
import { useParams } from "react-router";
import { modules } from "../../Database";
import { HiDotsVertical } from "react-icons/hi";

function ModuleList() {
  const [collapse, setCollapse] = useState(false);
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <div className="d-flex flex-column">
      <div className="module-buttons">
        <button className="btn basic">Collapse All</button>
        <button className="btn basic">View Progress</button>
        <select className="btn drop">
          <FaCheckCircle />
          <option>Publish All</option>
          <option>N/A</option>
        </select>
        <button className="btn red">
          <FaPlus /> Module
        </button>
        <button className="btn basic">
          <HiDotsVertical />
        </button>
      </div>
      <div>
        {modulesList.map((module) => (
          <div
            className="module-list"
            onClick={() => setSelectedModule(module)}
          >
            <div className="module-section">
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
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success me-3" />
                <FaPlusCircle className="me-3" />
                <FaEllipsisV className="me-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <div
                className="module-subsection"
                style={{ display: collapse ? "none" : "" }}
              >
                {module.lessons?.map((lesson) => (
                  <div className="module-item">
                    <FaEllipsisV className="ms-2" />
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success me-3" />
                      <FaEllipsisV className="me-2" />
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export default ModuleList;
