import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    {
      title:
        "Stretching Reminder Tips | Randy - Your Personal Random Reminder App",
    },
    {
      name: "description",
      content:
        "Learn how to use Randy for regular stretching breaks throughout your day. Discover effective ways to maintain good posture, prevent stiffness, and stay active with random stretching reminders.",
    },
    {
      name: "keywords",
      content:
        "stretching reminders, desk exercises, posture improvement, workplace wellness, movement breaks, sedentary job tips, Randy app, healthy habits, office stretches",
    },
    {
      property: "og:title",
      content:
        "Stretching Reminder Tips | Randy - Your Personal Random Reminder App",
    },
    {
      property: "og:description",
      content:
        "Transform your workday with Randy's stretching reminders. Get prompted for regular movement breaks to stay active and maintain better posture.",
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
          <h1>Stretching Reminders</h1>
          {/* <p className="post-meta">
						written by <a href="https://mitchie.netlify.app/" className="author">Michi</a>
						<time dateTime="2024-09-20 19:00">Sep. 20, 2024</time>
					</p> */}
        </header>
        <div className="post-content">
          <p>
            Remind users to stand up, stretch, or do light exercises at random
            intervals, especially useful for those with sedentary jobs.
          </p>
          {/* <aside className="pullquote float-left">
						<q>The paintwater cup has been spilled again. Moment of silence for the carpet.</q>
					</aside> */}
        </div>
      </article>
    </main>
  );
}
