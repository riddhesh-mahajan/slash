"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { axiosInstance } from "@utilsaxiosHelpers";

type questionData = {
  question: string;
  answer: string;
  answerType: string;
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
        {allQuestions.map((questionData: questionData, index) => {
          return (
            <Link href={`/solve`} key={index}>
              <li className="flex px-5 py-5 mb-3 border-2 border-white rounded-lg cursor-pointer hover:bg-white hover:text-black">
                <div className="flex min-w-0 gap-x-4">
                  <h2>Q{index + 1}</h2>
                  <div className="flex-auto min-w-0">
                    <p className="text-sm font-semibold leading-6">
                      {questionData.question}
                    </p>
                  </div>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default page;
