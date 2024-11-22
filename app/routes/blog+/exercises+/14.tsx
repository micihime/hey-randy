import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [{ title: "Blog" }, { name: "description", content: "My Blog" }];
};

export default function Index() {
  return (
    <main>
      <article>
        <header className="post-header">
          <h1>Mindful Coloring</h1>
          {/* <p className="post-meta">
						written by <a href="https://mitchie.netlify.app/" className="author">Michi</a>
						<time dateTime="2024-09-20 19:00">Sep. 20, 2024</time>
					</p> */}
        </header>
        <div className="post-content">
          <p>
            How: Use a coloring book or draw patterns on a blank piece of paper.
            Focus on the colors, the movement of your hand, and the designs you
            create. Let your mind rest in the simple act of coloring. Duration:
            10-15 minutes.
          </p>
          {/* <aside className="pullquote float-left">
						<q>The paintwater cup has been spilled again. Moment of silence for the carpet.</q>
					</aside> */}
        </div>
      </article>
    </main>
  );
}
