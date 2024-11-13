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
      <h1>test</h1>
    </main>
  );
}
