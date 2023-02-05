import { useLoaderData } from "react-router";
import Course from "./course";

const CourseList = () => {
  const loadedCourses = useLoaderData();
  return (
    <>
      <div className="row">
        {loadedCourses.map((course) => (
          <div className="col-12 col-md-6 col-lg-3" key={course.id}>
            <Course {...course} />
          </div>
        ))}
      </div>
    </>
  );
};
export default CourseList;
