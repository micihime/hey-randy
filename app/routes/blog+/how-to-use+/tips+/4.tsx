import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    {
      title:
        "Breathing Exercises Tips | Randy - Your Personal Random Reminder App",
    },
    {
      name: "description",
      content:
        "Learn effective breathing exercises with Randy's random reminders. Discover techniques to reduce stress, improve focus, and enhance your mindfulness practice throughout the day.",
    },
    {
      name: "keywords",
      content:
        "breathing exercises, stress reduction, mindful breathing, focus improvement, relaxation techniques, meditation practice, Randy app, wellness reminders, breathing tips",
    },
    {
      property: "og:title",
      content:
        "Breathing Exercises Tips | Randy - Your Personal Random Reminder App",
    },
    {
      property: "og:description",
      content:
        "Transform your daily wellness routine with Randy's breathing exercise reminders. Practice stress-reducing techniques at random intervals for better mental clarity and calm.",
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
          <h1>Breathing Exercises</h1>
          {/* <p className="post-meta">
						written by <a href="https://mitchie.netlify.app/" className="author">Michi</a>
						<time dateTime="2024-09-20 19:00">Sep. 20, 2024</time>
					</p> */}
        </header>
        <div className="post-content">
          <p>
            Prompt users to do breathing exercises to reduce stress and improve
            focus.
          </p>
          {/* <aside className="pullquote float-left">
						<q>The paintwater cup has been spilled again. Moment of silence for the carpet.</q>
					</aside> */}
        </div>
      </article>
    </main>
  );
}
