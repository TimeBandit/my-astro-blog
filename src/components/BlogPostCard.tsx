import React from "react";
// import { BlogPost } from '../data/blogPosts';

interface BlogPostCardProps {
  post: any;
  //BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  console.log({ post });
  return (
    <article className="border-4 border-brutalist-black p-6 brutalist-box-shadow bg-white hover:translate-y-1 hover:translate-x-1 hover:shadow-[3px_3px_0_#000] transition-all">
      <div className="mb-2">
        {post.frontmatter.tags.map((tag: string) => (
          <span
            key={tag}
            className="inline-block bg-brutalist-yellow border-2 border-brutalist-black px-2 py-1 text-sm mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
      <p className="text-sm mb-4">Published on {post.date}</p>
      <p className="mb-4">{post.excerpt}</p>

      <a
        href={`/blog/${post.slug}`}
        className="inline-block font-bold py-2 px-4 border-2 border-brutalist-black bg-brutalist-blue text-brutalist-black hover:bg-brutalist-pink transition-colors"
      >
        Read More →
      </a>
    </article>
  );
};

export default BlogPostCard;
