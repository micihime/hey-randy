import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [{ title: "Blog" }, { name: "description", content: "My Blog" }];
};

export default function Index() {
  return (
    <main>
      <article>
        <header className="post-header">
          <h1>5-4-3-2-1 Grounding Exercise</h1>
          {/* <p className="post-meta">
						written by <a href="https://mitchie.netlify.app/" className="author">Michi</a>
						<time dateTime="2024-09-20 19:00">Sep. 20, 2024</time>
					</p> */}
        </header>
        <div className="post-content">
          <p>
            How: Identify 5 things you can see, 4 things you can touch, 3 things
            you can hear, 2 things you can smell, and 1 thing you can taste.
            This exercise helps to ground you in the present moment. Duration: 5
            minutes.
          </p>
          {/* <aside className="pullquote float-left">
						<q>The paintwater cup has been spilled again. Moment of silence for the carpet.</q>
					</aside> */}
        </div>
      </article>
    </main>
  );
}
