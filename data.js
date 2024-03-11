const data = [
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
    name: "Global Store Data Analysis",
    description:
      "In this project, i created a concise Tableau project offering visual insights into sales, profitability, customer behavior, product performance, and regional dynamics for Global Store Data. Explore trends, correlations, and key metrics through interactive dashboards.",
    desktopView: "/GlobalStore.png",
    toolsUsed: ["Tableau"],
    link: "https://public.tableau.com/views/GlobalStoreAnalysis_17053734801330/Dashboard?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
    featured: true,
    category: "data_analysis",
  },
  {
    name: "Audible Dataset Cleaning and Visualization",
    description:
      "The Audible Dataset Cleaning and Visualization project involved meticulous cleaning to ensure data integrity. I then utilized visualization tools to represent patterns and key insights, enhancing the dataset's quality for improved interpretation.",
    desktopView:
      "https://res.cloudinary.com/dggxyq3pt/image/upload/v1703966972/file%20uploads/tmp-4-1703966971566_iwefuv.jpg",
    toolsUsed: ["Python", "Power BI"],
    link: "https://github.com/Toluwaa-o/Audible-Dataset-Cleaning-and-Visualization",
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
  {
    name: "Danny's Dinner Case Study",
    description:
      "Danny aims to analyze customer data for insights into visiting patterns, expenditures, and favorite menu items. The goal is to enhance customer engagement and deliver a personalized dining experience, building stronger connections with loyal patrons at his restaurant.",
    desktopView:
      "https://res.cloudinary.com/dggxyq3pt/image/upload/v1703966541/file%20uploads/tmp-2-1703966541635_s0gqx5.jpg",
    toolsUsed: ["SQL"],
    link: "https://github.com/Toluwaa-o/Danny-s-Dinner",
    featured: true,
    category: "data_analysis",
  },
  {
    name: "Web Scrapping Practice",
    description:
      "This project involved hands-on practice with web scraping using BeautifulSoup and Requests. Specifically, I gathered data from FBREF, focusing on extracting and cleaning Premier League table data. The cleaned data was then utilized to create insightful visuals.",
    desktopView:
      "https://res.cloudinary.com/dggxyq3pt/image/upload/v1703966760/file%20uploads/tmp-3-1703966759669_ly9x7n.jpg",
    toolsUsed: ["Python", "Power BI"],
    link: "https://github.com/Toluwaa-o/Web-Scrapping-Practice",
    featured: true,
    category: "data_analysis",
  },
];

export default data;
