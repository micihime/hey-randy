import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Posture Check Tips | Randy - Your Personal Random Reminder App",
    },
    {
      name: "description",
      content:
        "Learn how to improve your posture with Randy's random reminders. Get timely alerts to sit up straight, adjust your seating, and maintain proper ergonomics throughout your day.",
    },
    {
      name: "keywords",
      content:
        "posture improvement, ergonomic reminders, sitting posture, desk ergonomics, healthy posture habits, posture correction, workplace wellness, Randy app tips",
    },
    {
      property: "og:title",
      content: "Posture Check Tips | Randy - Your Personal Random Reminder App",
    },
    {
      property: "og:description",
      content:
        "Transform your posture habits with Randy's reminder system. Get gentle nudges to maintain proper posture and create a healthier workspace environment.",
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
          <h1>Posture Check</h1>
          {/* <p className="post-meta">
						written by <a href="https://mitchie.netlify.app/" className="author">Michi</a>
						<time dateTime="2024-09-20 19:00">Sep. 20, 2024</time>
					</p> */}
        </header>
        <div className="post-content">
          <p>
            Encourage better posture by reminding users to sit up straight or
            adjust their seating.
          </p>
          {/* <aside className="pullquote float-left">
						<q>The paintwater cup has been spilled again. Moment of silence for the carpet.</q>
					</aside> */}
        </div>
      </article>
    </main>
  );
}
