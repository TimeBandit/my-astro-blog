export interface BlogPostCardProps {
  slug: string;
  content: any;
  frontmatter: {
    title: string;
    date: string;
    description: string;
    tags: string[];
  };
}
