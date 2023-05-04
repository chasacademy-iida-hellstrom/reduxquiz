import { createReduxModule } from "hooks-for-redux";

const initialState = {
  quizStarted: false,
  showResult: false,
  currentQuestion: 0,
  score: 0,
  questions: [
    {
      title: "Vad heter sångaren i Gyllene Tider?",
      alt1: "Per Gessle",
      alt2: "Per Gissle",
      alt3: "Per Roxette",
      correctAnswer: 1,
      id: 1,
    },
    {
      title: "Vilket år släpptes Nirvanas Nevermind?",
      alt1: "1990",
      alt2: "1991",
      alt3: "1992",
      correctAnswer: 2,
      id: 2,
    },
    {
      title: "Från vilket land kommer ABBA?",
      alt1: "Finland",
      alt2: "Sverige",
      alt3: "Danmark",
      correctAnswer: 2,
      id: 3,
    },
  ],
};

export const [
  useQuestion,
  {
    addQuestion,
    deleteQuestion,
    updateQuestion,
    startQuiz,
    answerQuestion,
    resetQuiz,
  },
] = createReduxModule("question", initialState, {
  addQuestion: (state, question) => {
    const oldQuestion = state.questions;
    const newQuestion = [...oldQuestion, question];
    return { ...state, questions: newQuestion };
  },
  deleteQuestion: (state, objectID) => {
    return {
      ...state,
      questions: state.questions.filter((question) => question.id !== objectID),
    };
  },
  updateQuestion: (state, updatedQuestion) => {
    return {
      ...state,
      questions: state.questions.map((question) => {
        if (question.id == updatedQuestion.id) {
          return updatedQuestion;
        }
        return question;
      }),
    };
  },
  startQuiz: (state) => {
    return {
      ...state,
      quizStarted: true,
      showResult: false,
      currentQuestion: 0,
      score: 0,
    };
  },
  answerQuestion: (state, answer) => {
    const score =
      state.score +
      (answer === state.questions[state.currentQuestion]?.correctAnswer
        ? 1
        : 0);
    if (state.currentQuestion === state.questions.length - 1) {
      return {
        ...state,
        score,
        showResult: true,
        quizStarted: false,
      };
    } else {
      return {
        ...state,
        score,
        currentQuestion: state.currentQuestion + 1,
      };
    }
  },
  resetQuiz: (state) => {
    return {
      ...state,
      quizStarted: false,
      showResult: false,
      currentQuestion: 0,
      score: 0,
    };
  },
});
