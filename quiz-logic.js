const kinkiCapitals = [
  { pref: "大阪府", capital: "大阪市" },
  { pref: "京都府", capital: "京都市" },
  { pref: "兵庫県", capital: "神戸市" },
  { pref: "奈良県", capital: "奈良市" },
  { pref: "滋賀県", capital: "大津市" },
  { pref: "三重県", capital: "津市" },
  { pref: "和歌山県", capital: "和歌山市" },
];

const quizzer = {
  getQuiz: function () {
    const randomIndex = Math.floor(Math.random() * kinkiCapitals.length);
    return { pref: kinkiCapitals[randomIndex].pref };
  },

  checkAnswer: function (prefecture, userAnswer) {
    const quizItem = kinkiCapitals.find((item) => item.pref === prefecture);
    if (!quizItem) {
      return false;
    }
    return quizItem.capital === userAnswer;
  },

  getCorrectAnswer: function (prefecture) {
    const quizItem = kinkiCapitals.find((item) => item.pref === prefecture);
    return quizItem?.capital;
  },
};

export default quizzer;
