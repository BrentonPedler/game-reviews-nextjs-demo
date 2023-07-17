import Navbar from '../components/NavBar';
import { orbitron, exo2 } from './fonts';
import './globals.css';

export const metadata = {
	title: {
		default: 'Game Reviews',
		template: '%s | Game Reviews'
	}
}

export default function RootLayout( { children } ) {
	return (
		<html lang="en" className={`${orbitron.variable} ${exo2.variable}`}>
			<body className="bg-orange-50 flex flex-col px-4 py-2 min-h-screen">
				<header>
					<Navbar />
				</header>
				<main className="py-3 grow">
					{ children }
				</main>
				<footer className="border-t py-3 text-center text-slate-500 text-xs">
					Game data and images courtesy of{' '}
					 <a
						className="text-orange-800 hover:underline"
						href="https://rawg.io/"
						target="_blank"
					>
						RAWG
					</a>
				</footer>
			</body>
		</html>
	)
}
