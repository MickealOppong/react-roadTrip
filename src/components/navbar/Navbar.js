import PageLinks from "../util/PageLinks";
import SocialIcons from "../util/SocialIcons";
import Hamburger from "./Hamburger";
import NavbarLogo from "./NavbarLogo";


const Navbar = () => {

  return (
    <nav className="navbar">
      <NavbarLogo />
      <Hamburger />
      <PageLinks mainClass='navbar-link' subclass='navbar-links' />
      <SocialIcons mainClass='navbar-icon' subClass='navbar-icons' />
    </nav>
  )
}

export default Navbar;