export const percentagePromiseCount = (
  completedCount: number,
  totalCount: number
) => {
  if (!completedCount) {
    return 0;
  }
  return Math.round((completedCount / totalCount) * 100);
};
