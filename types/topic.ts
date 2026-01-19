export interface Topic {
  id: number;
  content: string;
  category: string;
}

export interface TopicsData {
  topics: Topic[];
  categories: string[];
}
