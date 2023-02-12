import { useForm } from "react-hook-form";
import { useNavigation } from "react-router";
import { Link } from "react-router-dom";

const AddOrUpdateCategory = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";
  return (
    <div className="card">
      <div className="card-body">
        <form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="form-label">نام</label>
            <input
              className={`form-control form-control-lg ${
                errors.name && "is-invalid"
              }`}
              {...register("name", {
                required: true,
              })}
            />
            {errors.name && errors.name.type === "required" && (
              <p className="text-danger small fw-bolder mt-1">نام الزامی است</p>
            )}
          </div>
          <div className="text-start mt-3">
          <Link
              type="button"
              className="btn btn-lg btn-secondary ms-2"
              to="/course-categories"
            >
             بستن
            </Link>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-lg btn-primary"
            >
              {isSubmitting ? "در حال ذخیره اطلاعات ..." : "ثبت تغییرات"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddOrUpdateCategory;
