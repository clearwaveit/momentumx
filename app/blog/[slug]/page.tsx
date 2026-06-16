import { notFound } from "next/navigation";
import { PageHero, SiteFooter, SiteHeader } from "../../site-components";
import { blogDetailBlocks, blogDetailMedia, posts } from "../../site-data";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug) ?? posts[0];

  if (!post) {
    notFound();
  }

  return (
    <main>
      <SiteHeader />
      <PageHero eyebrow={post.date} title={post.title} summary={post.summary} />
      <article className="articleBody sectionPad">
        <img src={post.image} alt="" />
        <h3>A note from MomentumX</h3>
        <p>
          Digital work becomes useful when strategy, brand understanding, design, technology, and
          delivery move together. These notes explore how brands can turn ideas into platforms,
          products, and customer experiences that create growth.
        </p>
        {blogDetailBlocks.map((block) => (
          <section key={block.title}>
            <h2>{block.title}</h2>
            <p>{block.body}</p>
          </section>
        ))}
        <div className="articleMediaGrid">
          {blogDetailMedia.map((image) => (
            <img src={image} alt="" key={image} />
          ))}
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
