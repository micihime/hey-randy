import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    { title: "Randy" },
    { name: "description", content: "Welcome to Randy!" },
  ];
};

export default function Index() {
  return (
    <main>
      <section>
        <h2>Who is Randy?</h2>
        <p>
        </p>
      </section>
      <section>
        <h2>Key Features</h2>
        <ul>
          <li>
            Customizable Reminders: Name your reminder, add a short summary, and write a detailed description to keep yourself motivated and focused on your goals.      
          </li>
          <li>
            Flexible Time Intervals: Choose the time frame that suits your needs. Whether you want to be reminded every hour or just a few times a day, Randy adapts to your schedule.
          </li>
          <li>
            Mindful Alerts: Use Randy for mindfulness practices, such as deep breathing, stretching, or simply taking a moment to check in with yourself. The random reminders will catch you off guard, helping you break out of autopilot mode.
          </li>
          <li>
            Versatile Usage: While Randy is perfect for mindfulness, it&apos;s also great for reminders like taking medication, drinking water, or even sending a quick message to a loved one.
          </li>
        </ul>
      </section>
      <section>
        <h2>Why Randy?</h2>
        <p>
            Whether you&apos;re a mindfulness enthusiast, someone working on forming new habits, or just need a little help remembering important tasks, 
            Randy is the perfect companion to keep you on track in a fun and unexpected way.
        </p>
        <p>
            Download Randy today and start making the most of your moments!
        </p>
      </section>
    </main>
  );
}
