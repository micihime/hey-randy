import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    {
      title:
        "Gratitude Practice Tips | Randy - Your Personal Random Reminder App",
    },
    {
      name: "description",
      content:
        "Enhance your daily gratitude practice with Randy's random reminders. Learn how to cultivate appreciation and mindfulness through regular gratitude exercises throughout your day.",
    },
    {
      name: "keywords",
      content:
        "gratitude practice, mindfulness, daily gratitude, appreciation exercises, gratitude journaling, positive psychology, Randy app, mental wellbeing, happiness practices",
    },
    {
      property: "og:title",
      content:
        "Gratitude Practice Tips | Randy - Your Personal Random Reminder App",
    },
    {
      property: "og:description",
      content:
        "Transform your mindset with Randy's gratitude reminders. Develop a consistent gratitude practice that enhances your daily well-being and positive outlook.",
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
            Remind users to note down something they’re grateful for at random
            times.
          </p>
          {/* <aside className="pullquote float-left">
						<q>The paintwater cup has been spilled again. Moment of silence for the carpet.</q>
					</aside> */}
        </div>
      </article>
    </main>
  );
}
