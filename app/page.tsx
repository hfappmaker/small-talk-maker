"use client";

import { useState } from "react";
import Header from "@/components/Header";
import TopicCard from "@/components/TopicCard";
import CategoryFilter from "@/components/CategoryFilter";
import RandomButton from "@/components/RandomButton";
import AdSense from "@/components/AdSense";
import { getCategories, getRandomTopic } from "@/lib/topics";
import { Topic } from "@/types/topic";

export default function Home() {
  const [currentTopic, setCurrentTopic] = useState<Topic | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("全て");

  const categories = getCategories();

  const handleRandomClick = () => {
    try {
      const topic = getRandomTopic(
        selectedCategory === "全て" ? undefined : selectedCategory
      );
      setCurrentTopic(topic);
    } catch (error) {
      console.error("話題の取得に失敗しました:", error);
    }
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentTopic(null);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <Header />

      <div className="flex flex-col items-center gap-6 mt-8 w-full max-w-4xl flex-grow">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />

        <RandomButton onClick={handleRandomClick} />

        <TopicCard topic={currentTopic} />
      </div>

      {/* ページ下部の広告 */}
      <div className="w-full max-w-4xl mt-auto pt-8 pb-4">
        <AdSense
          adSlot="XXXXXXXXXX"
          adFormat="auto"
          fullWidthResponsive={true}
          className="w-full"
        />
      </div>
    </main>
  );
}
