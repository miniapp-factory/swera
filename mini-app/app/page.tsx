"use client";

import Quiz from "@/components/quiz";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-8">Animal Quiz</h1>
      <Quiz />
    </main>
  );
}
