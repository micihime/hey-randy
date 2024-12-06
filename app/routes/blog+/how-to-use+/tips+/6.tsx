import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    {
      title:
        "Random Acts of Kindness Tips | Randy - Your Personal Random Reminder App",
    },
    {
      name: "description",
      content:
        "Learn how to use Randy to cultivate kindness in your daily life. Get inspired with random reminders for thoughtful actions, messages, and ways to help others.",
    },
    {
      name: "keywords",
      content:
        "random acts of kindness, kindness reminders, thoughtful actions, daily kindness, helping others, Randy app, kindness prompts, positive habits, compassion practice",
    },
    {
      property: "og:title",
      content:
        "Random Acts of Kindness Tips | Randy - Your Personal Random Reminder App",
    },
    {
      property: "og:description",
      content:
        "Transform your daily routine with Randy's kindness reminders. Get prompted for thoughtful actions and create a positive impact in your community.",
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
          <h1>Random Acts of Kindness</h1>
          {/* <p className="post-meta">
						written by <a href="https://mitchie.netlify.app/" className="author">Michi</a>
						<time dateTime="2024-09-20 19:00">Sep. 20, 2024</time>
					</p> */}
        </header>
        <div className="post-content">
          <p>
            Prompt users to perform a kind action, like sending a thoughtful
            message to a friend or helping someone out.
          </p>
          {/* <aside className="pullquote float-left">
						<q>The paintwater cup has been spilled again. Moment of silence for the carpet.</q>
					</aside> */}
        </div>
      </article>
    </main>
  );
}
