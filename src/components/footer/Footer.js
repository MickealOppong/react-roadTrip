import PageLinks from "../util/PageLinks";
import SocialIcons from "../util/SocialIcons";
import FooterText from "./FooterText";

const Footer = () => {
  return (
    <footer >
      <PageLinks mainClass='footer-link' subclass="footer-links" />
      <SocialIcons mainClass='footer-icon' subClass='footer-icons' />
      <FooterText />
    </footer>
  )
}

export default Footer;