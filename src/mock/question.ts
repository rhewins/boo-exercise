import type { Question } from "@/types/question";
import type { Comment } from "@/types/comment";

export const mockQuestion: Question = {
  id: 33,
  author: "Anonymous",
  title: "What would you choose: a relationship full of adventures or a peaceful one?",
  date: "11/7/2025",
  stats: {
    totalLikes: 595,
    totalSouls: 4076,
  },
};

export const mockComment: Comment[] = [
  {
    id: 1,
    commentId: 33,
    author: "Phoebe",
    personality: ["INFJ", "Aquarius"],
    message: "A healthy relationship requires both adventure and peace.",
    date: "11/7/2025",
    stats: {
      totalLikes: 292,
      totalSouls: 19,
    },
  },
  {
    id: 2,
    commentId: 33,
    author: "Kostas",
    personality: ["ENFP", "Cancer"],
    message: "Y'all getting dates and relationships?!",
    date: "12/7/2025",
    stats: {
      totalLikes: 101,
      totalSouls: 19,
    },
  },
  {
    id: 3,
    commentId: 33,
    author: "Jill",
    personality: ["INFP", "Pisces"],
    message: "Full of adventures whatever that means... I think.",
    date: "15/7/2025",
    stats: {
      totalLikes: 66,
      totalSouls: 4,
    },
  },
];
