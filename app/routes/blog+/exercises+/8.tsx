import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    {
      title: "5-4-3-2-1 Grounding Exercise | Randy - Mindfulness Exercises",
    },
    {
      name: "description",
      content:
        "Learn the powerful 5-4-3-2-1 grounding technique for anxiety and stress relief. This 5-minute mindfulness exercise helps you stay present by engaging all five senses.",
    },
    {
      name: "keywords",
      content:
        "5-4-3-2-1 technique, grounding exercise, mindfulness practice, anxiety relief, stress management, sensory awareness, present moment, Randy app",
    },
    {
      property: "og:title",
      content: "5-4-3-2-1 Grounding Exercise | Randy - Mindfulness Exercises",
    },
    {
      property: "og:description",
      content:
        "Master the 5-4-3-2-1 grounding method to quickly reduce anxiety and reconnect with the present moment through your five senses.",
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
          <h1>5-4-3-2-1 Grounding Exercise</h1>
          {/* <p className="post-meta">
						written by <a href="https://mitchie.netlify.app/" className="author">Michi</a>
						<time dateTime="2024-09-20 19:00">Sep. 20, 2024</time>
					</p> */}
        </header>
        <div className="post-content">
          <p>
            How: Identify 5 things you can see, 4 things you can touch, 3 things
            you can hear, 2 things you can smell, and 1 thing you can taste.
            This exercise helps to ground you in the present moment. Duration: 5
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
