import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import "./index.css";
import { FaBook } from "react-icons/fa";
function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1> <hr />
      <h2>Published Courses (3)</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img
                  src={`/images/${course.image}`}
                  className="card-img-top"
                  style={{ height: 150 }}
                />
                <div className="card-body">
                  <Link
                    className="card-text"
                    to={`/Kanbas/Courses/${course._id}/Home`}
                  >
                    <p className="card-title">
                      {course._id} {course.name}
                    </p>
                    <p className="card-name">
                      {course._id}.{course.number}.{course.semester}
                    </p>
                    <p className="card-description">{course.description}</p>
                  </Link>
                  {/*<p className="card-text">{course.name}</p>*/}
                  <Link
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    className="btn course-button"
                  >
                    <FaBook className="fs-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
