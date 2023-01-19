import logo from "@assets/images/logo.svg";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="text-center mt-4">
        <img src={logo} style={{ height: "100px" }} />
        <h1 className="h2">پلتفرم آموزش آنلاین</h1>
        <p className="lead">
          جهت استفاده از ویژگی های پلتفرم آموزش آنلاین کلاسبن ثبت نام کنید
        </p>
        <p className="lead">
          قبلا ثبت نام کرده اید؟
          <Link to="/login" className="me-2">
            وارد شوید{" "}
          </Link>
        </p>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="m-sm-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="form-label">نام</label>
                <input
                  {...register("firstName", { required: "نام الزامی است" })}
                  className={`form-control form-control-lg ${
                    errors.firstName && "is-invalid"
                  }`}
                  type="text"
                />
                {errors.firstName && (
                  <p className="text-danger small fw-bolder mt-1">
                    {errors.firstName?.message}
                  </p>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">نام خانوادگی</label>
                <input
                  {...register("lastName", {
                    required: "نام خانوداگی الزامی است",
                  })}
                  className={`form-control form-control-lg ${
                    errors.lastName && "is-invalid"
                  }`}
                  type="text"
                />
                {errors.lastName && (
                  <p className="text-danger small fw-bolder mt-1">
                    {errors.lastName?.message}
                  </p>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">ایمیل</label>
                <input
                  {...register("email", {
                    required: "ایمیل الزامی است",
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  })}
                  className={`form-control form-control-lg ${
                    errors.email && "is-invalid"
                  }`}
                />
                {errors.email && errors.email.type === "required" && (
                  <p className="text-danger small fw-bolder mt-1">
                    {errors.email?.message}
                  </p>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <p className="text-danger small fw-bolder mt-1">
                    فرمت ایمیل صحیح نیست
                  </p>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">رمز عبور</label>
                <input
                  {...register("password", { required: "رمز عبور الزامی است" })}
                  className={`form-control form-control-lg ${
                    errors.password && "is-invalid"
                  }`}
                  type="password"
                />
                {errors.password && (
                  <p className="text-danger small fw-bolder mt-1">
                    {errors.password?.message}
                  </p>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">تکرار رمز عبور</label>
                <input
                  {...register("confirmPassword", {
                    required: "تکرار رمز عبور الزامی است",
                    validate: (value) => {
                      if (watch("password") !== value) {
                        return "عدم تطابق با رمز عبور وارد شده";
                      }
                    },
                  })}
                  className={`form-control form-control-lg ${
                    errors.confirmPassword && "is-invalid"
                  }`}
                  type="password"
                />
                {errors.confirmPassword &&
                  errors.confirmPassword.type === "required" && (
                    <p className="text-danger small fw-bolder mt-1">
                      {errors.confirmPassword?.message}
                    </p>
                  )}
                {errors.confirmPassword &&
                  errors.confirmPassword.type === "validate" && (
                    <p className="text-danger small fw-bolder mt-1">
                      {errors.confirmPassword?.message}
                    </p>
                  )}
              </div>
              <div className="text-center mt-3">
                <button type="submit" className="btn btn-lg btn-primary">
                  ثبت نام کنید
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
