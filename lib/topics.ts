import { Topic } from "@/types/topic";

export async function getAllTopics(locale: string): Promise<Topic[]> {
  const topicsData = await import(`@/data/topics/${locale}.json`);
  return topicsData.topics;
}

export async function getRandomTopic(locale: string, excludeTopicId?: number): Promise<Topic> {
  const availableTopicsAll = await getAllTopics(locale);
  let availableTopics = availableTopicsAll;

  if (excludeTopicId !== undefined && availableTopics.length > 1) {
    availableTopics = availableTopics.filter(
      (topic) => topic.id !== excludeTopicId
    );
  }

  const randomIndex = Math.floor(Math.random() * availableTopics.length);
  return availableTopics[randomIndex];
}
