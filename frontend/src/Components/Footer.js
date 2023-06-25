import "../styles/footer.css";
import Contact from "./ContactUs";
import { Feedback } from "./Feedback";

const Footer = () => {
  const developer = "G-26";
  return (
    <footer className="footer">
      <div className="contact-us">
        <Contact />
        <Feedback />
      </div>
      Developed by: {developer}
    </footer>
  );
};

export default Footer;
