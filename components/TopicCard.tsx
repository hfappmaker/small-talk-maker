"use client";

import { useTranslations } from "next-intl";
import { Topic } from "@/types/topic";
import ShareButtons from "@/components/ShareButtons";

interface TopicCardProps {
  topic: Topic | null;
}

export default function TopicCard({ topic }: TopicCardProps) {
  const t = useTranslations('topicCard');

  if (!topic) {
    return (
      <div className="w-full p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-2 border-gray-200 dark:border-gray-700">
        <p className="text-center text-gray-500 dark:text-gray-400 text-lg">
          {t('emptyState')}
        </p>
      </div>
    );
  }

  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg border-2 border-blue-500 dark:border-blue-400 animate-fade-in">
      <div className="p-8">
        <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          {topic.content}
        </p>
      </div>
      <ShareButtons />
    </div>
  );
}
