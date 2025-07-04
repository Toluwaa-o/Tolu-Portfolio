const data = [
  {
    name: "Stears Lite",
    description:
      "A sleek dashboard for exploring African company insights and macroeconomic indicators. Features responsive UI, country-level data, and intuitive navigation built with modern web technologies.",
    toolsUsed: ["Next.js", "Tailwind CSS", "Axios", "TypeScript", 'Python', 'MongoDB', 'Web Scrapping', 'Data Visualization'],
    desktopView: '/stears-lite-search-desktop.png',
    link: "https://stears-lite.vercel.app",
    featured: true,
    category: "web_development",
  },
  {
    name: "Stears Lite",
    description:
      "A sleek dashboard for exploring African company insights and macroeconomic indicators. Features responsive UI, country-level data, and intuitive navigation built with modern web technologies.",
    toolsUsed: ["Next.js", "Tailwind CSS", "Axios", "TypeScript", 'Python', 'MongoDB', 'Web Scrapping', 'Data Visualization'],
    desktopView: '/stears-lite-search-desktop.png',
    link: "https://stears-lite.vercel.app",
    featured: true,
    category: "data_analysis",
  },
  {
    name: "Musica",
    description:
      "Enjoy unlimited access to your favorite artists with easy navigation and seamless playback controls. Discover new music, like your favorite tracks, and customize your listening experience on any device.",
    desktopView: "/musica.png",
    toolsUsed: ["NextJS", "Tailwind CSS", "Mongodb", "Context API"],
    link: "https://musica-toluwaa-o.vercel.app/",
    featured: true,
    category: "web_development",
  },
  {
    name: "Brain Tumor Classification",
    description:
      "This model is designed to classify brain scan images into two categories: those containing a tumor and those that do not. It is built using deep learning techniques and trained on a dataset of brain scan images.",
    desktopView: "/brain_tumor_app.png",
    toolsUsed: [
      "NextJS",
      "Typescript",
      "Tailwind CSS",
      "TensorFlow",
      "Flask",
      "Python",
      "Numpy",
      "CNNs",
      "Machine Learning",
      "Deep Learning",
      "Artificial Intelligence",
    ],
    link: "https://brain-tumor-toluwaa.vercel.app/",
    featured: true,
    category: "web_development",
  },
  {
    name: "ChatApp",
    description:
      "Explore a web app for text-based user interactions with authentication (Sign Up, Sign In, Sign Out), username search, and secure password storage using Bcrypt encryption.",
    desktopView:
      "https://res.cloudinary.com/dggxyq3pt/image/upload/v1702331090/file%20uploads/tmp-2-1702331090230_lqr5gf.png",
    toolsUsed: ["NextJS", "Tailwind CSS", "PostgreSQL"],
    link: "https://chat-app-toluwaa-o.vercel.app/",
    featured: true,
    category: "web_development",
  },
  {
    name: "Calculator App",
    description:
      "Discover a responsive calculator app enabling basic math operations and customizable color themes.",
    desktopView:
      "https://res.cloudinary.com/dggxyq3pt/image/upload/v1702331052/file%20uploads/tmp-1-1702331051844_ks5f7j.jpg",
    toolsUsed: ["Javascript", "HTML", "CSS"],
    link: "https://toluwaa-o.github.io/Calculator-app/",
    featured: true,
    category: "web_development",
  },
  {
    name: "Shortly Web App",
    description:
      "Explore a responsive URL shortening web app with easy link management, one-click copying, and error handling for empty submissions.",
    desktopView:
      "https://res.cloudinary.com/dggxyq3pt/image/upload/v1702331396/file%20uploads/tmp-7-1702331395502_hnxueu.jpg",
    toolsUsed: ["Javascript", "HTML", "CSS", "Rest API"],
    link: "https://toluwaa-o.github.io/Shortly-URL-shortening-API-Challenge/",
    featured: true,
    category: "web_development",
  },
  {
    name: "E-Commerce Product Page",
    description:
      "Explore a responsive e-commerce webpage with interactive elements, lightbox gallery, and seamless cart management.",
    desktopView:
      "https://res.cloudinary.com/dggxyq3pt/image/upload/v1702331225/file%20uploads/tmp-5-1702331225212_mg4aih.jpg",
    toolsUsed: ["Javascript", "HTML", "CSS"],
    link: "https://toluwaa-o.github.io/E-commerce-product-page/",
    featured: true,
    category: "web_development",
  },
  {
    name: "Interactive Comments Section",
    description:
      "Discover a responsive web app with interactive elements for creating, reading, updating, and deleting comments and replies. Engage in voting with upvote and downvote options.",
    desktopView:
      "https://res.cloudinary.com/dggxyq3pt/image/upload/v1702331170/file%20uploads/tmp-4-1702331169890_u4ewsa.jpg",
    toolsUsed: ["React", "CSS"],
    link: "https://toluwaa-o.github.io/Interactive-comments-section/",
    featured: true,
    category: "web_development",
  },
  {
    name: "Job Listings App",
    description:
      "Discover a web app with responsive design, hover states for interactive elements, and easy job filtering by categories.",
    desktopView:
      "https://res.cloudinary.com/dggxyq3pt/image/upload/v1702331367/file%20uploads/tmp-6-1702331366416_a1ugqk.jpg",
    toolsUsed: ["React", "CSS"],
    link: "https://toluwaa-o.github.io/job-filter-app/",
    featured: true,
    category: "web_development",
  },
  {
    name: "Crime Management System",
    description:
      "Access a web application facilitating remote crime reporting for users and empowering law enforcement to manage and respond effectively based on diverse categories.",
    desktopView:
      "https://res.cloudinary.com/dggxyq3pt/image/upload/v1702331124/file%20uploads/tmp-3-1702331124191_lxxshj.png",
    toolsUsed: [
      "React",
      "Node JS",
      "Express JS",
      "MongoDB",
      "CSS",
      "React Router",
      "Axios",
      "Redux",
    ],
    link: "https://cms-toluwaa-o.vercel.app/",
    featured: true,
    category: "web_development",
  },
  {
    name: "Enhancing Credit Risk Assessment",
    description:
      "In this project, I develop a machine learning model to predict the likelihood of loan defaults, using borrower data like credit scores, income, and loan history.",
    desktopView: "/risk.jpg",
    toolsUsed: [
      "Data Science",
      "Data Analysis",
      "Machine Learning",
      "Big Data",
    ],
    link:
      "https://medium.com/@asheogunleye02/enhancing-credit-risk-assessment-a-machine-learning-approach-to-predict-borrower-creditworthiness-6e2466296299",
    category: "data_analysis",
  },
  {
    name: "Detecting Fraudulent Online Payments Using Machine Learning Models",
    description:
      "In this project, I develop a model to detect fraudulent online payments with high precision, minimizing false positives and enhancing security in online transactions.",
    desktopView: "/fraud.jpg",
    toolsUsed: [
      "Data Science",
      "Data Analysis",
      "Machine Learning",
      "Big Data",
    ],
    link:
      "https://medium.com/@asheogunleye02/detecting-fraudulent-online-payments-using-machine-learning-models-9a17ec8dc8f8",
    category: "data_analysis",
  },
  {
    name: "Enhancing Financial Stability: Predictive Modeling for Loan Default Risk at ABC Bank",
    description:
      "In this project, I attempt to create a model that accurately predicts loan defaults, enhancing financial stability and risk management for ABC Bank.",
    desktopView: "/Loan.jpg",
    toolsUsed: [
      "Data Science",
      "Data Analysis",
      "Machine Learning",
      "Big Data",
    ],
    link:
      "https://medium.com/@asheogunleye02/enhancing-financial-stability-predictive-modeling-for-loan-default-risk-at-abc-bank-5de99603727b",
    category: "data_analysis",
  },
  {
    name: "Enhancing Walmart’s Operational Efficiency...",
    description:
      "In this project, I attempt to create a predictive model for Walmart's weekly sales using data analysis and machine learning to optimize operations and enhance forecasting accuracy.",
    desktopView: "/walmart.jpg",
    toolsUsed: [
      "Data Science",
      "Data Analysis",
      "Machine Learning",
      "Big Data",
    ],
    link:
      "https://medium.com/@asheogunleye02/enhancing-walmarts-operational-efficiency-achieving-accurate-weekly-sales-predictions-with-b88678c5abaf",
    category: "data_analysis",
  },
  {
    name: "Boosting Sephora Sales with Advanced Recommendation Systems",
    description:
      "In this project, I developed recommendation systems using collaborative and content-based filtering techniques to provide personalized product suggestions and improve user experience for Sephora.",
    desktopView: "/sephora.jpeg",
    toolsUsed: [
      "Data Science",
      "Data Analysis",
      "Machine Learning",
      "Big Data",
    ],
    link:
      "https://medium.com/@asheogunleye02/leveraging-user-reviews-and-product-attributes-a-dual-approach-to-personalized-recommendations-at-b5c1e948e0dc",
    category: "data_analysis",
  },
  {
    name: "Balanced Tree Clothing Company Sales Report",
    description:
      "In this project, I analyzed Balanced Tree Clothing Company's sales performance to uncover insights on top products, segment and category performance, and customer buying patterns.",
    desktopView: "/fashion.jpg",
    toolsUsed: [
      "Data Science",
      "Data Analysis",
      "SQL",
      "Big Data",
    ],
    link:
      "https://medium.com/@asheogunleye02/balanced-tree-clothing-company-sales-report-72b06cfe7b75",
    category: "data_analysis",
  },
  {
    name: "Predictive Modeling For ATP Tennis Match Outcomes",
    description:
      "In this project, I attempt to develop a robust machine learning model capable of predicting tennis match outcomes using a dataset containing detailed historical match information.",
    desktopView: "/tennis.jpg",
    toolsUsed: [
      "Data Science",
      "Data Analysis",
      "Machine Learning",
      "Big Data",
    ],
    link:
      "https://medium.com/@asheogunleye02/predictive-modeling-for-atp-tennis-match-outcomes-a-machine-learning-approach-using-historical-1fc35065fd50",
    category: "data_analysis",
  },
  {
    name: "Comparative Analysis: Arsenal FC",
    description:
      "I web scraped Arsenal's 2022/23 and 2023/24 season data from FBREF, cleaned it using Python, exported to CSV, imported to SQL, queried, and visualized findings with Power BI for a report.",
    desktopView: "/arsenal.jpg",
    toolsUsed: ["Python", "Excel", "SQL", "Power BI"],
    link: "https://github.com/Toluwaa-o/Arsenal_FC_Comparative_Analysis",
    featured: true,
    category: "data_analysis",
  },
  {
    name: "Pizza Runner Case Study",
    description:
      "In this project, i used SQL to answer questions involving Pizza metrics, runner and customer experience, ingredient optimization and price and rating.",
    desktopView:
      "https://res.cloudinary.com/dggxyq3pt/image/upload/v1703966541/file%20uploads/tmp-2-1703966541635_s0gqx5.jpg",
    toolsUsed: ["SQL"],
    link: "https://github.com/Toluwaa-o/Pizza_Runner",
    featured: true,
    category: "data_analysis",
  },
];

export default data;
