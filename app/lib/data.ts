import { QuestionInterface } from "./definitions";

export const scorePyramid = [
  { id: 0, value: '0' },
  { id: 1, value: '1000' },
  { id: 2, value: '2000' },
  { id: 3, value: '5000' },
  { id: 4, value: '10000' },
  { id: 5, value: '20000' },
  { id: 6, value: '50000' },
  { id: 7, value: '100000' },
  { id: 8, value: '200000' },
  { id: 9, value: '500000' },
  { id: 10, value: '1000000' },
].reverse();

export const questionsData: QuestionInterface[] = [
  {
    id: 1,
    question: "Rolex is a company that specializes in what type of product?",
    options: [
      { text: "Phone", correct: false },
      { text: "Watches", correct: true },
      { text: "Food", correct: false },
      { text: "Cosmetic", correct: false },
    ],
  },
  {
    id: 2,
    question: "Who provided the voice of Groot in the Guardians of the Galaxy movies?",
    options: [
      { text: "Bradley Cooper", correct: false },
      { text: "Chris Pratt", correct: false },
      { text: "Dave Bautista", correct: false },
      { text: "Vin Diesel", correct: true },
    ],
  },
  {
    id: 3,
    question: "Who directed the ultimate Marvel movie Avengers: Endgame?",
    options: [
      { text: "Joss Whedon", correct: false },
      { text: "James Gunn", correct: false },
      { text: "Russo Brothers", correct: true },
      { text: "Jon Favreau", correct: false },
    ],
  },
  {
    id: 4,
    question: "Which is the highest-grossing R-rated film in North America?",
    options: [
      { text: "Deadpool", correct: false },
      { text: "Joker", correct: true },
      { text: "The Matrix", correct: false },
      { text: "The Hangover", correct: false },
    ],
  },
  {
    id: 5,
    question: "This singer is famously called the 'Material Girl'?",
    options: [
      { text: "Britney Spears", correct: false },
      { text: "Lady Gaga", correct: false },
      { text: "Madonna", correct: true },
      { text: "Beyoncé", correct: false },
    ],
  },
  {
    id: 6,
    question: "What was the coffee shop named in the hit TV show Friends?",
    options: [
      { text: "Central Perk", correct: true },
      { text: "The Central", correct: false },
      { text: "Central Café", correct: false },
      { text: "Friends Café", correct: false },
    ],
  },
  {
    id: 7,
    question: "How old was Rose in the Titanic movie when she was recounting her story?",
    options: [
      { text: "90 years old", correct: false },
      { text: "95 years old", correct: false },
      { text: "100 years old", correct: true },
      { text: "105 years old", correct: false },
    ],
  },
  {
    id: 8,
    question: "How many Harry Potter books and movies are there?",
    options: [
      { text: "7 books & 7 movies", correct: false },
      { text: "7 books & 8 movies", correct: true },
      { text: "8 books & 8 movies", correct: false },
      { text: "8 books & 7 movies", correct: false },
    ],
  },
  {
    id: 9,
    question: "Mickey Mouse almost went by a different name. What was it?",
    options: [
      { text: "Mortimer Mouse", correct: true },
      { text: "Marvin Mouse", correct: false },
      { text: "Maxwell Mouse", correct: false },
      { text: "Monty Mouse", correct: false },
    ],
  },
  {
    id: 10,
    question: "How many Star Wars movies are there?",
    options: [
      { text: "8", correct: false },
      { text: "9", correct: true },
      { text: "10", correct: false },
      { text: "11", correct: false },
    ],
  },
  {
    id: 11,
    question: "Who was Walt Disney's favorite princess?",
    options: [
      { text: "Snow White", correct: false },
      { text: "Cinderella", correct: false },
      { text: "Aurora (Sleeping Beauty)", correct: false },
      { text: "Alice (from Alice in Wonderland)", correct: true },
    ],
  },
  {
    id: 12,
    question: "How many years have passed between the release of Avatar and its sequel, Avatar: The Way of Water?",
    options: [
      { text: "10 years", correct: false },
      { text: "11 years", correct: false },
      { text: "12 years", correct: false },
      { text: "13 years", correct: true },
    ],
  },

  {
    id: 13,
    question: "Which country is both an island and a continent?",
    options: [
      { text: "Australia", correct: true },
      { text: "New Zealand", correct: false },
      { text: "Madagascar", correct: false },
      { text: "Greenland", correct: false },
    ],
  },
  {
    id: 14,
    question: "How many teeth does an adult human have?",
    options: [
      { text: "28", correct: false },
      { text: "30", correct: false },
      { text: "32", correct: true },
      { text: "34", correct: false },
    ],
  },
  {
    id: 15,
    question: "What is the largest known living land animal?",
    options: [
      { text: "African elephant", correct: true },
      { text: "Giraffe", correct: false },
      { text: "Hippopotamus", correct: false },
      { text: "Rhino", correct: false },
    ],
  },
  {
    id: 16,
    question: "How many elements are in the periodic table?",
    options: [
      { text: "109", correct: false },
      { text: "114", correct: false },
      { text: "120", correct: false },
      { text: "118", correct: true },
    ],
  },
  {
    id: 17,
    question: "What is the world's largest ocean?",
    options: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    id: 18,
    question: "What temperature does water boil?",
    options: [
      { text: "180ºF", correct: false },
      { text: "200ºF", correct: false },
      { text: "212ºF", correct: true },
      { text: "220ºF", correct: false },
    ],
  },
  {
    id: 19,
    question: "What is the largest internal organ in the human body?",
    options: [
      { text: "The heart", correct: false },
      { text: "The lungs", correct: false },
      { text: "The liver", correct: true },
      { text: "The brain", correct: false },
    ],
  },
  {
    id: 20,
    question: "What was the first planet to be discovered using the telescope?",
    options: [
      { text: "Saturn", correct: false },
      { text: "Jupiter", correct: false },
      { text: "Mars", correct: false },
      { text: "Uranus", correct: true },
    ],
  },
  {
    id: 21,
    question: "How many Lord of the Rings films are there?",
    options: [
      { text: "One", correct: false },
      { text: "Two", correct: false },
      { text: "Three", correct: true },
      { text: "Four", correct: false },
    ],
  },

  {
    id: 22,
    question: "Who was the first Disney Princess?",
    options: [
      { text: "Cinderella", correct: false },
      { text: "Aurora", correct: false },
      { text: "Snow White", correct: true },
      { text: "Belle", correct: false },
    ],
  },
  {
    id: 23,
    question: "What is the four-word nickname given to the titular character of the Harry Potter series?",
    options: [
      { text: "The Chosen One", correct: false },
      { text: "The Dark Lord Slayer", correct: false },
      { text: "The Boy Who Lived", correct: true },
      { text: "The Half-Blood Prince", correct: false },
    ],
  },
  {
    id: 24,
    question: "What is the term for the fear of spiders?",
    options: [
      { text: "Claustrophobia", correct: false },
      { text: "Acrophobia", correct: false },
      { text: "Arachnophobia", correct: true },
      { text: "Agoraphobia", correct: false },
    ],
  },
  {
    id: 25,
    question: "What’s the most-consumed beverage in the world that is not water?",
    options: [
      { text: "Coffee", correct: false },
      { text: "Tea", correct: true },
      { text: "Soda", correct: false },
      { text: "Beer", correct: false },
    ],
  },
  {
    id: 26,
    question: "What’s the only vegetable that is also classified as a flower?",
    options: [
      { text: "Carrot", correct: false },
      { text: "Broccoli", correct: true },
      { text: "Potato", correct: false },
      { text: "Cauliflower", correct: false },
    ],
  },
  {
    id: 27,
    question: "The fear of what is called Hippopotomonstrosesquippedaliophobia?",
    options: [
      {
        text: "Public Speaking",
        correct: false
      },
      {
        text: "Snakes",
        correct: false
      },
      {
        text: "Long Words",
        correct: true
      },
      {
        text: "Heights",
        correct: false
      }
    ]
  },

  {
    id: 28,
    question: "What is the capital of France?",
    options: [
      {
        text: "London",
        correct: false
      },
      {
        text: "Berlin",
        correct: false
      },
      {
        text: "Paris",
        correct: true
      },
      {
        text: "Rome",
        correct: false
      }
    ]
  },
  {
    id: 29,
    question: "How many hearts does an octopus have?",
    options: [
      {
        text: "One",
        correct: false
      },
      {
        text: "Two",
        correct: true
      },
      {
        text: "Three",
        correct: false
      },
      {
        text: "Four",
        correct: false
      }
    ]
  },
  {
    id: 30,
    question: "What is the name of the world wide web inventor?",
    options: [
      {
        text: "Tim Berners-Lee",
        correct: true
      },
      {
        text: "Mark Zuckerberg",
        correct: false
      },
      {
        text: "Bill Gates",
        correct: false
      },
      {
        text: "Larry Page",
        correct: false
      }
    ]
  },
  {
    id: 31,
    question: "On what continent is the country of Egypt located?",
    options: [
      {
        text: "Africa",
        correct: true
      },
      {
        text: "Asia",
        correct: false
      },
      {
        text: "Europe",
        correct: false
      },
      {
        text: "South America",
        correct: false
      }
    ]
  },
  {
    id: 32,
    question: "What is the currency of Japan?",
    options: [
      {
        text: "Yen",
        correct: true
      },
      {
        text: "Yuan",
        correct: false
      },
      {
        text: "Euro",
        correct: false
      },
      {
        text: "Dollar",
        correct: false
      }
    ]
  },
  {
    id: 33,
    question: "What is the name of the fictional detective who always wears a deerstalker hat?",
    options: [
      {
        text: "Sherlock Holmes",
        correct: true
      },
      {
        text: "Hercule Poirot",
        correct: false
      },
      {
        text: "Miss Marple",
        correct: false
      },
      {
        text: "Columbo",
        correct: false
      }
    ]
  },
  {
    id: 34,
    question: "How many balls are on the table during a pool game?",
    options: [
      {
        text: "13",
        correct: false
      },
      {
        text: "14",
        correct: false
      },
      {
        text: "15",
        correct: false
      },
      {
        text: "16",
        correct: true
      }
    ]
  },
  {
    id: 35,
    question: "When did the website `Facebook` launch?",
    options: [
      {
        text: "2004",
        correct: true,
      },
      {
        text: "2005",
        correct: false,
      },
      {
        text: "2006",
        correct: false,
      },
      {
        text: "2007",
        correct: false,
      },
    ],
  },
  {
    id: 36,
    question: "Who played the character of harry potter in movie?",
    options: [
      {
        text: "Johnny Deep",
        correct: false,
      },
      {
        text: "Leonardo Di Caprio",
        correct: false,
      },
      {
        text: "Denzel Washington",
        correct: false,
      },
      {
        text: "Daniel Red Cliff",
        correct: true,
      },
    ],
  },
  {
    id: 37,
    question: "Which actor played the character Neo in the movie 'The Matrix'?",
    options: [
      { text: "Keanu Reeves", correct: true },
      { text: "Brad Pitt", correct: false },
      { text: "Tom Cruise", correct: false },
      { text: "Leonardo DiCaprio", correct: false }
    ]
  },
  {
    id: 38,
    question: "In the film 'Forrest Gump', what does Forrest say life is like?",
    options: [
      { text: "A box of chocolates", correct: true },
      { text: "A puzzle", correct: false },
      { text: "A roller coaster", correct: false },
      { text: "A game of cards", correct: false }
    ]
  },
  {
    id: 39,
    question: "Which movie features a young lion prince who overcomes adversity to reclaim his kingdom?",
    options: [
      { text: "The Lion King", correct: true },
      { text: "Finding Nemo", correct: false },
      { text: "Shrek", correct: false },
      { text: "Toy Story", correct: false }
    ]
  },
  {
    id: 40,
    question: "Who directed the 1994 film 'Pulp Fiction'?",
    options: [
      { text: "Quentin Tarantino", correct: true },
      { text: "Martin Scorsese", correct: false },
      { text: "Steven Spielberg", correct: false },
      { text: "Christopher Nolan", correct: false }
    ]
  },
  {
    id: 41,
    question: "Which movie features a character named Jack Dawson and is set aboard the RMS Titanic?",
    options: [
      { text: "Titanic", correct: true },
      { text: "The Great Gatsby", correct: false },
      { text: "Gone with the Wind", correct: false },
      { text: "Braveheart", correct: false }
    ]
  },
  {
    id: 42,
    question: "In the movie 'The Shawshank Redemption', what was the profession of the main character, Andy Dufresne, before he was wrongfully imprisoned?",
    options: [
      { text: "Banker", correct: true },
      { text: "Lawyer", correct: false },
      { text: "Doctor", correct: false },
      { text: "Teacher", correct: false }
    ]
  },
  {
    id: 43,
    question: "Which movie features the line: 'We mustn't be afraid to dream a little bigger, darling'?",
    options: [
        { text: "Inception", correct: true },
        { text: "Interstellar", correct: false },
        { text: "The Martian", correct: false },
        { text: "Gravity", correct: false }
    ]
},
{
    id: 44,
    question: "Which movie features the line: 'Do not go gentle into that good night'?",
    options: [
        { text: "Interstellar", correct: true },
        { text: "Inception", correct: false },
        { text: "The Martian", correct: false },
        { text: "Gravity", correct: false }
    ]
},
{
    id: 45,
    question: "Which movie features the line: 'I'm going to have to science the s*** out of this'?",
    options: [
        { text: "The Martian", correct: true },
        { text: "Inception", correct: false },
        { text: "Interstellar", correct: false },
        { text: "Gravity", correct: false }
    ]
}

];