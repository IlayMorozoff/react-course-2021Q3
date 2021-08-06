/* eslint-disable jsx-a11y/anchor-is-valid */
import { IArticle } from '../interfaces';
import './card-news.css';
import defaultImage from '../../assets/default-image.jpg';

const CardNews = (props: IArticle) => {
  const { author, content, description, title, url, urlToImage } = props;

  return (
    <div className="card news">
      <a className="title_card" href="#">
        {title}
      </a>
      <h4 className="autor">By: {author || 'Unknown'}</h4>
      <div className="content_card">
        <div className="image_wrapper">
          <img className="image" src={urlToImage || defaultImage} alt="something news" />
        </div>
        <div className="content_wrap">
          <div className="discription">{description}</div>
          <div className="content">{content}</div>
          <div className="read__more">
            <a href={url} className="read">
              Read more...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNews;
