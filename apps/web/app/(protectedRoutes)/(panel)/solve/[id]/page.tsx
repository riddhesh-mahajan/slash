"use client";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { axiosInstance } from "@utilsaxiosHelpers";
import TestcaseResult from "components/testcaseResult";
import React, { useEffect, useState } from "react";

type question = {
  question: string;
  answer: string;
  qid: string;
  id: string;
} | null;

function page({ params }: { params: { id: number } }): JSX.Element {
  const [targetQuestion, settargetQuestion] = useState<question>(null);
  const [code, setCode] = React.useState(``);
  const [codeOutput, setcodeOutput] = useState([]);
  const [isSubmitting, setisSubmitting] = useState(false);

  const getTargetQuestion = async (): Promise<void> => {
    const response = await axiosInstance.get(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/questions/${params.id}}`
    );

    if (response.data.message == "success") {
      settargetQuestion(response.data.payload.targetQuestion);
      setCode(response.data.payload.targetQuestion.template);
    }
  };

  const runCode = async (): Promise<void> => {
    setisSubmitting(true);
    const response = await axiosInstance.post(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/code/run`,
      JSON.stringify({ code: code, questionId: params.id })
    );
    setisSubmitting(false);

    if (response.data.message == "success") {
      setcodeOutput(response.data.payload.output);
    }
  };

  useEffect(() => {
    getTargetQuestion();
  }, []);

  return (
    <div>
      <div className="grid w-full grid-cols-2">
        <div>
          Solve <br />
          {targetQuestion?.question}
        </div>

        <div>
          <CodeEditor
            value={code}
            language="js"
            placeholder="Please enter JS code."
            onChange={(evn) => setCode(evn.target.value)}
            padding={15}
            className="bg-slate-800"
            style={{
              fontSize: 18,
              minHeight: "calc(100vh - 30rem)",
              fontFamily:
                "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
            }}
          />

          <div className="mt-3">
            <p className="mb-1 text-1xl text-slate-300">Result</p>
            {codeOutput?.map(
              (out: { in: string; out: string; answer: string }, index) => {
                return <TestcaseResult out={out} index={index} key={index} />;
              }
            )}
          </div>

          <button
            className={
              isSubmitting
                ? "px-8 py-2 mt-3 text-slate-400 bg-slate-600 rounded-md"
                : "px-8 py-2 mt-3 text-white bg-teal-600 rounded-md hover:bg-teal-800"
            }
            onClick={() => {
              runCode();
            }}
          >
            {isSubmitting && (
              <FontAwesomeIcon icon={faSpinner} className="animate-spin me-2" />
            )}
            Run
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
