"use client";

import { Field, FieldArray, Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface QaItem {
  question: string;
  answer: string;
  answerType: string;
}

function questions() {
  const RegisterSchema = Yup.object().shape({
    qa: Yup.array().of(
      Yup.object().shape({
        question: Yup.string().required(),
        answer: Yup.string().required(),
        answerType: Yup.string().required(),
      })
    ),
  });

  const formik = useFormik({
    initialValues: {
      qa: [
        {
          question: "",
          answer: "",
          answerType: "",
        },
      ],
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      console.log(values);
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, values } =
    formik;

  return (
    <div>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <div className="container mx-auto">
            <div className="mb-4">
              <FieldArray
                {...getFieldProps("qa")}
                render={(arrayHelpers) => (
                  <div>
                    {typeof values?.qa !== "string" &&
                      values?.qa?.map((option, index) => (
                        <div key={index} className="mb-6">
                          <div className="flex justify-between mb-2 align-middle">
                            <h2 className="mb-2 text-2xl font-semibold">
                              Question {index + 1}
                            </h2>

                            <FontAwesomeIcon
                              icon={faXmark}
                              onClick={() => arrayHelpers.remove(index)}
                              className="text-3xl text-red-400 cursor-pointer hover:text-red-500"
                            />
                          </div>

                          {/* Question */}
                          <div className="mb-3">
                            <Field
                              as="textarea"
                              placeholder={`Question`}
                              name={`qa.${index}.question`}
                              className="w-full p-3 text-black rounded-sm"
                            />
                            <span
                              className="text-red-400"
                              style={{
                                display:
                                  Object.keys(errors).includes("qa") &&
                                  errors[`qa`]?.length != 0 &&
                                  errors?.qa?.[index]?.question
                                    ? "block"
                                    : "none",
                              }}
                            >
                              Question is required
                            </span>
                          </div>

                          {/* Answer and answer type */}
                          <div className="grid grid-cols-2 gap-4">
                            {/* Answer */}
                            <div>
                              <Field
                                placeholder={`Answer`}
                                name={`qa.${index}.answer`}
                                className="w-full p-3 text-black rounded-sm"
                              />
                              <span
                                className="text-red-400"
                                style={{
                                  display:
                                    Object.keys(errors).includes("qa") &&
                                    errors[`qa`]?.length != 0 &&
                                    errors?.qa?.[index]?.answer
                                      ? "block"
                                      : "none",
                                }}
                              >
                                Answer is required
                              </span>
                            </div>

                            {/* Answer Type */}
                            <div>
                              <select
                                {...getFieldProps(`qa.${index}.answerType`)}
                                className="w-full p-3 text-black rounded-sm"
                                placeholder="Type"
                              >
                                <option value="">Select Plan</option>
                                <option value="ownerserver_standard_plan">
                                  Standard Plan
                                </option>
                                <option value="ownerserver_each_pplan">
                                  Each pplan
                                </option>
                                <option value="ownerserver_custom_olan">
                                  Custom Olan
                                </option>
                              </select>
                              <span
                                className="text-red-400"
                                style={{
                                  display:
                                    Object.keys(errors).includes("qa") &&
                                    errors[`qa`]?.length != 0 &&
                                    errors?.qa?.[index]?.answerType
                                      ? "block"
                                      : "none",
                                }}
                              >
                                Answer type is required
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}

                    <div className="flex justify-between w-full">
                      <div>
                        <button
                          onClick={() =>
                            arrayHelpers.push({
                              question: "",
                              answer: "",
                              answerType: "",
                            })
                          }
                          className="px-8 py-3 font-semibold text-white rounded-lg bg-gradient-to-r from-blue-700 to-purple-700 hover:from-blue-800 hover:to-purple-800"
                        >
                          Add New Question
                        </button>
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="px-8 py-3 font-semibold text-white bg-teal-400 rounded-lg"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Saving..." : "Save"}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              />
            </div>
          </div>
        </Form>
      </FormikProvider>
    </div>
  );
}

export default questions;
