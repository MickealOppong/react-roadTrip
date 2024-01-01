import img from '../../imgs/img-3.jpg';
import SectionTitle from '../util/SectionTitle';

const About = () => {
  return (
    <section className="about" id="about">
      <SectionTitle title='about' subTitle='us' />
      <article className='about-center'>
        <div className='about-img-container'>
          <img src={img} alt='image' />
        </div>
        <div className="about-data">
          <h2>who we are</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum  officia quaerat assumenda nulla, distinctio architecto ad minus
          </p><p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum officia quaerat assumenda nulla, distinctio architecto ad minus
          </p>
          <a href="#tours">read more</a>
        </div>
      </article>
    </section>
  )
}

export default About;