import React, { useState } from "react";
import "./index.css";
import {
  FaEllipsisV,
  FaCheckCircle,
  FaPlusCircle,
  FaPlus,
} from "react-icons/fa";
import { useParams } from "react-router";
import { modules } from "../../Database";
import { HiDotsVertical } from "react-icons/hi";

function ModuleList() {
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
        <ul className="list-group wd-modules">
          {modulesList.map((module) => (
            <li
              className="list-group-item"
              onClick={() => setSelectedModule(module)}
            >
              <div>
                <FaEllipsisV className="me-2" />
                {module.name}
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </div>
              {selectedModule._id === module._id && (
                <ul className="list-group">
                  {module.lessons?.map((lesson) => (
                    <li className="list-group-item">
                      <FaEllipsisV className="me-2" />
                      {lesson.name}
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default ModuleList;
