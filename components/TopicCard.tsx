import { Topic } from "@/types/topic";

interface TopicCardProps {
  topic: Topic | null;
}

export default function TopicCard({ topic }: TopicCardProps) {
  if (!topic) {
    return (
      <div className="w-full max-w-2xl p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-2 border-gray-200 dark:border-gray-700">
        <p className="text-center text-gray-500 dark:text-gray-400 text-lg">
          ボタンをクリックして話題を表示
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-2 border-blue-500 dark:border-blue-400 animate-fade-in">
      <div className="mb-4">
        <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900 rounded-full">
          {topic.category}
        </span>
      </div>
      <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">
        {topic.content}
      </p>
    </div>
  );
}
