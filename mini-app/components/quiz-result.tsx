"use client";

import { Button } from "@/components/ui/button";
import { Share } from "@/components/share";
import { url } from "@/lib/metadata";

type Animal = "cat" | "dog" | "fox" | "hamster" | "horse";

interface Props {
  animal: Animal;
  scores: Record<Animal, number>;
  onRetake: () => void;
}

export default function QuizResult({ animal, scores, onRetake }: Props) {
  const imageMap: Record<Animal, string> = {
    cat: "/cat.png",
    dog: "/dog.png",
    fox: "/fox.png",
    hamster: "/hamster.png",
    horse: "/horse.png",
  };

  const animalNames: Record<Animal, string> = {
    cat: "Cat",
    dog: "Dog",
    fox: "Fox",
    hamster: "Hamster",
    horse: "Horse",
  };

  const shareText = `I am a ${animalNames[animal]}! Take the quiz and find out yours: ${url}`;

  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-3xl font-bold">You are a {animalNames[animal]}!</h2>
      <img
        src={imageMap[animal]}
        alt={animalNames[animal]}
        width={512}
        height={512}
        className="rounded"
      />
      <Share text={shareText} />
      <Button variant="outline" onClick={onRetake}>
        Retake Quiz
      </Button>
    </div>
  );
}
