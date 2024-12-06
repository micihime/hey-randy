import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    { title: "Mindful Eating Exercise | Randy's Mindfulness Blog" },
    {
      name: "description",
      content:
        "Learn a simple 5-10 minute mindful eating exercise using everyday foods like raisins or chocolate. Discover how to enhance your eating experience through mindfulness techniques.",
    },
    {
      name: "keywords",
      content:
        "mindful eating, mindfulness exercise, meditation with food, mindfulness practice, eating meditation, mindful eating technique",
    },
    {
      property: "og:title",
      content: "Mindful Eating Exercise | Randy's Mindfulness Blog",
    },
    {
      property: "og:description",
      content:
        "Transform your relationship with food through this simple mindful eating exercise. Perfect for beginners looking to practice mindfulness in daily life.",
    },
    { property: "og:type", content: "article" },
    {
      property: "article:published_time",
      content: "2024-09-20T19:00:00Z",
    },
  ];
};

export default function Index() {
  return (
    <main>
      <article>
        <header className="post-header">
          <h1>Mindful Eating</h1>
          {/* <p className="post-meta">
						written by <a href="https://mitchie.netlify.app/" className="author">Michi</a>
						<time dateTime="2024-09-20 19:00">Sep. 20, 2024</time>
					</p> */}
        </header>
        <div className="post-content">
          <p>
            How: Choose a small piece of food, like a raisin or a piece of
            chocolate. Observe its appearance, smell, and texture before eating
            it. Take a small bite and chew slowly, noticing the flavors and
            sensations in your mouth. Eat without distractions. Duration: 5-10
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
