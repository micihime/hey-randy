import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    { title: "How Randy Works | Your Personal Random Reminder App" },
    {
      name: "description",
      content:
        "Learn how Randy helps you stay mindful with random reminders. Set custom notifications, choose your preferred time ranges, and receive timely reminders throughout your day.",
    },
    {
      name: "keywords",
      content:
        "random reminders, notification app, mindfulness app, time management, productivity tool",
    },
    {
      property: "og:title",
      content: "How Randy Works | Your Personal Random Reminder App",
    },
    {
      property: "og:description",
      content:
        "Learn how Randy helps you stay mindful with random reminders. Set custom notifications, choose your preferred time ranges, and receive timely reminders throughout your day.",
    },
    { property: "og:type", content: "website" },
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
        <h1>How Randy Works</h1>
        <section className="features">
          <ol>
            <li>
              <h2>Set Your Reminder</h2>
              <p>
                Create a personalized reminder by naming it, adding a short
                summary, and writing a description.
              </p>
            </li>
            <li>
              Choose Your Time Range: Decide when you&apos;d like to be
              reminded—in the mornings or during working hours, you pick what
              suits you best.
            </li>
            <li>
              Get Random Reminders: Randy will send you notifications at random
              times within your chosen interval, helping you stay present and
              engaged.
            </li>
          </ol>
        </section>
        <section className="screenshots">
          <figure>
            <img
              src="img/screenshot-notification-detail.png"
              width="200"
              alt="Randy app notification detail view showing a reminder setup"
            />
            <figcaption>Reminder detail view in Randy app</figcaption>
          </figure>
          <figure>
            <img
              src="img/screenshot-notification-list.png"
              width="200"
              alt="Randy app showing a list of active reminders"
            />
            <figcaption>List of active reminders in Randy app</figcaption>
          </figure>
        </section>
        <section className="cta">
          <p>Download Randy today and start making the most of your moments!</p>
        </section>
      </article>
    </main>
  );
}
