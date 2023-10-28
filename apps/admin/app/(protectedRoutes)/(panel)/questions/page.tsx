"use client";

import { Field, FieldArray, Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { axiosInstance } from "@/utils/axiosHelpers";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

interface QaItem {
  qid: string;
  question: string;
  answer: string;
}

function questions() {
  const RegisterSchema = Yup.object().shape({
    qa: Yup.array().of(
      Yup.object().shape({
        qid: Yup.string().required(),
        question: Yup.string().required(),
        testCases: Yup.string().required(),
        template: Yup.string().required(),
      })
    ),
  });

  const formik = useFormik({
    initialValues: {
      qa: [
        {
          qid: uuidv4(),
          question: "",
          testCases: [],
          template: "",
        },
      ],
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      console.log(values);

      try {
        const response = await axiosInstance.post(
          `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/admin/questions`,
          JSON.stringify(values)
        );

        if (response.data.message == "success") {
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
    setFieldValue,
  } = formik;

  const getqa = async () => {
    const response = await axiosInstance.get(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/admin/questions`
    );

    if (response.data.message == "success") {
      setFieldValue("qa", response.data.payload.qa);
    }
  };

  useEffect(() => {
    getqa();
  }, []);

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
                            <p className="mb-1 text-md text-slate-400">
                              Question
                            </p>
                            <Field
                              as="textarea"
                              rows={10}
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
                                  (errors?.qa?.[index] as any)?.question
                                    ? "block"
                                    : "none",
                              }}
                            >
                              Question is required
                            </span>
                          </div>

                          {/* Input Object */}
                          <div className="mb-3">
                            <p className="mb-1 text-md text-slate-400">
                              Test cases (Array of objects)
                            </p>
                            <Field
                              as="textarea"
                              rows={10}
                              placeholder={`Test cases`}
                              name={`qa.${index}.testCases`}
                              className="w-full p-3 text-black rounded-sm"
                            />
                            <span
                              className="text-red-400"
                              style={{
                                display:
                                  Object.keys(errors).includes("qa") &&
                                  errors[`qa`]?.length != 0 &&
                                  (errors?.qa?.[index] as any)?.testCases
                                    ? "block"
                                    : "none",
                              }}
                            >
                              Test cases is required
                            </span>
                          </div>

                          {/* Template */}
                          <div className="mb-3">
                            <p className="mb-1 text-md text-slate-400">
                              Template
                            </p>
                            <Field
                              as="textarea"
                              rows={10}
                              placeholder={`Template`}
                              name={`qa.${index}.template`}
                              className="w-full p-3 text-black rounded-sm"
                            />
                            <span
                              className="text-red-400"
                              style={{
                                display:
                                  Object.keys(errors).includes("qa") &&
                                  errors[`qa`]?.length != 0 &&
                                  (errors?.qa?.[index] as any)?.template
                                    ? "block"
                                    : "none",
                              }}
                            >
                              Template is required
                            </span>
                          </div>

                          {/* Answer */}
                          <div>
                            <p className="mb-1 text-md text-slate-400">
                              Answer (Array of answers for each testcase)
                            </p>
                            <Field
                              as="textarea"
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
                                  (errors?.qa?.[index] as any)?.answer
                                    ? "block"
                                    : "none",
                              }}
                            >
                              Answer is required
                            </span>
                          </div>
                        </div>
                      ))}

                    <div className="flex justify-between w-full">
                      <div>
                        <button
                          type="button"
                          onClick={() =>
                            arrayHelpers.push({
                              qid: uuidv4(),
                              question: "",
                              answer: "",
                              testCases: [],
                              template: "",
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
