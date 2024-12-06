import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    {
      title:
        "Mindful Stretching Exercise | Randy - Your Personal Random Reminder App",
    },
    {
      name: "description",
      content:
        "Learn the practice of mindful stretching with Randy. Discover how to combine gentle stretching exercises with breath awareness for improved flexibility and mental clarity. Perfect for daily wellness routines.",
    },
    {
      name: "keywords",
      content:
        "mindful stretching, yoga stretches, breathing exercises, mindfulness practice, body awareness, flexibility training, mindful movement, wellness routine, Randy app exercises",
    },
    {
      property: "og:title",
      content:
        "Mindful Stretching Exercise | Randy - Your Personal Random Reminder App",
    },
    {
      property: "og:description",
      content:
        "Transform your stretching routine with mindfulness. Follow Randy's guide to combine gentle stretching with breath awareness for a more centered, flexible you.",
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
          <h1>Mindful Stretching</h1>
          {/* <p className="post-meta">
						written by <a href="https://mitchie.netlify.app/" className="author">Michi</a>
						<time dateTime="2024-09-20 19:00">Sep. 20, 2024</time>
					</p> */}
        </header>
        <div className="post-content">
          <p>
            How: Practice gentle stretching exercises, such as yoga or simple
            stretching routines. Focus on the sensations in your muscles and
            joints as you stretch, and connect with your breath. Duration: 10-20
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
