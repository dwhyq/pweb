function article_1() {
	return {
		date: "7 May 2023",
		title: "The Benefits of Cloud Computing",
		description:
			"Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
		keywords: [
			"The Benefits of Cloud Computing"
		],
		
		body: (
			<div>
				<div className="">
					<div className="">Content of article 1 Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="m-auto"
					/>
				</div>
			</div>
		),
	};
}

function article_2() {
	return {
		date: "7 May 2023",
		title: "Artificial Intelligence in Healthcare",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<div>
				<h1>Content of article 2</h1>
			</div>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
