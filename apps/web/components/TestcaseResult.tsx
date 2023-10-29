import {
  faCircleCheck,
  faCircleXmark,
  faVial,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TestcaseResult({
  out,
  index,
}: {
  out: { in: string; out: string; answer: string };
  index: number;
}) {
  return (
    <div className="mb-2">
      <div className="p-2 mb-1 bg-slate-800">
        <p>
          <FontAwesomeIcon icon={faVial} className="me-2" />
          Testcase {index + 1}: {out.in}
        </p>
      </div>

      <div className="p-2 bg-slate-800">
        <p>
          {out.out.toString().trim() == out.answer.toString() ? (
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-teal-400 me-2"
            />
          ) : (
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="text-red-400 me-2"
            />
          )}
          Output: {out.out}
        </p>
      </div>
    </div>
  );
}

export default TestcaseResult;
