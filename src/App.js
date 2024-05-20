import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function App() {
  const {
    handleChange,
    handleBlur,
    handleReset,
    handleSubmit,
    setFieldValue,
    errors,
    values,
    touched,
  } = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      avater: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .required("Please Enter Your Name")
        .min(3, "Name must contain 3 words"),
      email: Yup.string()
        .email("Invalid Email")
        .required("Please Enter Your Email"),
      phone: Yup.number()
        .required("Please Enter your Number")
        .positive("Number must be positive")
        .integer(),
      address: Yup.string()
        .required("Please Write your Details")
        .max(30, "Maximum 30 characters"),
      avater: Yup.string().required("Please Upload Image"),
    }),
    onSubmit: (value) => {
      console.log(value);
      handleReset();
    },
  });
  return (
    <div className="container">
      <h1 className="container mt-5 mb-3">Contact Form</h1>
      <form className="w-75" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control py-2"
            id="fullName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.fullName}
            name="fullName"
          />
          <small className="text-danger">
            {touched.fullName && errors.fullName ? errors.fullName : null}
          </small>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control py-2"
            id="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            name="email"
          />
          <small className="text-danger">
            {touched.email && errors.email ? errors.email : null}
          </small>
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone No
          </label>
          <input
            type="text"
            className="form-control py-2"
            id="phone"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}
            name="phone"
          />
          <small className="text-danger">
            {touched.phone && errors.phone ? errors.phone : null}
          </small>
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            type="file"
            className="form-control py-2"
            id="image"
            onChange={(e) => {
              let fileReader = new FileReader();
              fileReader.onload = () => {
                if (fileReader.readyState === 2) {
                  setFieldValue("avater", fileReader.result);
                }
              };
              fileReader.readAsDataURL(e.target.files[0]);
            }}
            onBlur={handleBlur}
            value={values.image}
            accept="image/*"
            name="image"
          />
          <small className="text-danger">
            {touched.avater && errors.avater ? errors.avater : null}
          </small>
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control py-2"
            id="address"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.address}
            name="address"
          />
          <small className="text-danger">
            {touched.address && errors.address ? errors.address : null}
          </small>
        </div>
        <button type="submit" className="btn btn-primary px-4 py-2">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
