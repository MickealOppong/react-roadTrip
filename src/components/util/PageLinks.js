import { pageLinks } from "../../data";

const PageLinks = ({ mainClass, subclass }) => {
  return (
    <div className={mainClass}>
      <ul className={subclass}>
        {
          pageLinks.map((link) => {
            const { id, href, text } = link;
            return (
              <li key={id}><a href={href}>{text}</a></li>
            )
          })
        }
      </ul>
    </div >
  )
}

export default PageLinks;