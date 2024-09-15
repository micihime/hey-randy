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
      <h1>Welcome to Randy - Your Personal Reminder Assistant</h1>
      <section>
        <h2>Who is Randy?</h2>
        <p>
          Randy is not just another reminder app; it&apos;s your companion for a more mindful and present life. 
          Whether you&apos;re looking to cultivate mindfulness, establish healthy habits, or simply stay on top 
          of your daily tasks, Randy is here to support you in a unique and personalized way.
        </p>
        <p>
          Unlike traditional reminder apps that notify you at fixed times, Randy adds an element of surprise 
          to your routine. You set the time interval, and Randy will randomly choose moments within that 
          window to remind you. This unpredictability helps you stay present and engaged, making Randy 
          perfect for mindfulness exercises, habit formation, or any activity where a little randomness can 
          boost your awareness and focus.
        </p>
      </section>
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
      </section>
      <section>
        <h2>Why Randy?</h2>
        <p>
          In a world where schedules can become overwhelming and routines monotonous, Randy introduces a 
          refreshing twist to your day. The app&apos;s random reminders help you stay attentive, making every 
          reminder feel new and engaging. Whether you&apos;re striving to be more present, developing a new habit, 
          or just need a little nudge throughout the day, Randy is designed to keep you on track in an 
          innovative way.
        </p>
        <p>
          Download Randy today and start making the most of your moments!
        </p>
      </section>
    </main>
  );
}
