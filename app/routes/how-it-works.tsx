import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    { title: "How Randy Works?" },
    { name: "description", content: "How Randy Works?" },
  ];
};

export default function Index() {
    return (
        <main>
            <h1>How Randy Works?</h1>
            <ol>
                <li>
                    Set Your Reminder: Create a personalized reminder by naming it, adding a short summary, and writing a detailed description.
                </li>
                <li>
                    Choose Your Time Interval: Decide how often you&apos;d like to be reminded—every hour, every few hours, or just a few times a day.
                </li>
                <li>
                    Get Random Reminders: Randy will send you notifications at random times within your chosen interval, helping you stay present and engaged.
                </li>
            </ol>
            <img src="img/screenshot-notification-detail.png" alt="How Randy Works?" />
            <img src="img/screenshot-notification-list.png" alt="How Randy Works?" />
            <p>
                Download Randy today and start making the most of your moments!
            </p>
        </main>
    );
}
