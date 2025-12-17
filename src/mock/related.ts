import type { Question } from "@/types/question";

export const mockRelatedQuestion: Question[] = [
  {
    id: 1,
    author: "Andy",
    title: "What's a topic you could talk about for hours?",
    date: "12/16/2025",
    stats: {
      totalLikes: 410,
      totalSouls: 4267,
    },
  },
  {
    id: 2,
    author: "Bryan",
    title: "If you wrote a memoir, what would the title be?",
    date: "6/2/2025",
    stats: {
      totalLikes: 14,
      totalSouls: 131,
    },
  },
  {
    id: 3,
    author: "Charlie",
    title: "Do you prefer sunrise or sunset, and why?",
    date: "4/21/2025",
    stats: {
      totalLikes: 420,
      totalSouls: 3766,
    },
  },
];
