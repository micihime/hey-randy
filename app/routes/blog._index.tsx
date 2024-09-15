import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    { title: "Blog" },
    { name: "description", content: "My Blog" },
  ];
};

export default function Index() {
	return (
		<main>
			<article>
				<header className="post-header">
					<h1>Randy&apos;s Blog</h1>
					{/* <p className="post-meta">
						written by <a href="https://mitchie.netlify.app/" className="author">Michi</a>
						<time dateTime="2024-09-20 19:00">Sep. 20, 2024</time>
					</p> */}
				</header>
				<div className="post-content">
					<p>
						Whether you&apos;re a mindfulness enthusiast, someone working on forming new habits, 
						or just need a little help remembering important tasks, Randy is the perfect companion 
						to keep you on track in a fun and unexpected way.
					</p>
					<p>
						Follow along for updates on new features, behind-the-scenes moments, and tips on how 
						to get the most out of Randy. Stay tuned for more!	
					</p>
					{/* <aside className="pullquote float-left">
						<q>The paintwater cup has been spilled again. Moment of silence for the carpet.</q>
					</aside> */}
				</div>
			</article>
		</main>
	);
}