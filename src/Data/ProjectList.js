import test from "../Assets/test.PNG";
import test2 from "../Assets/test2.PNG";
import stockSenceBanner from "../Assets/stock-sense-banner.PNG";

export const ProjectsList = [
  {
    title: "FireBlog",
    description:
      "FireBlog is a fully responsive and dynamic application that utilizes Firebase for secure user authentication, whether through custom profiles or popular external platforms like Google, GitHub, or Facebook. Experience the convenience of creating, updating, and deleting personalized posts, with the added ability to securely upload images.",
    image: test,
    tags: ["React", "Firebase", "Material UI"],
    sourceCode: "https://github.com/RyanJKS/firebase-blog",
    visit: "https://firebase-blog-coral.vercel.app/",
    id: 0,
  },
  {
    title: "Stock Sense",
    description:
      "StockSense is a responsive React app that revolutionizes stock analysis. It combines social sentiment, news articles, and expert opinions into a personalized dashboard with dynamic visualisations using pie chart and bar chart. StockSense empowers users to make informed investment decisions. Experience the future of stock analysis with StockSense.",
    image: stockSenceBanner,
    tags: ["React", "NodeJS", "Express", "RESTful API"],
    sourceCode: "https://github.com/RyanJKS/social-stock-analysis",
    visit: "https://social-stock-analysis.vercel.app/",
    id: 1,
  },
  {
    title: "QuizMaster",
    description:
      "QuizMaster is a captivating and responsive React app. Create a username and password for personalized gameplay. Compete in 10-question quizzes, track time and correct answers. View a personalized dashboard with charts. Secure login with bcrypt and JWT. Join QuizMaster to become the ultimate quiz champion!",
    image: test,
    tags: ["React", "NodeJS", "MongoDB", "RESTFul API"],
    sourceCode: "https://github.com/RyanJKS/mern-quiz-app",
    visit: "https://mern-quiz-app-nine.vercel.app/",
    id: 2,
  },
  {
    title: "Crypto Tracker",
    description:
      "Crypto Tracker is a fully responsive React app where you can effortlessly create a personalized watchlist for crypto. Real-time line and candlestick charts are used to provide insights into crypto price action. With a sleek design and seamless user experience, Crypto Tracker is your gateway to the world of cryptocurrencies.",
    image: test2,
    tags: ["React", "NodeJS", "Express", "RESTful API"],
    sourceCode: "https://github.com/RyanJKS/stocks-app",
    visit: "https://google.com",
    id: 3,
  },
];
