/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import { IArticle } from '../interfaces';
import './card-news.css';
import defaultImage from '../../assets/default-image.jpg';

const CardNews = (props: IArticle) => {
  const { author, content, description, title, url, urlToImage, id } = props;
  const idCod = encodeURIComponent(id);
  const titleCod = encodeURIComponent(title);
  const authorCod = encodeURIComponent(author);
  const descriptionCod = encodeURIComponent(description);
  const urlCod = encodeURIComponent(url);
  const urlToImageCod = encodeURIComponent(urlToImage);
  const contentCod = encodeURIComponent(content);
  return (
    <Link
      to={`/details/${idCod}/${titleCod}/${authorCod}/${descriptionCod}/${urlCod}/${urlToImageCod}/${contentCod}`}
      className="cardItem"
    >
      <div className="card news">
        <div className="title_card">{title}</div>
        <h4 className="autor">By: {author || 'Unknown'}</h4>
        <div className="content_card">
          <div className="image_wrapper">
            <img className="image" src={urlToImage || defaultImage} alt="something news" />
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
