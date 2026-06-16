import { PageHero, SiteFooter, SiteHeader } from "../site-components";
import { posts } from "../site-data";

export default function BlogPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="news"
        title="digital insights & agency thinking"
        summary="Articles, announcements, and perspectives on digital growth, platforms, user experience, AI, content, and regional brand understanding."
      />
      <section className="newsGrid sectionPad">
        {posts.map((post) => (
          <a className="newsCard" href={`/blog/${post.slug}`} key={post.slug}>
            <img src={post.image} alt="" />
            <span>{post.date}</span>
            <h2>{post.title}</h2>
            <p>{post.summary}</p>
          </a>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
