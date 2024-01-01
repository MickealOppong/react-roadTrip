import { pageIcons } from "../../data";

const SocialIcons = ({ mainClass, subClass }) => {
  return (
    <section className={mainClass}>
      <ul className={subClass} >
        {
          pageIcons.map((item) => {
            const { href, icon, id } = item;
            return (
              <li key={id} ><a href={href} rel="noreferrer"><i className={icon}></i></a></li>
            )
          })
        }
      </ul>
    </section>
  )
}

export default SocialIcons;