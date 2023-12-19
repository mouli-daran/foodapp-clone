import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer , toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Contact = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
        firstName: Yup.string().max(10, "Must be below 10 Charaters")
        .required("FirstName Required"),
        lastName: Yup.string().max(15 , "Must be below 15 Characters")
        .required("LastName Required"),
        email: Yup.string().email("Invalid Email Address").required("Required")
    }),
    onSubmit : (values) => {
        console.log(values);
    }
  });

  return (
      <div className="input-container m-4  flex flex-col items-center text-xl text-center">
        <h1>Contact Us</h1>
    <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name : </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="border-black rounded-lg border p-1 my-2"
          placeholder="Enter First Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          />
          {formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}
        <br />
        <label htmlFor="lastName">Last Name : </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          className="border-black rounded-lg border p-1 my-2"

          placeholder="Enter Last Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}
        <br />
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          name="email"
          id="email"
          className="border-black rounded-lg border p-1 my-2"

          placeholder="Enter Email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
        <br />
        <button className="submitBtn bg-slate-400 m-2 p-2 rounded-xl" type="submit" onClick={() => {toast("Form Submitted")}}>Submit</button>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
    </form>
      </div>
  );
    
};

export default Contact;