import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { FaBook } from "react-icons/fa";
import * as db from "../Database";
function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1> <hr />
      <label>Course Name</label>
      <input
        value={course.name}
        className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <label>Course Number</label>
      <input
        value={course.number}
        className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
      />
      <label>Course Start Date</label>
      <input
        value={course.startDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
      />
      <label>Course End Date</label>
      <input
        value={course.endDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
      />
      <label>Course Semester</label>
      <input
        value={course.semester}
        className="form-control"
        onChange={(e) => setCourse({ ...course, semester: e.target.value })}
      />
      <label>Course Description</label>
      <input
        value={course.description}
        className="form-control"
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />
      <button className="btn addButton" onClick={addNewCourse}>
        Add
      </button>
      <button className="btn updateButton" onClick={updateCourse}>
        Update
      </button>
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
                  <button
                    className="btn editButton"
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn deleteButton"
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}
                  >
                    Delete
                  </button>
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
