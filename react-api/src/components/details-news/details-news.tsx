/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import './details-news.css';
import defaultImg from '../../assets/default-image.jpg';

interface IParams {
  title: string;
  author: string;
  description: string;
  url: string;
  urlToImage: string;
  content: string;
}

const DetailsNews: FC = () => {
  const { title, author, description, url, urlToImage, content }: IParams = useParams();
  // /details/:id/:title/:author/:description/:url/:urlToImage/:content"
  const titleDecode = decodeURIComponent(title);
  const authorDecode = decodeURIComponent(author);
  const descriptionDecode = decodeURIComponent(description);
  const urlDecode = decodeURIComponent(url);
  const urlToImageDecode = decodeURIComponent(urlToImage);
  const contentDecode = decodeURIComponent(content);
  // const [, titleDe, authorDe, descriptionDe, urlDe, urlToImageDe, contentDe] =
  //   decodeUrl.split(',,,/');

  // const localStorageObj = {
  //   title,
  //   author,
  //   description,
  //   url,
  //   urlToImage,
  //   content,
  // };
  // localStorage.setItem('item', JSON.stringify(localStorageObj));
  // const localObj = localStorage.getItem('item');
  // const localObj1 = JSON.parse(localObj);

  return (
    <section className="details">
      <h1 className="title_details">{titleDecode}</h1>
      <h2 className="autor_details">By: {authorDecode === 'null' ? 'Unknown' : authorDecode}</h2>
      <div className="content_details">
        <div className="image_wrapper_details">
          <img
            className="image_details"
            src={urlToImageDecode === 'null' ? defaultImg : urlToImageDecode}
            alt="something news"
          />
        </div>
        <div className="content_wrap_details">
          <div className="discription_details">{descriptionDecode}</div>
          <div className="content_details"> {contentDecode}</div>
          <div className="read__more_details">
            <a href={urlDecode} target="_blank" rel="noreferrer" className="button read_details">
              Read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsNews;
