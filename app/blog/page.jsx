import BlogSection from "../../app/Components/BlogSection/BlogSection";
import "../../app/Components/BlogSection/BlogSection.css";
export const metadata = {
  title: "Blog",
  description:
    "Thinking on brand strategy, identity, and what it takes to build something the premium automotive world actually respects.",
  openGraph: {
    title: "Blog — Gold Bay",
    description:
      "Brand strategy and industry insight from the only studio built exclusively for the premium automotive world.",
    url: "https://goldbay.studio/blog",
  },
};

export default function BlogPage() {
  return (
    <div>
      <BlogSection h1={true} heading="From the Blog" sectionLabel="From the Blog" />
    </div>
  );
}
