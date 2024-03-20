import React, { useState } from "react";
import "./index.css";
import {
  FaEllipsisV,
  FaCheckCircle,
  FaPlusCircle,
  FaCaretDown,
  FaCaretUp,
} from "react-icons/fa";
import { useParams } from "react-router";
import { modules } from "../../Database";
import { HiDotsVertical } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./reducer";
import { KanbasState } from "../../store";
interface Lesson {
  _id: string;
  name: string;
  description: string;
  module: string;
}
function ModuleList() {
  const [collapse, setCollapse] = useState(false);
  const { courseId } = useParams();
  const moduleList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules,
  );
  const currentModule = useSelector(
    (state: KanbasState) => state.modulesReducer.module,
  );
  const dispatch = useDispatch();

  const [selectedModule, setSelectedModule] = useState(moduleList[0]);
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
        <input
          className="module-box"
          value={currentModule.name}
          onChange={(e) =>
            dispatch(setModule({ ...currentModule, name: e.target.value }))
          }
        />
        <input
          className="module-box"
          value={currentModule.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }
        />
        <button
          className="btn add"
          onClick={() =>
            dispatch(addModule({ ...currentModule, course: courseId }))
          }
        >
          Add
        </button>
        <button
          className="btn basic"
          onClick={() => dispatch(updateModule(currentModule))}
        >
          Update
        </button>
        <button className="btn basic">
          <HiDotsVertical />
        </button>
      </div>
      <div>
        {moduleList
          .filter((module) => module.course === courseId)
          .map((module) => (
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
                <span className="float-end button-group">
                  <button
                    className="btn edit"
                    onClick={() => dispatch(setModule(module))}
                  >
                    Edit
                  </button>

                  <button
                    className="btn delete"
                    onClick={() => dispatch(deleteModule(module._id))}
                  >
                    Delete
                  </button>
                  <FaCheckCircle className="text-success me-3" />
                  <FaEllipsisV className="me-2" />
                </span>
              </div>
              {selectedModule._id === module._id && (
                <div
                  className="module-subsection"
                  style={{ display: collapse ? "none" : "" }}
                >
                  {module.lessons?.map((lesson: Lesson) => (
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
