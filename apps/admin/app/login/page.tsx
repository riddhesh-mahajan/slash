"use client";
import { FormikProvider, useFormik } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function login() {
  const ValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: async (values, {}) => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/admin/auth/login`,
          JSON.stringify(values)
        );

        if (response.data.message == "success") {
          window.open(
            `/questions?accessToken=${response.data.payload.token}&email=${response.data.payload.user.email}`,
            "_self"
          );
        }
      } catch (err) {
        console.log(err);
      }
    },
  });

  const {
    errors,
    touched,
    handleSubmit,
    isSubmitting,
    getFieldProps,
    values,
  }: {
    errors: any;
    touched: any;
    handleSubmit: any;
    isSubmitting: boolean;
    getFieldProps: Function;
    values: any;
  } = formik;

  return (
    <>
      <FormikProvider value={formik}>
        <form onSubmit={handleSubmit}>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
              <div className="relative overflow-hidden text-left transition-all transform rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-lg">
                <div className="pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="w-full mt-3">
                      <h3 className="text-3xl font-semibold leading-6 text-center">
                        Admin Log In
                      </h3>
                      <p className="mt-4 mb-6 text-sm text-center text-gray-500">
                        Level up your skills with Slash, the tool that
                        <br /> simplifies DSA problem-solving.
                      </p>

                      <div className="mt-2">
                        {/* Email */}
                        <div className="mb-5">
                          <input
                            type="text"
                            {...getFieldProps("email")}
                            placeholder="Email"
                            className="block w-full p-3 border-0 border-none rounded-md text-slate-200 focus:outline-slate-500 focus:outline-2 bg-slate-800"
                          />
                          <span
                            className={`${
                              Boolean(touched.email && errors.email)
                                ? "block text-red-500 mt-1"
                                : "hidden"
                            }`}
                          >
                            {errors.email}
                          </span>
                        </div>

                        {/* Password */}
                        <div className="mb-5">
                          <input
                            type="password"
                            {...getFieldProps("password")}
                            placeholder="Password"
                            className="block w-full p-3 border-0 border-none rounded-md text-slate-200 focus:outline-slate-500 focus:outline-2 bg-slate-800"
                          />
                          <span
                            className={`${
                              Boolean(touched.password && errors.password)
                                ? "block text-red-500 mt-1"
                                : "hidden"
                            }`}
                          >
                            {errors.password}
                          </span>
                        </div>
                      </div>

                      <div>
                        {errors.afterSubmit && (
                          <div className="alert alert-danger" role="alert">
                            {errors.afterSubmit}
                          </div>
                        )}

                        <button
                          disabled={
                            Object.keys(errors).length != 0 || isSubmitting
                          }
                          type="submit"
                          className="w-full px-8 py-3 font-semibold text-white rounded-lg bg-gradient-to-r from-blue-700 to-purple-700 hover:from-blue-800 hover:to-purple-800"
                        >
                          {Object.keys(errors).length != 0 ||
                            (isSubmitting && (
                              <FontAwesomeIcon
                                icon={faSpinner}
                                className="animate-spin me-2"
                              />
                            ))}
                          Login
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </FormikProvider>
    </>
  );
}

export default login;
