
import { tours } from "../../data";
import SectionTitle from "../util/SectionTitle";
const Tour = () => {
  return (
    <section className="tours" id="tours" >
      <SectionTitle title='featured' subTitle='tours' />
      <div className="tours-center">
        {
          tours.map((tour) => {
            const { id, location, title, duration, price, picture, icon } = tour;
            return (
              <article className="tour" key={id}>
                <div className="tour-img-container">
                  <img src={picture} />
                </div>
                <div className="tour-content">
                  <h4>{title}</h4>
                  <div className="tours-content-footer">
                    <span><i className={icon}></i>{location}</span>
                    <span>{duration}</span>
                    <span>from &#36;<span>{price}</span></span>
                  </div>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Tour;