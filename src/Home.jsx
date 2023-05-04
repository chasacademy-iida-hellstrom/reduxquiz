import Result from "./Result.jsx";
import Quiz from "./Quiz";
import { useQuestion, startQuiz } from "./redux/quiz";

export default function Home() {
  const { quizStarted, showResult } = useQuestion();

  function renderPart() {
    if (showResult) {
      return <Result />;
    } else if (quizStarted) {
      return <Quiz />;
    } else {
      return (
        <div className=" bg-green-600 h-screen w-full text-white">
          <div className="flex flex-col items-center pt-20">
            
            <button
              className="text-2xl border border-white py-4 px-6 mt-16 cursor-pointer hover:bg-green-800 -700 transition ease-in-out duration-150 rounded-full"
              onClick={startQuiz}
            >
              Quiz
            </button>
          </div>
        </div>
      );
    }
  }
  return <div>{renderPart()}</div>;
}
