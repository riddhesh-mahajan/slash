"use client";

import { axiosInstance } from "@utilsaxiosHelpers";
import Question from "components/Question";
import { useEffect, useState } from "react";

type questionData = {
  question: string;
  answer: string;
  qid: string;
  id: string;
};

function page(): JSX.Element {
  const [allQuestions, setallQuestions] = useState([]);

  const getAllQuestions = async () => {
    const response = await axiosInstance.get(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/questions`
    );

    if (response.data.message == "success") {
      setallQuestions(response.data.payload.qa);
    }
  };
  useEffect(() => {
    getAllQuestions();
  }, []);

  return (
    <div className="container mx-auto">
      <ul role="list" className="mb-2">
        {allQuestions.map((questionData: questionData, index: number) => {
          return (
            <Question questionData={questionData} index={index} key={index} />
          );
        })}
      </ul>
    </div>
  );
}

export default page;
