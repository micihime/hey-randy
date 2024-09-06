import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main>
      <section>
        <h2>How Randy Works?</h2>
        <p>
          Unlike traditional reminder apps that notify you at fixed times, Randy adds an <strong>element of surprise to your routine</strong>. You set the time interval, and Randy will randomly choose moments within that window to remind you. This unpredictability helps you stay present and engaged, making Randy perfect for mindfulness exercises, habit formation, or any activity where a little randomness can boost your awareness and focus.
        </p>
        <a href="/how-it-works">
          Learn more <span>about How Randy Works</span>
        </a>
      </section>
      <section>
        <h2>Key Features</h2>
        <p>
          Embrace the unexpected. Let Randy help you stay mindful, build habits, and bring a bit of spontaneity into your daily life.
        </p>
        <a href="/key-features">
          Learn more <span>about Key Features</span>
        </a>
      </section>
      <section>
        <h2>Why Randy?</h2>
        <p>
          Start your journey to a more mindful, engaged, and present life with Randy. Whether you&apos;re looking to cultivate new habits or just need a little nudge to stay on track, Randy is the perfect companion for your daily routine.
        </p>
        <a href="/why-randy">
          Learn more <span>about Why Randy</span>
        </a>
      </section>
      <section>
        <h2>ToDo</h2>
        <p>
          ToDo ToDo ToDo ToDo ToDo ToDo ToDo ToDo ToDo ToDo ToDo ToDo ToDo ToDo ToDo
          <strong>
              ToDo ToDo ToDo
          </strong>
        </p>
        <a href="/netlify-forms">
          Learn more <span>about ToDo</span>
        </a>
      </section>
    </main>
  );
}
