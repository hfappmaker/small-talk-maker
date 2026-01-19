"use client";

import { useState } from "react";
import Header from "@/components/Header";
import TopicCard from "@/components/TopicCard";
import RandomButton from "@/components/RandomButton";
import { getRandomTopic } from "@/lib/topics";
import { Topic } from "@/types/topic";

export default function Home() {
  const [currentTopic, setCurrentTopic] = useState<Topic | null>(null);

  const handleRandomClick = () => {
    try {
      const topic = getRandomTopic(currentTopic?.id);
      setCurrentTopic(topic);
    } catch (error) {
      console.error("話題の取得に失敗しました:", error);
    }
  };

  return (
    <main className="flex flex-col items-center p-6 flex-grow">
      <Header />
      <div className="flex flex-col items-center gap-6 mt-8 w-full max-w-4xl">
        <RandomButton onClick={handleRandomClick} />
        <TopicCard topic={currentTopic} />
      </div>
    </main>
  );
}
