import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    { title: "Why Randy?" },
    { name: "description", content: "Why Randy?" },
  ];
};

export default function Index() {
    return (
        <main>
            <h1>Why Randy?</h1>
            <p>
                Whether you&apos;re a mindfulness enthusiast, someone working on forming new habits, or just need a little help remembering important tasks, 
                Randy is the perfect companion to keep you on track in a fun and unexpected way.
            </p>
            <p>
                Download Randy today and start making the most of your moments!
            </p>
        </main>
    );
}
