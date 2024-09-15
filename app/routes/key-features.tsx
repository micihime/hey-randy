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
      <h1>Key Features</h1>
      <section>
        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Customizable Reminders:</strong> Name your reminder, add a short summary, and write 
            a detailed description to keep yourself motivated and focused on your goals.      
          </li>
          <li>
            <strong>Flexible Time Intervals:</strong> Choose the time frame that suits your needs. Whether 
            you want to be reminded every hour or just a few times a day, Randy adapts to your schedule.
          </li>
          <li>
            <strong>Mindful Alerts:</strong> Use Randy for mindfulness practices, such as deep breathing, 
            stretching, or simply taking a moment to check in with yourself. The random reminders will 
            catch you off guard, helping you break out of autopilot mode.
          </li>
          <li>
            <strong>Versatile Usage:</strong> While Randy is perfect for mindfulness, it&apos;s also great 
            for reminders like taking medication, drinking water, or even sending a quick message to a loved 
            one.
          </li>
        </ul>
        <p>
            Embrace the unexpected. Let Randy help you stay mindful, build habits, and bring a bit of 
            spontaneity into your daily life.
        </p>
      </section>
    </main>
  );
}