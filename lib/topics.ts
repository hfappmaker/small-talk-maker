import { Topic } from "@/types/topic";
import topicsData from "@/data/topics.json";

export function getAllTopics(): Topic[] {
  return topicsData.topics;
}

export function getRandomTopic(excludeTopicId?: number): Topic {
  let availableTopics = getAllTopics();

  // 前回のトピックを除外（利用可能なトピックが2つ以上ある場合のみ）
  if (excludeTopicId !== undefined && availableTopics.length > 1) {
    availableTopics = availableTopics.filter(
      (topic) => topic.id !== excludeTopicId
    );
  }

  const randomIndex = Math.floor(Math.random() * availableTopics.length);
  return availableTopics[randomIndex];
}
