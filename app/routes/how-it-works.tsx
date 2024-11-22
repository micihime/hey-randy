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
                    Set Your Reminder: Create a personalized reminder by naming it, adding a short summary, and writing a description.
                </li>
                <li>
                    Choose Your Time Range: Decide when you&apos;d like to be reminded—in the mornings or during working hours, you pick what suits you best.
                </li>
                <li>
                    Get Random Reminders: Randy will send you notifications at random times within your chosen interval, helping you stay present and engaged.
                </li>
            </ol>
            <img src="img/screenshot-notification-detail.png" width="200" alt="App screeenshot of a reminder" />
            <img src="img/screenshot-notification-list.png" width="200" alt="App screeenshot of a reminder list" />
            <p>
                Download Randy today and start making the most of your moments!
            </p>
        </main>
    );
}
