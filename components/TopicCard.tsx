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
      <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">
        {topic.content}
      </p>
    </div>
  );
}
