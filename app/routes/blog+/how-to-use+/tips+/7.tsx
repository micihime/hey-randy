import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Screen Break Tips | Randy - Your Personal Random Reminder App",
    },
    {
      name: "description",
      content:
        "Learn how to use Randy for healthy screen breaks. Discover effective strategies to prevent digital eye strain, improve productivity, and maintain better work-life balance with timed screen break reminders.",
    },
    {
      name: "keywords",
      content:
        "screen breaks, digital wellness, eye strain prevention, screen time management, productivity tips, work-life balance, healthy screen habits, Randy app tips",
    },
    {
      property: "og:title",
      content: "Screen Break Tips | Randy - Your Personal Random Reminder App",
    },
    {
      property: "og:description",
      content:
        "Transform your screen time habits with Randy's smart reminder system. Get practical tips for implementing regular screen breaks to protect your eyes and boost productivity.",
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
          <h1>Screen Breaks</h1>
          {/* <p className="post-meta">
						written by <a href="https://mitchie.netlify.app/" className="author">Michi</a>
						<time dateTime="2024-09-20 19:00">Sep. 20, 2024</time>
					</p> */}
        </header>
        <div className="post-content">
          <p>
            Remind users to take a break from screens to prevent digital eye
            strain and improve wellbeing.
          </p>
          {/* <aside className="pullquote float-left">
						<q>The paintwater cup has been spilled again. Moment of silence for the carpet.</q>
					</aside> */}
        </div>
      </article>
    </main>
  );
}
