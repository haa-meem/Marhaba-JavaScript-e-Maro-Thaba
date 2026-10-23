//Page 317

//2
const user = {
  name: "Haa-meem",
  email: "haameemalhamra@gmail.com",
  address: "Kuralia",
  order_history: ["miner", "book", "hair oil"],
};
console.log(JSON.stringify(user));

//3
const shoppingCart = {
  products: ["Sauce", "Bread", "Eggs"],
  total_price: 350,
  user_details: {
    name: "Haa-meem",
    id: 60,
    contact: "01631749688",
  },
};
console.log(JSON.stringify(shoppingCart));

//4
const weather = {
  city: "Sirajganj",
  temperature: 31,
  humidity: 0.51,
  forecast: [31, 31, 32, 33, 33, 30, 30],
};
console.log(JSON.stringify(weather));

//5
const movie = {
  title: "Battleship",
  release_year: 2012,
  actors: ["Taylor Kitsch", "Liam Neeson", "Rihanna"],
  ratings: 5.8,
};
console.log(JSON.stringify(movie));

//6
const project_management_system = [
  {
    projectName: "E-Commerce Website",
    projectDescription:
      "Developing a full-stack platform with payment integration.",
    teamMembers: ["Anik", "Sabbir", "Nusrat"],
    deadline: "2026-12-31",
    tasks: [
      {
        title: "Database Design",
        assignee: "Anik",
        status: "In Progress",
      },
      {
        title: "API Integration",
        assignee: "Sabbir",
        status: "To Do",
      },
    ],
  },
  {
    projectName: "Mobile App",
    projectDescription: "Building a secure mobile banking app.",
    teamMembers: ["Rahat", "Tisha"],
    deadline: "2027-03-15",
    tasks: [
      {
        title: "User Auth",
        assignee: "Rahat",
        status: "To Do",
      },
    ],
  },
];
console.log(JSON.stringify(project_management_system));

//7
const courses = [
  {
    courseTitle: "Full Stack Web Development",
    instructorName: "Jhankar Mahbub",
    duration: "6 Months",
    lessons: [
      {
        lessonName: "HTML & CSS Basics",
        duration: "2 Hours",
        difficultyLevel: "beginner",
      },
      {
        lessonName: "React State Management",
        duration: "3 Hours",
        difficultyLevel: "intermediate",
      },
    ],
  },
  {
    courseTitle: "Data Structures & Algorithms",
    instructorName: "Hasin Hayder",
    duration: "4 Months",
    lessons: [
      {
        lessonName: "Introduction to Arrays",
        duration: "1.5 Hours",
        difficultyLevel: "beginner",
      },
      {
        lessonName: "Dynamic Programming",
        duration: "4 Hours",
        difficultyLevel: "advanced",
      },
    ],
  },
  {
    courseTitle: "UI/UX Design Masterclass",
    instructorName: "Atikur Rahman",
    duration: "3 Months",
    lessons: [
      {
        lessonName: "Color Theory",
        duration: "1 Hour",
        difficultyLevel: "beginner",
      },
      {
        lessonName: "Advanced Prototyping",
        duration: "2.5 Hours",
        difficultyLevel: "advanced",
      },
    ],
  },
];
console.log(JSON.stringify(courses));

//8
const productReviews = [
  {
    productName: "Sony Noise Cancelling Headphones",
    reviewerDetails: {
      name: "Abdur Rahman",
      email: "rahman@example.com",
    },
    rating: 4.8,
    reviewText: "Excellent sound quality and very comfortable to wear.",
  },
  {
    productName: "Mechanical Gaming Keyboard",
    reviewerDetails: {
      name: "Sabbir Hossain",
      email: "sabbir@example.com",
    },
    rating: 4.5,
    reviewText:
      "The switches feel great, but the RGB lighting could be brighter.",
  },
];

console.log(JSON.stringify(productReviews));
console.log(JSON.parse(JSON.stringify(productReviews)));
