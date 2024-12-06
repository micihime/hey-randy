import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    {
      title:
        "Mindful Breathing Exercise | Randy - Your Personal Random Reminder App",
    },
    {
      name: "description",
      content:
        "Learn a simple 5-10 minute mindful breathing exercise to reduce stress and increase focus. Perfect for beginners and experienced practitioners alike.",
    },
    {
      name: "keywords",
      content:
        "mindful breathing, meditation, stress reduction, mindfulness exercise, breathing techniques, relaxation, mental health, wellness practice",
    },
    {
      property: "og:title",
      content:
        "Mindful Breathing Exercise | Randy - Your Personal Random Reminder App",
    },
    {
      property: "og:description",
      content:
        "Master the art of mindful breathing with this simple 5-10 minute guided exercise. Perfect for reducing stress and increasing mental clarity.",
    },
    { property: "og:type", content: "article" },
    {
      property: "og:image",
      content: "/img/mindful-breathing.png", // You'll need to add this image
    },
  ];
};

export default function Index() {
  return (
    <main>
      <article>
        <header className="post-header">
          <h1>Mindful Breathing</h1>
          {/* <p className="post-meta">
						written by <a href="https://mitchie.netlify.app/" className="author">Michi</a>
						<time dateTime="2024-09-20 19:00">Sep. 20, 2024</time>
					</p> */}
        </header>
        <div className="post-content">
          <p>
            How: Sit or lie down comfortably. Close your eyes and bring your
            attention to your breath. Notice the sensation of the breath as it
            enters and leaves your nostrils or feel your chest and abdomen
            rising and falling. If your mind wanders, gently bring it back to
            your breath. Duration: 5-10 minutes.
          </p>
          {/* <aside className="pullquote float-left">
						<q>The paintwater cup has been spilled again. Moment of silence for the carpet.</q>
					</aside> */}
        </div>
      </article>
    </main>
  );
}
