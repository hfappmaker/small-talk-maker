"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Topic } from "@/types/topic";

interface TopicContextValue {
  currentTopic: Topic | null;
  setCurrentTopic: (topic: Topic | null) => void;
}

const TopicContext = createContext<TopicContextValue | undefined>(undefined);

export function TopicProvider({ children }: { children: ReactNode }) {
  const [currentTopic, setCurrentTopic] = useState<Topic | null>(null);

  return (
    <TopicContext.Provider value={{ currentTopic, setCurrentTopic }}>
      {children}
    </TopicContext.Provider>
  );
}

export function useTopicContext() {
  const context = useContext(TopicContext);
  if (context === undefined) {
    throw new Error("useTopicContext must be used within a TopicProvider");
  }
  return context;
}
