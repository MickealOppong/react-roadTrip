import { services } from "../../data";
import SectionTitle from "../util/SectionTitle";
const Services = () => {
  return (
    <section className="services" id="services">
      <SectionTitle title='our' subTitle='services' />
      <div className='service-center'>
        {
          services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article className="service-item" key={id}>
                <div className="service-item-icon">
                  <span><i className={icon}></i></span>
                </div>
                <div className="service-item-content">
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Services;