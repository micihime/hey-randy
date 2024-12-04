import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    {
      title:
        "Mindful Reflection Exercise | Randy - Your Personal Random Reminder App",
    },
    {
      name: "description",
      content:
        "Learn how to practice mindful reflection with Randy. This 5-10 minute end-of-day exercise helps you develop deeper awareness by reviewing moments of presence and distraction in your daily life.",
    },
    {
      name: "keywords",
      content:
        "mindful reflection, daily mindfulness practice, evening reflection, mindfulness exercise, self-awareness, mindful living, Randy app, mindfulness tips",
    },
    {
      property: "og:title",
      content:
        "Mindful Reflection Exercise | Randy - Your Personal Random Reminder App",
    },
    {
      property: "og:description",
      content:
        "Enhance your mindfulness practice with Randy's guided evening reflection exercise. Build self-awareness and track your mindfulness journey in just 5-10 minutes per day.",
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
          <h1>Mindful Reflection</h1>
          {/* <p className="post-meta">
						written by <a href="https://mitchie.netlify.app/" className="author">Michi</a>
						<time dateTime="2024-09-20 19:00">Sep. 20, 2024</time>
					</p> */}
        </header>
        <div className="post-content">
          <p>
            How: At the end of the day, spend a few minutes reflecting on how
            mindfulness played a role in your day. Were there moments you felt
            present? Moments you were distracted? This can deepen your awareness
            over time. Duration: 5-10 minutes.
          </p>
          {/* <aside className="pullquote float-left">
						<q>The paintwater cup has been spilled again. Moment of silence for the carpet.</q>
					</aside> */}
        </div>
      </article>
    </main>
  );
}
