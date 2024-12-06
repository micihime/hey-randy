import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Using Affirmations with Randy | Daily Positive Reminders",
    },
    {
      name: "description",
      content:
        "Learn how to use Randy for daily positive affirmations and self-care reminders. Transform your mindset with randomly timed motivational messages throughout your day.",
    },
    {
      name: "keywords",
      content:
        "positive affirmations, self-care reminders, daily motivation, positive mindset, random affirmations, personal development, Randy app, mood improvement, mental wellness",
    },
    {
      property: "og:title",
      content: "Using Affirmations with Randy | Daily Positive Reminders",
    },
    {
      property: "og:description",
      content:
        "Boost your mood and mindset with Randy's random affirmation reminders. Discover how to integrate positive self-talk into your daily routine.",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:image",
      content: "/img/screenshot-notification-detail.png",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
  ];
};

export default function Index() {
  return (
    <main>
      <article>
        <header className="post-header">
          <h1>Affirmations</h1>
          {/* <p className="post-meta">
						written by <a href="https://mitchie.netlify.app/" className="author">Michi</a>
						<time dateTime="2024-09-20 19:00">Sep. 20, 2024</time>
					</p> */}
        </header>
        <div className="post-content">
          <p>
            Send random positive affirmations or self-care reminders to uplift
            the user&apos;s mood.
          </p>
          {/* <aside className="pullquote float-left">
						<q>The paintwater cup has been spilled again. Moment of silence for the carpet.</q>
					</aside> */}
        </div>
      </article>
    </main>
  );
}
