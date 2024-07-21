import Date from "@/components/ui/date";
import client from "@/lib/sanity/sanity.client";
import { urlForImage } from "@/lib/sanity/sanity.image";
import { getArticles } from "@/lib/sanity/sanity.queries";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
	title: "Jane Do - News",
};

export default async function NewsPage() {
	const articles = await client.fetch(getArticles);

	return (
		<section>
			<h1 className="scroll-m-20 py-24 text-center text-4xl font-extrabold tracking-tight lg:text-6xl">
				News
			</h1>
			<div className="mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 px-8 pb-24 lg:max-w-none lg:grid-cols-3 lg:px-16 xl:px-32">
				{articles.map((article: any) => (
					<Link
						key={article.id}
						href={`/news/${article.slug}`}
						className="relative isolate flex flex-col justify-end overflow-hidden border border-zinc-700 bg-zinc-900 px-8 pb-8 pt-80 hover:border-gold hover:duration-200 sm:pt-48 lg:pt-80"
					>
						<Image
							height={800}
							width={2000}
							alt={`Image de couverture pour la news : ${article.title}`}
							src={urlForImage(article.coverImage).height(800).width(800).url()}
							className="absolute inset-0 -z-10 h-full w-full object-cover"
						/>
						<div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
						<div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

						<div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
							<Date dateString={article.date} className="mr-8" />
							<div className="-ml-4 flex items-center gap-x-4">
								<svg
									viewBox="0 0 2 2"
									className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
								>
									<circle cx={1} cy={1} r={1} />
								</svg>
								<div className="flex gap-x-2.5">
									<Image
										height={24}
										width={24}
										alt="halte là"
										src={urlForImage(article.author.image)
											.width(24)
											.height(24)
											.url()}
										className="h-6 w-6 flex-none rounded-full bg-white/10"
									/>
									{article.author.name}
								</div>
							</div>
						</div>
						<h3 className="mt-3 text-lg font-semibold leading-6 text-white">
							<span className="absolute inset-0" />
							{article.title}
						</h3>
					</Link>
				))}
			</div>
		</section>
	);
}

export const revalidate = 10;
