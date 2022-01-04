export const sortByDate = (a: any, b: any) => {
  const dateA = new Date(a.frontmatter.date);
  const dateB = new Date(b.frontmatter.date);
  return dateA.valueOf() - dateB.valueOf();
};
