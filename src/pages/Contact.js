import { motion } from "framer-motion";
import BlobsPlayground from "../components/aimations/BlobsPlayground";

function Contact() {
  return (
    <BlobsPlayground>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
        className="mt-24 mb-10"
      >
        <h2 className="text-6xl pb-4"> Contact me</h2>
        <p className="text-2xl font-light">
          <b>Email:</b> siva.s.monster@gmail.com<br></br>
          <b>LinkedIn:</b>https://www.linkedin.com/in/siva-s-6676b0256<br></br>
          <b>Github:</b>https://github.com/siva-s-monster<br></br>
          <b>Phone:</b>678-404-9930
        </p>
        <p></p>
      </motion.div>
    </BlobsPlayground>
  );
}

export default Contact;
