import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";
import { useForm } from "react-hook-form";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactMe = ({ setSelectedPage }: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  async function onSubmit(e: any) {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  }

  return (
    <section id="contactme">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactMe)}
      >
        <motion.div
          className="contactMe-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* HEADER */}
          <h1>Send me an email if you like what you see!</h1>

          {/* FORM */}
          <form
            className="contactMe-form"
            target="_blank"
            onSubmit={onSubmit}
            method="POST"
            action="https://formsubmit.co/tomer.vazana27@gmail.com"
          >
            {/* NAME */}
            <input
              type="text"
              placeholder="Name"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p>
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" &&
                  "Maximum lengtch is 100 characters."}
              </p>
            )}

            {/* EMAIL */}
            <input
              type="text"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p>
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            {/* MESSAGE */}
            <textarea
              rows={4}
              cols={50}
              itemType="text"
              placeholder="Message"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p>
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Maximum lengtch is 2000 characters."}
              </p>
            )}

            {/* BUTTON */}
            <button type="submit">SUBMIT</button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactMe;
