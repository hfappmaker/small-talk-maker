"use client";

import { useLocale } from "next-intl";
import Header from "@/components/Header";
import TopicCard from "@/components/TopicCard";
import RandomButton from "@/components/RandomButton";
import { getRandomTopic } from "@/lib/topics";
import { useTopicContext } from "@/contexts/TopicContext";

export default function Home() {
  const { currentTopic, setCurrentTopic } = useTopicContext();
  const locale = useLocale();

  const handleShowTopic = async () => {
    try {
      const topic = await getRandomTopic(locale, currentTopic?.id);
      setCurrentTopic(topic);
    } catch (error) {
      console.error("Failed to fetch topic:", error);
    }
  };

  return (
    <main className="flex-1 flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-4xl space-y-8">
        <Header />
        <TopicCard topic={currentTopic} />
        <RandomButton onClick={handleShowTopic} />
      </div>
    </main>
  );
}
