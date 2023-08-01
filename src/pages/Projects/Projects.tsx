import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";
import { ProjectType } from "../../shared/types";
import project1 from "../../assets/project1.jpeg";
import project2 from "../../assets/project2.jpeg";
import project3 from "../../assets/project3.jpeg";
import Project from "./Project";

const projects: Array<ProjectType> = [
  {
    image: project1,
    title: "EVOGYM",
    description:
      "A gym website for fitness information, class schedules, and contact us form by email.",
    skills: "React - TypeScript - tailwind",
    url: "https://training-website.pages.dev",
  },
  {
    image: project2,
    title: "HAIRBOOK",
    description:
      "As part of our final degree project me and my team created application that offers a seamless hair salon experience by allowing customers to book appointments, order products, and admin dashboard for salon management.",
    skills: "React Native - Javascript - C# - HTML - CSS3 - SQL",
    url: "http://proj.ruppin.ac.il/gallery/#/rue11p101",
  },
  {
    image: project3,
    title: "NOTES",
    description:
      "A Notes app to write, edit or delete your notes, you can filter notes by tags and edit them.",
    skills: "React - TypeScript - React-Bootstrap",
    url: "https://notes-dr6.pages.dev",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Projects = ({ setSelectedPage }: Props) => {
  return (
    <section id="projects">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
      >
        {/* HEADER */}
        <motion.div
          className="projects-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1>MY PROJECTS</h1>
          <p>
            Here you can see some of my projects i created, you can enter to the
            project via link and also you can see the code source in my github,
            just click on the right side github icon.
          </p>
        </motion.div>

        {/* PROJECTS */}
        <motion.div className="projects-body">
          {projects.map((project: ProjectType) => (
            <Project
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              url={project.url}
              skills={project.skills}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
