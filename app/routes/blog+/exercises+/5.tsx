import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Loving-Kindness Meditation | Randy - Mindfulness Exercises",
    },
    {
      name: "description",
      content:
        "Learn the practice of Loving-Kindness Meditation with Randy. Discover how to cultivate compassion, self-love, and positive emotions through this powerful mindfulness exercise.",
    },
    {
      name: "keywords",
      content:
        "loving-kindness meditation, metta meditation, self-compassion, mindfulness practice, meditation guide, emotional wellness, mindful exercises, Randy app",
    },
    {
      property: "og:title",
      content: "Loving-Kindness Meditation | Randy - Mindfulness Exercises",
    },
    {
      property: "og:description",
      content:
        "Transform your emotional well-being with Loving-Kindness Meditation. Learn step-by-step how to practice this powerful technique for cultivating universal compassion and inner peace.",
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
          <h1>Loving-Kindness Meditation</h1>
          {/* <p className="post-meta">
						written by <a href="https://mitchie.netlify.app/" className="author">Michi</a>
						<time dateTime="2024-09-20 19:00">Sep. 20, 2024</time>
					</p> */}
        </header>
        <div className="post-content">
          <p>
            How: Sit comfortably and close your eyes. Begin by directing
            loving-kindness towards yourself. Silently repeat phrases like, “May
            I be happy, may I be healthy, may I be safe, may I live with ease.”
            Gradually extend these wishes to others—first to loved ones, then to
            neutral people, and finally to those you may have conflicts with.
            Duration: 10-20 minutes.
          </p>
          {/* <aside className="pullquote float-left">
						<q>The paintwater cup has been spilled again. Moment of silence for the carpet.</q>
					</aside> */}
        </div>
      </article>
    </main>
  );
}
