// import { blogPosts } from '../data/blogPosts';
import type { RenderableTreeNode } from "@markdoc/markdoc";
import BlogPostCard from "../components/BlogPostCard";
import Footer from "../components/Footer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Blog = ({
  sortedPosts,
}: {
  sortedPosts: {
    slug: string;
    content: RenderableTreeNode;
    frontmatter: any;
  }[];
}) => {
  useScrollAnimation();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-brutalist-blue py-10 mb-12">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-brutalist brutalist-text-shadow uppercase">
            Blog
          </h1>
          <p className="text-2xl mt-4 max-w-2xl">
            Insights, tutorials, and case studies from Pink Llama Software.
          </p>
        </div>
      </div>

      <main className="flex-grow max-w-6xl mx-auto px-6">
        <section className="brutalist-section reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sortedPosts.map((post, index) => (
              <div key={index} className="reveal">
                <BlogPostCard post={post} />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
