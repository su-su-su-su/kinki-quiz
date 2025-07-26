#!/usr/bin/env node

import readline from "readline";
import quizzer from "./quiz-logic.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = quizzer.getQuiz();

rl.question(
  `問題: ${question.pref}の県庁所在地はどこでしょう？\n> `,
  (userAnswer) => {
    const isCorrect = quizzer.checkAnswer(question.pref, userAnswer);

    if (isCorrect) {
      console.log("正解です！おめでとうございます！");
    } else {
      const correctAnswer = quizzer.getCorrectAnswer(question.pref);
      console.log(`残念、不正解。正しい答えは「${correctAnswer}」です。`);
    }

    rl.close();
  },
);
