import type { MetaFunction } from "@netlify/remix-runtime";
// import Reviews from "./components/Reviews";
// import ArticleFooter from "./components/ArticleFooter";

export const meta: MetaFunction = () => {
  return [
    { title: "Blog" },
    { name: "description", content: "My Blog" },
  ];
};

export default function Index() {
	return (
	<>	
		<div className="cover">
			<a href="https://mitchie.netlify.app/" className="badge">
				<small>Issue</small> 123
			</a>
		</div>
		<main>
			<article>
				<header className="post-header">
					<h1>Thoughts & Paint Splatters</h1>
					<p className="post-meta">
						written by <a href="https://mitchie.netlify.app/" className="author">Michi</a>
						<time dateTime="2024-09-20 19:00">Sep. 20, 2024</time>
					</p>
				</header>
				<div className="post-content">
					<p>
						Here, I plan to write short entries about my experiences, challenges, and triumphs in my artistic journey.
					</p>
					<p>
						You could even post a mix of serious reflections and lighthearted updates like: The paintwater cup has been spilled again. Moment of silence for the carpet.
					</p>
					<aside className="pullquote float-left">
						<q>The paintwater cup has been spilled again. Moment of silence for the carpet.</q>
					</aside>
					<p>Carrot cake shortbread I love lollipop oat cake cookie. Cake tootsie roll brownie pudding chocolate cake oat cake. Cake gummi bears toffee dessert dessert apple pie brownie candy canes. Bear claw brownie croissant cake jelly beans I love gummies bonbon croissant. Shortbread chocolate bar gingerbread pudding gingerbread I love halvah I love cake. I love wafer donut pudding jujubes. Toffee gummies toffee liquorice tootsie roll topping bear claw. Liquorice I love tootsie roll I love powder jelly. I love lollipop wafer croissant marzipan pastry cake pudding marzipan. Pie sesame snaps cotton candy sweet oat cake marzipan tiramisu I love. Jelly toffee I love donut carrot cake cheesecake tart. Cupcake icing shortbread donut pudding I love cake I love. Tootsie roll candy canes sugar plum cake jujubes pastry danish pudding. Gummi bears tart soufflé tart candy cotton candy cookie biscuit.</p>
					<h2>Toto je podnadpis</h2>
					<p>Macaroon bonbon muffin candy canes lemon drops tootsie roll cotton candy oat cake icing. Muffin cotton candy cheesecake I love I love cupcake danish. I love lemon drops chocolate cheesecake pastry.</p>
					<aside className="pullquote float-right">
						<q>Chupa chups tiramisu I love soufflé pudding muffin.</q>
					</aside>
					<p>Macaroon apple pie shortbread biscuit donut pie. Sweet sweet sugar plum marzipan wafer pastry. I love gingerbread tiramisu chocolate bar marshmallow donut sweet.</p>
					<aside className="pullquote float-left">
						<i>Zopar linkov</i>
						<ul>
							<li> <a href="https://mitchie.netlify.app/">Red velvet cupcake</a></li>
							<li> <a href="https://mitchie.netlify.app/">Strawberry lollipop</a></li>
							<li> <a href="https://mitchie.netlify.app/">Muffin</a></li>
							<li> <a href="https://mitchie.netlify.app/">Double choc</a></li>
							<li> <a href="https://mitchie.netlify.app/">Salty caramel lifestyle</a></li>
							<li> <a href="https://mitchie.netlify.app/">Bubble gum</a></li>
						</ul>
					</aside>
					<p>
						Sugar plum chocolate pudding bonbon sweet roll cookie oat cake. Brownie cake caramels icing candy I love caramels apple pie donut. Topping I love gummi bears shortbread candy cupcake marshmallow. Chocolate cake dessert I love chocolate brownie croissant. Bear claw lollipop croissant candy canes powder halvah cookie macaroon pastry. Donut sweet biscuit pastry cupcake topping. Icing cupcake sweet roll danish jelly beans. Pudding fruitcake jelly marzipan gummies danish. Gummies halvah jujubes macaroon soufflé candy canes sugar plum. Gummies jelly beans sweet roll cheesecake lollipop candy canes I love. Shortbread icing topping croissant sweet roll sweet pudding cake I love. Cupcake tootsie roll apple pie I love caramels gummies pie cake I love. Sesame snaps apple pie I love I love fruitcake lemon drops I love cheesecake. Cake bonbon shortbread danish jelly.</p>
					<p>
						Jelly dessert oat cake sugar plum cotton candy I love topping. Candy canes icing carrot cake muffin cake tiramisu sweet roll. Gingerbread donut oat cake dragée halvah ice cream toffee toffee.</p>
					<h3>Mensi podnadpis</h3>
					<p>Gummies chupa chups jelly-o sugar plum toffee liquorice danish cupcake topping. Toffee I love I love topping biscuit gummi bears donut chupa chups. I love croissant chocolate cake apple pie candy chocolate bar. Cookie gummies ice cream biscuit cookie pudding chocolate bar tiramisu macaroon.</p>
				</div>
				{/* <ArticleFooter /> */}
			</article>

			{/* <Reviews /> */}
		</main>
	</>
);}