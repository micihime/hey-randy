import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [{ title: "Blog" }, { name: "description", content: "My Blog" }];
};

export default function Index() {
  return (
    <main>
      <article>
        <header className="post-header">
          <h1>Journaling Prompts</h1>
          {/* <p className="post-meta">
						written by <a href="https://mitchie.netlify.app/" className="author">Michi</a>
						<time dateTime="2024-09-20 19:00">Sep. 20, 2024</time>
					</p> */}
        </header>
        <div className="post-content">
          <p>
          Here are some journaling prompts to help you get started. You can choose the ones that resonate with you the most or try a new one each day.

Self-Reflection Prompts
What are three things I&apos;m grateful for today, and why?
What are my strengths, and how do they help me in my daily life?
When was the last time I felt truly proud of myself? What did I achieve?
How do I typically react to stress, and what can I do to manage it better?
What are my core values, and how do they guide my decisions?
Future-Oriented Prompts
Where do I see myself in five years? What steps can I take to get there?
What goals am I currently working toward, and why are they important to me?
If I could accomplish anything without the fear of failure, what would it be?
What habits do I want to develop over the next month, and why?
How can I contribute to the world or my community in a meaningful way?
Emotional Exploration Prompts
How do I feel today, and what might be the reasons behind these emotions?
What&apos;s a recent event that made me feel deeply, and how did I cope with those emotions?
When do I feel the most at peace? How can I create more of these moments?
What&apos;s one fear that&apos;s holding me back, and how can I confront it?
How do I handle negative emotions like anger or sadness, and how can I improve my emotional well-being?
Relationship-Focused Prompts
Who are the most important people in my life, and why?
What does a healthy relationship look like to me? How can I cultivate this in my own relationships?
When did I last have a meaningful conversation, and what made it impactful?
How can I improve my communication skills with those I care about?
What boundaries do I need to set in my relationships, and how can I do so effectively?
Creative Exploration Prompts
If I could create anything, what would it be and why?
What activities make me lose track of time? How can I incorporate more of these into my life?
Describe a place where I feel inspired. What about it fuels my creativity?
What stories, either real or imagined, do I want to tell?
If I could live a day in someone else&apos;s shoes, who would it be and why?
Feel free to adapt these prompts to suit your needs or mood. Happy journaling!
          </p>
          {/* <aside className="pullquote float-left">
						<q>The paintwater cup has been spilled again. Moment of silence for the carpet.</q>
					</aside> */}
        </div>
      </article>
    </main>
  );
}
