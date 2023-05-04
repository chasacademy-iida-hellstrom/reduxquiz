import { useQuestion, deleteQuestion, updateQuestion } from "./redux/quiz";
import { useState } from "react";

export default function Question() {
  const { questions } = useQuestion();
  const [updateQuestionId, setUpdateQuestionId] = useState();
  const [questionName, setQuestionName] = useState();
  const [answer1, setAnswer1] = useState();
  const [answer2, setAnswer2] = useState();
  const [answer3, setAnswer3] = useState();
  const [correctAnswer, setCorrectAnswer] = useState();

  return (
    <ol className="flex flex-wrap gap-8">
      {questions.map((question) => (
        <>
          {updateQuestionId === question.id ? (
            <li className="flex flex-col border border-white mt-4 ml-4 p-4 w-[45%] bg-green-900 space-y-2 text-black">
              <input
                onChange={(e) => setQuestionName(e.target.value)}
                type="text"
                value={questionName}
                placeholder={"Skriv din fråga här:"}
              />
              <input
                onChange={(e) => setAnswer1(e.target.value)}
                type="text"
                value={answer1}
                placeholder={"Svar 1"}
              />
              <input
                onChange={(e) => setAnswer2(e.target.value)}
                type="text"
                value={answer2}
                placeholder={"Svar 2"}
              />
              <input
                onChange={(e) => setAnswer3(e.target.value)}
                type="text"
                value={answer3}
                placeholder={"Svar 3"}
              />
              <input
                onChange={(e) => setCorrectAnswer(e.target.value)}
                type="number"
                value={correctAnswer}
                placeholder={"Numret på rätta svaret"}
              />
              <button
                className="border border-white text-white py-2 px-4 mt-2 mr-2 cursor-pointer bg-green-700 hover:bg-green-500 transition ease-in-out duration-150 rounded-full"
                onClick={() => {
                  const updatedQuestion = {
                    id: updateQuestionId,
                    title: questionName,
                    alt1: answer1,
                    alt2: answer2,
                    alt3: answer3,
                    correctAnswer: correctAnswer,
                  };
                  updateQuestion(updatedQuestion);
                  setUpdateQuestionId(null);
                }}
              >
                Spara ändringar
              </button>
            </li>
          ) : (
            <div className="pl-10 pt-6">
              <li className="list-decimal text-base" key={question.id}>
                {question.title}
                <br />- {question.alt1}
                <br />- {question.alt2}
                <br />- {question.alt3}
                <br />
                Rätt svar: {question.correctAnswer}
                <br />
                <button
                  className="border border-white py-2 px-4 mt-2 mr-2 cursor-pointer bg-green-700 hover:bg-green-500 transition ease-in-out duration-150 rounded-full"
                  onClick={() => {
                    setUpdateQuestionId(question.id);
                    setQuestionName(question.title);
                    setAnswer1(question.alt1);
                    setAnswer2(question.alt2);
                    setAnswer3(question.alt3);
                    setCorrectAnswer(question.correctAnswer);
                  }}
                >
                  Edit 
                </button>
                <button
                  className="border border-white py-2 px-4 mt-2 mr-2 cursor-pointer bg-black hover:bg-green-400 transition ease-in-out duration-150 rounded-full"
                  onClick={() => deleteQuestion(question.id)}
                >
                  Delete 
                </button>
              </li>
            </div>
          )}
        </>
      ))}
    </ol>
  );
}
