import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Mindful Journaling Exercise | Randy - Mindfulness Exercises",
    },
    {
      name: "description",
      content:
        "Learn the practice of Mindful Journaling with Randy. Discover how to process thoughts and emotions through daily reflective writing in this 10-15 minute mindfulness exercise.",
    },
    {
      name: "keywords",
      content:
        "mindful journaling, reflective writing, emotional processing, mindfulness practice, daily reflection, journaling exercise, mindfulness techniques, Randy app",
    },
    {
      property: "og:title",
      content: "Mindful Journaling Exercise | Randy - Mindfulness Exercises",
    },
    {
      property: "og:description",
      content:
        "Transform your self-awareness through Mindful Journaling. Learn how to use daily writing as a powerful tool for processing thoughts and emotions mindfully.",
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
          <h1>Mindful Journaling</h1>
          {/* <p className="post-meta">
						written by <a href="https://mitchie.netlify.app/" className="author">Michi</a>
						<time dateTime="2024-09-20 19:00">Sep. 20, 2024</time>
					</p> */}
        </header>
        <div className="post-content">
          <p>
            How: Set aside time each day to write about your thoughts and
            feelings without judgment. Reflect on your experiences, your
            emotions, or your mindfulness practice itself. Writing can help you
            process and release thoughts and emotions. Duration: 10-15 minutes.
          </p>
          {/* <aside className="pullquote float-left">
						<q>The paintwater cup has been spilled again. Moment of silence for the carpet.</q>
					</aside> */}
        </div>
      </article>
    </main>
  );
}
