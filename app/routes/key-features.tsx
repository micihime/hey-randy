import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    { title: "Key Features | Randy - Your Personal Random Reminder App" },
    {
      name: "description",
      content:
        "Discover Randy's key features: customizable reminders, flexible time intervals, mindful alerts, and versatile usage options to enhance your daily routines and mindfulness practices.",
    },
    {
      name: "keywords",
      content:
        "random reminders, customizable alerts, mindfulness app, habit building, time management, productivity tool, flexible notifications",
    },
    {
      property: "og:title",
      content: "Key Features | Randy - Your Personal Random Reminder App",
    },
    {
      property: "og:description",
      content:
        "Explore Randy's powerful features for mindful reminders, habit building, and daily wellness. Set custom notifications, choose flexible time intervals, and stay focused on your goals.",
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
      <h1>Key Features</h1>
      <section>
        <ul>
          <li>
            <strong>Customizable Reminders:</strong> Name your reminder, add a
            short summary, and write a description to keep yourself motivated
            and focused on your goals.
          </li>
          <li>
            <strong>Flexible Time Intervals:</strong> Choose the time frame that
            suits your needs. Whether you want to be reminded every hour or just
            a few times a day, Randy adapts to your schedule.
          </li>
          <li>
            <strong>Mindful Alerts:</strong> Use Randy for mindfulness
            practices, such as deep breathing, stretching, or simply taking a
            moment to check in with yourself. The random reminders will catch
            you off guard, helping you break out of autopilot mode.
          </li>
          <li>
            <strong>Versatile Usage:</strong> While Randy is perfect for
            mindfulness, it&apos;s also great for reminders like grattitude,
            drinking water, or even sending a quick message to a loved one.
          </li>
        </ul>
        <p>
          Embrace the unexpected. Let Randy help you stay mindful, build habits,
          and bring a bit of spontaneity into your daily life.
        </p>
      </section>
    </main>
  );
}
