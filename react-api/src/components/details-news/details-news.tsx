/* eslint-disable jsx-a11y/anchor-is-valid */
import './details-news.css';
import defaultImg from '../../assets/default-image.jpg';

const DetailsNews = () => {
  return (
    <section className="details">
      <h1 className="title_details">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, aspernatur.
      </h1>
      <h2 className="autor_details">By: Autor</h2>
      <div className="content_details">
        <div className="image_wrapper_details">
          <img className="image_details" src={defaultImg} alt="something news" />
        </div>
        <div className="content_wrap_details">
          <div className="discription_details">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto fugiat eius adipisci
            quaerat corrupti dolorem cum sapiente magni rerum, ipsa vero illo consequatur quasi sit
            aperiam explicabo? Perferendis, magnam dolore temporibus autem ratione harum dolores
            culpa accusantium sequi nesciunt laboriosam eum architecto! Qui temporibus minima
            commodi quam natus modi iure!
          </div>
          <div className="content_details">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto fugiat eius adipisci
            quaerat corrupti dolorem cum sapiente magni rerum, ipsa vero illo consequatur quasi sit
            aperiam explicabo? Perferendis, magnam dolore temporibus autem ratione harum dolores
            culpa accusantium sequi nesciunt laboriosam eum architecto! Qui temporibus minima
            commodi quam natus modi iure!
          </div>
          <div className="read__more_details">
            <a href="#" className="read_details button">
              Read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsNews;
