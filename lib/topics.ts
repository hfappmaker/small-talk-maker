import { Topic, TopicsData } from "@/types/topic";
import topicsData from "@/data/topics.json";

export function getAllTopics(): Topic[] {
  return topicsData.topics;
}

export function getCategories(): string[] {
  return topicsData.categories;
}

export function getRandomTopic(category?: string): Topic {
  let availableTopics = getAllTopics();

  if (category && category !== "全て") {
    availableTopics = availableTopics.filter(
      (topic) => topic.category === category
    );
  }

  if (availableTopics.length === 0) {
    throw new Error("利用可能な話題がありません");
  }

  const randomIndex = Math.floor(Math.random() * availableTopics.length);
  return availableTopics[randomIndex];
}

export function getTopicsByCategory(category: string): Topic[] {
  if (category === "全て") {
    return getAllTopics();
  }
  return getAllTopics().filter((topic) => topic.category === category);
}
