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
          <a href="/how-it-works">How it works?</a>
        </li>
      </ul>
		</div>
	</div>
    )
}