import Me from "../../assets/me.png";
import Button from "../../shared/Button/Button";
import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Hero = ({setSelectedPage}: Props) => {
  return (
    <section id="home">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Home)} className="content">
        <motion.div
          className="left-col"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1>
            Hi! I'm <span>Tomer Vazana</span>
          </h1>
          <h2>Full-Stack</h2>
          <h2 id="text-animation" data-text="Developer">
            Developer
          </h2>
          <p>
            A passionate Full-Stack Developer, love to create and to learn new
            thinks, Based in Israel, Tel Aviv 📌
          </p>
          <Button buttonStyle="btn-outline" type="button">
            Contact Me
          </Button>
        </motion.div>
        <div className="right-col">
          <img src={Me} alt="#" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
