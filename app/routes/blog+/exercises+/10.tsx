import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Gratitude Practice | Randy - Mindfulness Exercises",
    },
    {
      name: "description",
      content: "Learn how to develop a daily gratitude practice with Randy. Discover the transformative power of acknowledging and appreciating life's moments, big and small.",
    },
    {
      name: "keywords",
      content: "gratitude practice, daily gratitude, mindfulness exercise, appreciation, positive psychology, mindful living, gratitude journal, Randy app, mindfulness practice",
    },
    {
      property: "og:title",
      content: "Gratitude Practice | Randy - Mindfulness Exercises",
    },
    {
      property: "og:description",
      content: "Transform your mindset through daily gratitude practice. Learn simple techniques to cultivate appreciation and joy in your everyday life with Randy's mindful reminders.",
    },
    {
      property: "og:type",
      content: "article",
    },
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
          <h1>Gratitude Practice</h1>
          {/* <p className="post-meta">
						written by <a href="https://mitchie.netlify.app/" className="author">Michi</a>
						<time dateTime="2024-09-20 19:00">Sep. 20, 2024</time>
					</p> */}
        </header>
        <div className="post-content">
          <p>
            How: At the end of each day, write down three things you are
            grateful for. They can be big or small, anything that brought a
            sense of joy or comfort to your day. Reflect on each one, and feel
            the gratitude as you write. Duration: 5-10 minutes.
          </p>
          {/* <aside className="pullquote float-left">
						<q>The paintwater cup has been spilled again. Moment of silence for the carpet.</q>
					</aside> */}
        </div>
      </article>
    </main>
  );
}
