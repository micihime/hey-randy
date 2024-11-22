import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [{ title: "Blog" }, { name: "description", content: "My Blog" }];
};

export default function Index() {
  return (
    <main>
      <article>
        <header className="post-header">
          <h1>Mindful Breathing</h1>
          {/* <p className="post-meta">
						written by <a href="https://mitchie.netlify.app/" className="author">Michi</a>
						<time dateTime="2024-09-20 19:00">Sep. 20, 2024</time>
					</p> */}
        </header>
        <div className="post-content">
          <p>
            How: Sit or lie down comfortably. Close your eyes and bring your
            attention to your breath. Notice the sensation of the breath as it
            enters and leaves your nostrils or feel your chest and abdomen
            rising and falling. If your mind wanders, gently bring it back to
            your breath. Duration: 5-10 minutes.
          </p>
          {/* <aside className="pullquote float-left">
						<q>The paintwater cup has been spilled again. Moment of silence for the carpet.</q>
					</aside> */}
        </div>
      </article>
    </main>
  );
}
