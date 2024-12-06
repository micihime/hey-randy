import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    {
      title:
        "Mindful Noticing Exercise | Randy - Your Personal Random Reminder App",
    },
    {
      name: "description",
      content:
        "Learn the simple yet powerful practice of mindful noticing. Discover how to pause throughout your day to fully experience and appreciate present moments in 1-3 minute intervals.",
    },
    {
      name: "keywords",
      content:
        "mindful noticing, present moment awareness, mindfulness practice, mindful pauses, sensory awareness, daily mindfulness, quick meditation, mindfulness exercise",
    },
    {
      property: "og:title",
      content:
        "Mindful Noticing Exercise | Randy - Your Personal Random Reminder App",
    },
    {
      property: "og:description",
      content:
        "Master the art of mindful noticing with simple 1-3 minute pauses throughout your day. Perfect for developing present moment awareness and appreciation.",
    },
    { property: "og:type", content: "article" },
    {
      property: "og:image",
      content: "/img/mindful-noticing.png", // You'll need to add this image
    },
  ];
};

export default function Index() {
  return (
    <main>
      <article>
        <header className="post-header">
          <h1>Mindful Noticing</h1>
          {/* <p className="post-meta">
						written by <a href="https://mitchie.netlify.app/" className="author">Michi</a>
						<time dateTime="2024-09-20 19:00">Sep. 20, 2024</time>
					</p> */}
        </header>
        <div className="post-content">
          <p>
            How: Throughout your day, pause and notice what&apos;s happening in
            the present moment. This could be the sound of birds, the feeling of
            the breeze on your skin, or the taste of your food. Take a few
            moments to fully experience and appreciate it. Duration: 1-3 minutes
            per pause.
          </p>
          {/* <aside className="pullquote float-left">
						<q>The paintwater cup has been spilled again. Moment of silence for the carpet.</q>
					</aside> */}
        </div>
      </article>
    </main>
  );
}
