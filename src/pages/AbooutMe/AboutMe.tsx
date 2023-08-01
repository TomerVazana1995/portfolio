import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import c_sharp from "../../images/icons/c#.png"
import c_plus from "../../images/icons/c++.png";
import html from "../../images/icons/html.png";
import javascript from "../../images/icons/javascript.png";
import typescript from "../../images/icons/typescript.png";
import git from "../../images/icons/git.png";
import nodejs from "../../images/icons/nodejs.png";
import sql from "../../images/icons/sql.png";
import tailwind from "../../images/icons/tailwind-css.png";
import react from "../../images/icons/react.png";
import python from "../../images/icons/python.png";
import css from "../../images/icons/css3.png";

const icons: Array<string> = [react, html, css, tailwind, nodejs, sql, javascript, typescript, python, c_sharp, c_plus, git]

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const AboutMe = ({ setSelectedPage }: Props) => {
  return (
    <section id="aboutme">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.AboutMe)}>
        {/* HEADER */}
        <motion.div
          className="aboutMe-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1>About Me</h1>
          <p>
            Hello! I am a web development programmer and an Industrial &
            Management engineer. With 1 year of experience in the field.
            Proficient in web development. I'm committed to delivering
            high-quality solutions and constantly staying updated with the
            latest industry trends. When I'm not coding, I enjoy playing the guitar,
            travel, and spending time with my family and friends.
          </p>
          <h3>Skills stack</h3>
          <div className="stack-icons">
          {icons.map((icon) => (
            <img key={`${icon}`} alt={`${icon}`} src={icon} />
          ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
