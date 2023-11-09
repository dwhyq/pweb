function article_1() {
  return {
    date: "15 May 2023",
    title: "What i intend to do with my article section",
    description:
      "I invite you to join me on this journey of exploration and discovery. Lets branch out together and delve into the exciting world of...",
    keywords: ["latest trends, innovations, and issues in the tech industry"],

    body: (
      <div className="md: lg:">
        <img
          src="/ikennas-branch-image.png"
          alt="ikenna branch logo"
          className="mb-7 m-auto"
        />
        <div className="m-auto md:w-3/4 lg:w-3/5">
          Hey there! Welcome to Ikenna&apos;s Branch, where I share fascinating stories in series. But first, let me tell you what Ikenna&apos;s Branch is all about. This blog is your honest source for everything tech! With my background as a software developer and  digital marketing expert, I bring a unique perspective on the latest trends, innovations, and issues in the tech industry. <br /> Prepare for candid interviews with established developers, along with my personal thoughts and insights on various tech-related topics. Oh, and expect some shenanigans too! From discussing the newest software development tools and exploring the challenges and opportunities of digital marketing, I aim to create an open space for honest and unfiltered conversations about the tech industry. <br /> This article section is especially dedicated to those who are craving the truth and guidance in this vast and ever-evolving field. Consider yourself welcome! So, whether you are a fellow developer, a digital marketer, or simply a tech enthusiast, I invite you to join me on this
          journey of exploration and discovery. <br /> Lets branch out together and delve into the exciting world of tech!
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
      "Health care",
      "Ikenna ikegwuonu",
      "Ikenna dev",
    ],
    body: (
      <div>
        <h1>Content of article 2</h1>
      </div>
    ),
  };
}


function article_3() {
  return {
    date: "7 May 2023",
    title: "Design and Functionality [The Debate]",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    keywords: ["Design and Function [The Debate]"],

    body: (
      <div>
        <div className="">
          <div className="m-auto md:w-3/4 lg:w-3/5">
          <p>Content incoming . . .</p>
          </div>
        </div>
      </div>
    ),
  };
}

const myArticles = [article_1, article_2, article_3];

export default myArticles;
