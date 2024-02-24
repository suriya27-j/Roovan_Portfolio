import {React,useEffect,useState} from "react";
import Project from "../Components/Project";
import { projectDetails } from "../Details";

function Projects() {
  const [projects, setProjects] = useState([projectDetails]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://roovan-portfolio-2.onrender.com/show_projects');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error if needed
      }
    };

    fetchProjects();
  }, []);
  return (
    <main className="container mx-auto max-width pt-10 mb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {projects && projects.map((project, index) => (
            <Project
              key={index}
              projectTitle={project.projectTitle}
              image={project.image}
              description={project.description}
              techStack={project.techStack}
              gitlink={project.gitlink}
            />
          ))}
        </div>
      </section>
    </main>
  );
}


export default Projects;
