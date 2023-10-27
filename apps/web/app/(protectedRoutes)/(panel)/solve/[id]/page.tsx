"use client";

import { axiosInstance } from "@utilsaxiosHelpers";
import React, { useState, useEffect } from "react";

type question = {
  question: string;
  answer: string;
  answerType: string;
  qid: string;
  id: string;
} | null;

function page({ params }: { params: { id: number } }): JSX.Element {
  const [targetQuestion, settargetQuestion] = useState<question>(null);

  const getTargetQuestion = async () => {
    const response = await axiosInstance.get(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/questions/${params.id}}`
    );

    if (response.data.message == "success") {
      settargetQuestion(response.data.payload.qa);
    }
  };

  useEffect(() => {
    getTargetQuestion();
  }, []);

  return (
    <div>
      Solve {params.id} {targetQuestion?.question}
    </div>
  );
}

export default page;
