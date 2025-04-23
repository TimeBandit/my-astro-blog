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

// Currently for Blog and CaseStudy posts
export interface PostCardProps {
  slug: string;
  content: any;
  frontmatter: {
    title: string;
    date: string;
    description: string;
    tags: string[];
  };
}
