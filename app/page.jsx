import Link from "next/link";
import Heading from "../components/Heading";
import { getFeaturedReview } from "../lib/reviews";

export default async function HomePage() {
	const review = await getFeaturedReview();
	return (
		<>
			<Heading>Game Reviews</Heading>
			<p className="pb-3">Games reviewed for you.</p>
			<div className="bg-white border rounded w-80 shadow hover:shadow-xl sm:w-full">
					<Link className="flex flex-col sm:flex-row" href={` /reviews/${review.slug} `}>
						<img
							src={ review.image }
							alt=""
							width="320"
							height="180"
							className="rounded-t sm:rounded-1 sm:rounded-r-none"
						/>
						<h2 className="font-orbitron font-semibold py-1 text-center sm:px-2">
							{ review.title }
						</h2>
					</Link>
				</div>
		</>
	)
}
