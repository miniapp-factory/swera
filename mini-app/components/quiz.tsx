"use client";

import { useState } from "react";
import QuizResult from "./quiz-result";

type Animal = "cat" | "dog" | "fox" | "hamster" | "horse";

interface Answer {
  text: string;
  animal: Animal;
}

interface Question {
  prompt: string;
  answers: Answer[];
}

const questions: Question[] = [
  {
    prompt: "What is your favorite type of food?",
    answers: [
      { text: "Fish", animal: "cat" },
      { text: "Meat", animal: "dog" },
      { text: "Insects", animal: "fox" },
      { text: "Seeds", animal: "hamster" },
      { text: "Grass", animal: "horse" },
    ],
  },
  {
    prompt: "How do you prefer to spend your day?",
    answers: [
      { text: "Sleeping", animal: "cat" },
      { text: "Playing fetch", animal: "dog" },
      { text: "Exploring", animal: "fox" },
      { text: "Running on wheel", animal: "hamster" },
      { text: "Grazing", animal: "horse" },
    ],
  },
  {
    prompt: "What is your ideal companion?",
    answers: [
      { text: "A quiet human", animal: "cat" },
      { text: "An active human", animal: "dog" },
      { text: "A curious human", animal: "fox" },
      { text: "A small human", animal: "hamster" },
      { text: "A strong human", animal: "horse" },
    ],
  },
  {
    prompt: "Which environment do you thrive in?",
    answers: [
      { text: "Indoor", animal: "cat" },
      { text: "Outdoor", animal: "dog" },
      { text: "Forest", animal: "fox" },
      { text: "Cage", animal: "hamster" },
      { text: "Pasture", animal: "horse" },
    ],
  },
  {
    prompt: "What is your favorite activity?",
    answers: [
      { text: "Purring", animal: "cat" },
      { text: "Barking", animal: "dog" },
      { text: "Hunting", animal: "fox" },
      { text: "Chewing", animal: "hamster" },
      { text: "Galloping", animal: "horse" },
    ],
  },
];

function shuffleArray<T>(array: T[]): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<Animal, number>>({
    cat: 0,
    dog: 0,
    fox: 0,
    hamster: 0,
    horse: 0,
  });

  const handleAnswer = (animal: Animal) => {
    setScores((prev) => ({ ...prev, [animal]: prev[animal] + 1 }));
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    }
  };

  const resetQuiz = () => {
    setCurrent(0);
    setScores({
      cat: 0,
      dog: 0,
      fox: 0,
      hamster: 0,
      horse: 0,
    });
  };

  if (current < questions.length) {
    const q = questions[current];
    const shuffledAnswers = shuffleArray(q.answers);
    return (
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">{q.prompt}</h2>
        <div className="flex flex-col gap-2">
          {shuffledAnswers.map((ans, idx) => (
            <button
              key={idx}
              className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
              onClick={() => handleAnswer(ans.animal)}
            >
              {ans.text}
            </button>
          ))}
        </div>
      </div>
    );
  }

  const maxAnimal = Object.entries(scores).reduce((a, b) =>
    b[1] > a[1] ? b : a
  )[0] as Animal;

  return (
    <QuizResult
      animal={maxAnimal}
      scores={scores}
      onRetake={resetQuiz}
    />
  );
}
