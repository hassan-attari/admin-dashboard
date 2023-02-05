import CourseList from "../features/courses/components/course-list";
import { httpService, httpInterceptedService } from "@core/http-service";

const Courses = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="d-flex align-items-center justify-content-between mb-5">
          <h3 className="mb-0">همه دوره ها</h3>
          <a href="#" class="btn btn-primary fw-bolder  mt-n1">
            <i class="fas fa-plus ms-2"></i>افزودن دوره جدید
          </a>
        </div>
        <CourseList />
      </div>
    </div>
  );
};

export async function coursesLoader() {
  const response = await httpInterceptedService.get("/Course/list");
  return response.data;
}

export default Courses;
