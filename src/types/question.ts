export type Question = {
  id: number,
  author: string;
  title: string;
  date: string;
  stats?: {
    totalLikes: number;
    totalSouls: number;
  };
};
