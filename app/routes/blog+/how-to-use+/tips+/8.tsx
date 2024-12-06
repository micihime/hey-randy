import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Memory Training Tips | Randy - Your Personal Random Reminder App",
    },
    {
      name: "description",
      content:
        "Enhance your memory with Randy's random reminder system. Learn how to effectively use spaced repetition and active recall techniques to improve information retention and learning outcomes.",
    },
    {
      name: "keywords",
      content:
        "memory training, spaced repetition, active recall, memory improvement, learning techniques, memory exercises, Randy app, memory enhancement, study methods",
    },
    {
      property: "og:title",
      content:
        "Memory Training Tips | Randy - Your Personal Random Reminder App",
    },
    {
      property: "og:description",
      content:
        "Transform your learning process with Randy's memory training features. Use random reminders to strengthen recall and make information stick long-term.",
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
          <h1>Memory Training</h1>
          {/* <p className="post-meta">
						written by <a href="https://mitchie.netlify.app/" className="author">Michi</a>
						<time dateTime="2024-09-20 19:00">Sep. 20, 2024</time>
					</p> */}
        </header>
        <div className="post-content">
          <p>
            Send random reminders to recall certain information or test their
            memory on specific topics.
          </p>
          {/* <aside className="pullquote float-left">
						<q>The paintwater cup has been spilled again. Moment of silence for the carpet.</q>
					</aside> */}
        </div>
      </article>
    </main>
  );
}
