import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    { title: "Randy - Your Personal Mindful Reminder Assistant" },
    {
      name: "description",
      content:
        "Randy is a unique reminder app that sends random notifications within your set time intervals to help build mindfulness, healthy habits, and maintain focus throughout your day.",
    },
    {
      name: "keywords",
      content:
        "reminder app, mindfulness, habit formation, productivity, personal assistant, random reminders",
    },
    {
      property: "og:title",
      content: "Randy - Your Personal Mindful Reminder Assistant",
    },
    {
      property: "og:description",
      content:
        "Transform your daily routines with Randy's innovative random reminder system",
    },
    { property: "og:type", content: "website" },
  ];
};

export default function Index() {
  return (
    <main>
      <h1>Welcome to Randy - Your Personal Reminder Assistant</h1>
      <section>
        <h2>Who is Randy?</h2>
        <p>
          Randy is not just another reminder app; it&apos;s your companion for a
          more mindful and present life. Whether you&apos;re looking to
          cultivate mindfulness, establish healthy habits, or simply stay on top
          of your daily tasks, Randy is here to support you in a unique and
          personalized way.
        </p>
        <p>
          Unlike traditional reminder apps that notify you at fixed times, Randy
          adds an element of surprise to your routine. You set the time
          interval, and Randy will randomly choose moments within that window to
          remind you. This unpredictability helps you stay present and engaged,
          making Randy perfect for mindfulness exercises, habit formation, or
          any activity where a little randomness can boost your awareness and
          focus.
        </p>
      </section>
      <section>
        <h2>Why Randy?</h2>
        <p>
          In a world where schedules can become overwhelming and routines
          monotonous, Randy introduces a refreshing twist to your day. The
          app&apos;s random reminders help you stay attentive, making every
          reminder feel new and engaging. Whether you&apos;re striving to be
          more present, developing a new habit, or just need a little nudge
          throughout the day, Randy is designed to keep you on track in an
          innovative way.
        </p>
        <p>Download Randy today and start making the most of your moments!</p>
      </section>
    </main>
  );
}
