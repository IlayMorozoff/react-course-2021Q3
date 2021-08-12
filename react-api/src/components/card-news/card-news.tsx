import { Link } from 'react-router-dom';
import { IArticle } from '../interfaces';
import './card-news.css';
import defaultImage from '../../assets/default-image.jpg';

const CardNews = (props: IArticle) => {
  const { author, content, description, title, urlToImage } = props;
  const titleCod = encodeURIComponent(title);
  return (
    <Link to={`/details/${titleCod}}`} className="cardItem">
      <div className="card news">
        <div className="title_card">{title}</div>
        <h4 className="autor">By: {author !== 'null' ? author : 'Unknown'}</h4>
        <div className="content_card">
          <div className="image_wrapper">
            <img
              className="image"
              src={urlToImage !== 'null' ? urlToImage : defaultImage}
              alt="something news"
            />
          </div>
          <div className="content_wrap">
            <div className="discription">{description}</div>
            <div className="content">{content}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardNews;
