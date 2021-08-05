/* eslint-disable jsx-a11y/anchor-is-valid */
import './card-news.css';

const CardNews = () => {
  return (
    <div className="card news">
      <h2 className="title_card">Five takeaways on the science behind CDCs latest mask guidance</h2>
      <h4 className="autor">By: Michael Nedelman, CNN</h4>
      <div className="content_card">
        <div className="image_wrapper">
          <img className="image" src="../../assets/react-logo.png" alt="news" />
        </div>
        <div className="content_wrap">
          <div className="discription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, dolorem nam,
            reiciendis omnis exercitationem optio laboriosam nostrum impedit, nesciunt veritatis
            veritatis repudiandae perspiciatis eveniet nisi?
          </div>
          <div className="content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi culpa fugit magni
            asperiores quidem, quaerat qui blanditiis assumenda deleniti inventore.
          </div>
          <div className="read__more">
            <a href="" className="read">
              Read more...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNews;
