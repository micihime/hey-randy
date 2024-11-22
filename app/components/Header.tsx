import 'app/styles/style.css'

export default function Header() {
    return (
	<div className="header">
		<div className="content flexi">
			<div className="logo">Randy</div>
      <ul className="navbar flexi">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/how-it-works">About Randy</a>
        </li>
        <li>
          <a href="/key-features">Features</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
      </ul>
		</div>
	</div>
    )
}