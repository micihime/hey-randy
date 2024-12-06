import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    {
      title:
        "Mindful Coloring Exercise | Randy - Your Personal Random Reminder App",
    },
    {
      name: "description",
      content:
        "Learn the art of mindful coloring as a relaxation technique. Discover how focusing on colors, hand movements, and patterns can help you achieve mental clarity and reduce stress in just 10-15 minutes.",
    },
    {
      name: "keywords",
      content:
        "mindful coloring, mindfulness exercise, stress relief, meditation through art, coloring therapy, mindful creativity, relaxation techniques, Randy app exercises",
    },
    {
      property: "og:title",
      content:
        "Mindful Coloring Exercise | Randy - Your Personal Random Reminder App",
    },
    {
      property: "og:description",
      content:
        "Transform your stress into calm through mindful coloring. A simple yet powerful 10-15 minute exercise combining creativity with mindfulness practice.",
    },
    { property: "og:type", content: "article" },
    {
      property: "og:image",
      content: "/img/screenshot-notification-detail.png",
    },
  ];
};

export default function Index() {
  return (
    <main>
      <article>
        <header className="post-header">
          <h1>Mindful Coloring</h1>
          {/* <p className="post-meta">
						written by <a href="https://mitchie.netlify.app/" className="author">Michi</a>
						<time dateTime="2024-09-20 19:00">Sep. 20, 2024</time>
					</p> */}
        </header>
        <div className="post-content">
          <p>
            How: Use a coloring book or draw patterns on a blank piece of paper.
            Focus on the colors, the movement of your hand, and the designs you
            create. Let your mind rest in the simple act of coloring. Duration:
            10-15 minutes.
          </p>
          {/* <aside className="pullquote float-left">
						<q>The paintwater cup has been spilled again. Moment of silence for the carpet.</q>
					</aside> */}
        </div>
      </article>
    </main>
  );
}
