import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navbar/NavBar";

import INFO from "../../data/info";
import myArticles from "../../data/articles";

let ArticleStyle = styled.div``;

const ReadArticle = () => {
	const navigate = useNavigate();
	let { slug } = useParams();

	const article = myArticles[slug - 1];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [article]);

	ArticleStyle = styled.div`
		${article().style}
	`;

	return (
		<div>
			<Helmet>
				<title>{`${article().title} | ${INFO.main.title}`}</title>
				<meta name="description" content={article().description} />
				<meta name="keywords" content={article().keywords.join(", ")} />
			</Helmet>

			<div className="flex flex-col min-h-screen">
				<NavBar />

				<div className="flex flex-col gap-5 flex-grow p-2 m-auto md:mt-20">
					<div className="w-fit">
						<img
							src="/back-button.png"
							alt="back"
							className="mt-16 w-1/12 rounded-full border-2 animate-pulse border-green-400 md:w-[40px] bg-white"
							onClick={() => navigate(-1)}
						/>
					</div>

					<div className="p-2">
						<div className="border-l-2 border-gray-300 text-base flex items-center mt-5 w-fit">
							<div className="ml-2 text-gray-100">
								{article().date}
							</div>
						</div>

						<div className="font-bold mt-5 text-lg text-left mb-3 w-fit">
							{article().title}
						</div>

						<div className="text-gray-100">
							<ArticleStyle>{article().body}</ArticleStyle>
						</div>
					</div>
				</div>
				<div>
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default ReadArticle;
