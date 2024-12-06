import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    {
      title:
        "Mindful Listening Exercise | Randy - Your Personal Random Reminder App",
    },
    {
      name: "description",
      content:
        "Learn the art of mindful listening with Randy. This 5-10 minute exercise helps you develop deeper awareness through focused attention to sounds, music, and environmental audio.",
    },
    {
      name: "keywords",
      content:
        "mindful listening, sound awareness, mindfulness exercise, meditation practice, focused attention, mindful music, environmental sounds, Randy app exercises",
    },
    {
      property: "og:title",
      content:
        "Mindful Listening Exercise | Randy - Your Personal Random Reminder App",
    },
    {
      property: "og:description",
      content:
        "Enhance your mindfulness practice with Randy's guided listening exercise. Learn to observe sounds without judgment and develop deeper awareness in just 5-10 minutes.",
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
          <h1>Mindful Listening</h1>
          {/* <p className="post-meta">
						written by <a href="https://mitchie.netlify.app/" className="author">Michi</a>
						<time dateTime="2024-09-20 19:00">Sep. 20, 2024</time>
					</p> */}
        </header>
        <div className="post-content">
          <p>
            How: Listen to a piece of music or sounds in your environment with
            full attention. Notice the details—the pitch, tone, rhythm, and the
            spaces between the sounds. Avoid labeling or judging what you hear,
            simply observe it. Duration: 5-10 minutes.
          </p>
          {/* <aside className="pullquote float-left">
						<q>The paintwater cup has been spilled again. Moment of silence for the carpet.</q>
					</aside> */}
        </div>
      </article>
    </main>
  );
}
