import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    { title: "Body Scan Exercise | Randy Mindfulness Exercises" },
    {
      name: "description",
      content:
        "Learn the Body Scan meditation technique - a guided mindfulness exercise to reduce stress and increase body awareness. Perfect for beginners and experienced practitioners.",
    },
    {
      name: "keywords",
      content:
        "body scan meditation, mindfulness exercise, stress reduction, relaxation technique, meditation for beginners, body awareness practice",
    },
    {
      property: "og:title",
      content: "Body Scan Exercise | Randy Mindfulness Exercises",
    },
    {
      property: "og:description",
      content:
        "Discover how to perform a Body Scan meditation - a powerful mindfulness technique for stress relief and enhanced body awareness. Step-by-step guide included.",
    },
    { property: "og:type", content: "article" },
    {
      property: "og:image",
      content: "/img/body-scan-exercise.png", // Make sure to add a relevant image
    },
    { name: "twitter:card", content: "summary_large_image" },
  ];
};

export default function Index() {
  return (
    <main>
      <article>
        <header className="post-header">
          <h1>Body Scan</h1>
          {/* <p className="post-meta">
						written by <a href="https://mitchie.netlify.app/" className="author">Michi</a>
						<time dateTime="2024-09-20 19:00">Sep. 20, 2024</time>
					</p> */}
        </header>
        <div className="post-content">
          <p>
            How: Lie down on your back with your arms at your sides. Starting
            from your toes, gradually move your attention up through your body,
            paying attention to each part. Notice any sensations, tension, or
            relaxation. Breathe into each area as you focus on it. Duration:
            10-20 minutes.
          </p>
          {/* <aside className="pullquote float-left">
						<q>The paintwater cup has been spilled again. Moment of silence for the carpet.</q>
					</aside> */}
        </div>
      </article>
    </main>
  );
}
