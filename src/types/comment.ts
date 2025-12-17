export type Comment = {
  id: number,
  commentId: number,
  author: string;
  personality: string[];
  message: string;
  date: string;
  stats?: {
    totalLikes: number;
    totalSouls: number;
  };
};
