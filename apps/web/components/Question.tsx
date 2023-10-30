import Link from "next/link";

function Question({
  questionData,
  index,
}: {
  questionData: {
    question: string;
    answer: string;
    qid: string;
    id: string;
  };
  index: number;
}): JSX.Element {
  return (
    <Link href={`/solve/${questionData.id}`} key={index}>
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
}

export default Question;
