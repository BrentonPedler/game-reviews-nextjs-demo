import Link from "next/link"

export default function NavBar() {
	return (
	<nav>
		<ul className="flex gap-2">
			<li>
				<Link
					href="/"
					className="font-orbitron font-bold text-orange-800 hover:underline"
				>
 					Game Reviews
				</Link>
			</li>
			<li className="ml-auto">
				<Link
					href="/about"
					className="text-orange-800 hover:underline"
					prefetch={false}
				>
					About
				</Link>
			</li>
			<li>
				<Link
					href="/reviews"
					className="text-orange-800 hover:underline"
				>
					Reviews
				</Link>
			</li>
		</ul>
	</nav>
	)
}
