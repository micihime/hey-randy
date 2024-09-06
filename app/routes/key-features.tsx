import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    { title: "Key Features" },
    { name: "description", content: "Key Features" },
  ];
};

export default function KeyFeatures() {
    return (
        <main>
            <h1>Key Features</h1>
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
            <p>
              <a href="/how-it-works">
                Learn about How Randy Works here.
              </a>
            </p>
        </main>
    );
}
