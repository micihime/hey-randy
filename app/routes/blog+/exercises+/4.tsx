import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    {
      title:
        "Walking Meditation Exercise | Randy - Your Personal Random Reminder App",
    },
    {
      name: "description",
      content:
        "Learn how to practice walking meditation in 10-15 minutes. Discover techniques for mindful walking, focusing on breath and movement to enhance your daily mindfulness practice.",
    },
    {
      name: "keywords",
      content:
        "walking meditation, mindful walking, meditation practice, mindfulness exercise, walking techniques, mindful movement, meditation for beginners, stress reduction",
    },
    {
      property: "og:title",
      content:
        "Walking Meditation Exercise | Randy - Your Personal Random Reminder App",
    },
    {
      property: "og:description",
      content:
        "Transform your daily walks into meditation sessions. Learn simple techniques for mindful walking to reduce stress and increase present-moment awareness.",
    },
    { property: "og:type", content: "article" },
    {
      property: "og:image",
      content: "/img/walking-meditation.png", // Add this image to your assets
    },
  ];
};

export default function Index() {
  return (
    <main>
      <article>
        <header className="post-header">
          <h1>Walking Meditation</h1>
          {/* <p className="post-meta">
						written by <a href="https://mitchie.netlify.app/" className="author">Michi</a>
						<time dateTime="2024-09-20 19:00">Sep. 20, 2024</time>
					</p> */}
        </header>
        <div className="post-content">
          <p>
            How: Find a quiet place to walk slowly and intentionally. Focus on
            the sensations of your feet touching the ground, the movement of
            your legs, and the rhythm of your breathing. Be aware of your
            surroundings without getting distracted by them. Duration: 10-15
            minutes.
          </p>
          {/* <aside className="pullquote float-left">
						<q>The paintwater cup has been spilled again. Moment of silence for the carpet.</q>
					</aside> */}
        </div>
      </article>
    </main>
  );
}
