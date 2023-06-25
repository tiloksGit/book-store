import "../styles/footer.css";
import Contact from "./ContactUs";

const Footer = () => {
  const developer = "G-26";
  return (
    <footer className="footer">
      <div className="contact-us">
        <Contact />
      </div>
      Developed by: {developer}
    </footer>
  );
};

export default Footer;
