import { useEffect } from "react";
import { Helmet } from "react-helmet";

import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navbar/NavBar";
import Article from "../../components/article/Article";

import INFO from "../../data/info";
import SEO from "../../data/seo";
import myArticles from "../../data/articles";

const Articles = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "articles");

	return (
		<div>
			<Helmet>
				<title>{`Articles | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="flex flex-col min-h-screen">
				<NavBar active="articles" />
				<div className="flex flex-col flex-grow pt-7 m-auto md:mt-20">
					<div className="w-fit pt-5 m-auto">
						<div className="flex border border-white bg-white rounded-full shadow-md m-2 top-4vh z-50">
							<img src="/logo.png" width={46} />
						</div>
					</div>

					<div className="mt-10">
						<div className="font-bold text-xl text-center">
							{INFO.articles.title}
						</div>

						<div className="text-center text-gray-100 p-5 w-full">
							{INFO.articles.description}
						</div>

						<div className="flex flex-col">
							<div className="py-2">
								{myArticles.map((article, index) => (
									<div
										className="p-5 border-l-2 border-l-green-400 m-4 rounded-t-lg rounded-b-lg"
										key={(index + 1).toString()}
									>
										<Article
											key={(index + 1).toString()}
											date={article().date}
											title={article().title}
											description={article().description}
											link={"/article/" + (index + 1)}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default Articles;
