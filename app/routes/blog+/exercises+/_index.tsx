import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    {
      title:
        "Mindfulness Exercises | Randy - Your Personal Random Reminder App",
    },
    {
      name: "description",
      content:
        "Discover a curated list of mindfulness exercises to enhance your daily life with Randy. Learn practical techniques for cultivating presence, awareness, and calm through regular practice.",
    },
    {
      name: "keywords",
      content:
        "mindfulness exercises, daily mindfulness, meditation practices, awareness techniques, mindful living, presence cultivation, mental wellness, mindfulness reminders, Randy app exercises",
    },
    {
      property: "og:title",
      content:
        "Mindfulness Exercises | Randy - Your Personal Random Reminder App",
    },
    {
      property: "og:description",
      content:
        "Transform your daily routine with Randy's mindfulness exercises. Build lasting habits for greater peace, focus, and well-being through regular practice.",
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
          <h1>List of exercises that you can use Randy for</h1>
          {/* <p className="post-meta">
						written by <a href="https://mitchie.netlify.app/" className="author">Michi</a>
						<time dateTime="2024-09-20 19:00">Sep. 20, 2024</time>
					</p> */}
        </header>
        <div className="post-content">
          <p>
            Here&apos;s a list of mindfulness exercises that you can practice to
            help cultivate presence, awareness, and calm in your daily life:
          </p>
          <p>
            Practicing these exercises regularly can help build mindfulness into
            your daily routine, fostering greater peace, focus, and well-being.
          </p>
          {/* <aside className="pullquote float-left">
						<q>The paintwater cup has been spilled again. Moment of silence for the carpet.</q>
					</aside> */}
        </div>
      </article>
    </main>
  );
}
