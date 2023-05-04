import React, { useState } from "react";
import { useQuestion, addQuestion } from "./redux/quiz";
import Question from "./Question.jsx";

export default function Admin() {
  const [questionName, setQuestionName] = useState();
  const [answer1, setAnswer1] = useState();
  const [answer2, setAnswer2] = useState();
  const [answer3, setAnswer3] = useState();
  const [correctAnswer, setCorrectAnswer] = useState();

  const { questions } = useQuestion();

  function createTask() {
    const question = {
      title: questionName,
      alt1: answer1,
      alt2: answer2,
      alt3: answer3,
      correctAnswer: correctAnswer,
      id: questions.length + 1,
    };
    addQuestion(question);
  }

  return (
    <div className="bg-green-600 py-14 px-20 h-full w-full text-white">
      <div className="pl-8">
        <h1 className="text-2xl">ADMIN</h1>
        <p class="py-4">Skriv en egen quizfråga här:</p>
      </div>
      <div className="flex flex-col border-4 border-white p-12 bg-green-500 space-y-4">
        <input
          className="text-sky-900 px-2 p-2"
          onChange={(e) => setQuestionName(e.target.value)}
          type="text"
          placeholder={"Din fråga"}
        />

        <input
          className="text-sky-900 px-2 p-2"
          onChange={(e) => setAnswer1(e.target.value)}
          type="text"
          placeholder={"Svar 1"}
        />
        <input
          className="text-sky-900 px-2 p-2"
          onChange={(e) => setAnswer2(e.target.value)}
          type="text"
          placeholder={"Svar 2"}
        />
        <input
          className="text-sky-900 px-2 p-2"
          onChange={(e) => setAnswer3(e.target.value)}
          type="text"
          placeholder={"Svar 3"}
        />
        <input
          className="text-sky-900 px-2 p-2"
          onChange={(e) => setCorrectAnswer(e.target.value)}
          type="number"
          placeholder={"Numret på rätta svaret"}
        />

        <button
          className="text-lg border border-white py-2 px-6  mt-16 cursor-pointer bg-green-600 hover:bg-green-800 transition ease-in-out duration-150 rounded-full"
          onClick={createTask}
        >
          Spara frågan!
        </button>
      </div>
      <p className="text-xl py-8 pl-8">Nuvarande frågor: </p>
      <Question />
    </div>
  );
}
