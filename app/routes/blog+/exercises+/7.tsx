import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    {
      title:
        "Mindful Observation Exercise | Randy - Your Personal Random Reminder App",
    },
    {
      name: "description",
      content:
        "Learn the practice of mindful observation with Randy. Discover how to enhance your awareness and presence through focused attention on objects in your environment. Perfect for developing deeper concentration.",
    },
    {
      name: "keywords",
      content:
        "mindful observation, mindfulness practice, focused attention, awareness exercises, concentration training, mindful seeing, present moment awareness, Randy app exercises",
    },
    {
      property: "og:title",
      content:
        "Mindful Observation Exercise | Randy - Your Personal Random Reminder App",
    },
    {
      property: "og:description",
      content:
        "Transform your awareness through mindful observation. Learn how to cultivate deeper presence and concentration by mindfully observing objects in your environment.",
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
          <h1>Mindful Observation</h1>
          {/* <p className="post-meta">
						written by <a href="https://mitchie.netlify.app/" className="author">Michi</a>
						<time dateTime="2024-09-20 19:00">Sep. 20, 2024</time>
					</p> */}
        </header>
        <div className="post-content">
          <p>
            How: Choose an object within your environment—a flower, a candle, or
            a painting. Focus your attention on it for a few minutes. Observe
            every detail, such as its shape, color, texture, and any emotions or
            thoughts that arise as you observe. Duration: 5 minutes.
          </p>
          {/* <aside className="pullquote float-left">
						<q>The paintwater cup has been spilled again. Moment of silence for the carpet.</q>
					</aside> */}
        </div>
      </article>
    </main>
  );
}
