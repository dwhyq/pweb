import Project from "./Project";
import INFO from "../../data/info";


const AllProjects = () => {
	return (
		<div className="">
			<div className="w-full md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
			{INFO.projects.map((project, index) => (
				<div className="border border-e-indigo-300 shadow-md shadow-zinc-700 rounded-md pt-2 pb-2" key={index}>
					<Project
						image={project.image}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
			</div>
		</div>
	);
};

export default AllProjects;
