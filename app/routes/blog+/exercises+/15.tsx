import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    {
      title:
        "Mindful Technology Use Exercise | Randy - Your Personal Random Reminder App",
    },
    {
      name: "description",
      content:
        "Learn how to practice mindful technology use with Randy. Discover techniques for intentional device usage, maintaining good posture, and taking mindful breaks to enhance your digital wellness.",
    },
    {
      name: "keywords",
      content:
        "mindful technology use, digital wellness, mindful computing, healthy tech habits, screen time awareness, mindfulness exercise, Randy app, digital mindfulness",
    },
    {
      property: "og:title",
      content:
        "Mindful Technology Use Exercise | Randy - Your Personal Random Reminder App",
    },
    {
      property: "og:description",
      content:
        "Transform your relationship with technology through mindful usage practices. Learn practical techniques for more conscious and balanced digital engagement.",
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
          <h1>Mindful Technology Use</h1>
          {/* <p className="post-meta">
						written by <a href="https://mitchie.netlify.app/" className="author">Michi</a>
						<time dateTime="2024-09-20 19:00">Sep. 20, 2024</time>
					</p> */}
        </header>
        <div className="post-content">
          <p>
            How: Before engaging with your phone or computer, take a deep breath
            and set an intention for how you want to use the device. Check in
            with your feelings and posture as you use it, and take regular
            breaks to reconnect with the physical world. Duration: Variable,
            depends on usage.
          </p>
          {/* <aside className="pullquote float-left">
						<q>The paintwater cup has been spilled again. Moment of silence for the carpet.</q>
					</aside> */}
        </div>
      </article>
    </main>
  );
}
