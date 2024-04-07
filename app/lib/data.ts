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
      {
        text: "Phone",
        correct: false,
      },
      {
        text: "Watches",
        correct: true,
      },
      {
        text: "Food",
        correct: false,
      },
      {
        text: "Cosmetic",
        correct: false,
      },
    ],
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
    question: "Rolex is a company that specializes in what type of product?",
    options: [
      {
        text: "Phone",
        correct: false,
      },
      {
        text: "Watches",
        correct: true,
      },
      {
        text: "Food",
        correct: false,
      },
      {
        text: "Cosmetic",
        correct: false,
      },
    ],
  },
  {
    id: 5,
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
    id: 6,
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
];