import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import c_sharp from "../../assets/icons/c_sharp.png"
import c_plus from "../../assets/icons/c_plus.png";
import html from "../../assets/icons/html.png";
import javascript from "../../assets/icons/javascript.png";
import typescript from "../../assets/icons/typescript.png";
import git from "../../assets/icons/git.png";
import nodejs from "../../assets/icons/nodejs.png";
import sql from "../../assets/icons/sql.png";
import tailwind from "../../assets/icons/tailwind-css.png";
import react from "../../assets/icons/react.png";
import python from "../../assets/icons/python.png";
import css from "../../assets/icons/css3.png";

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
