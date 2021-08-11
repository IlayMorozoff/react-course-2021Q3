import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './details-news.css';
import defaultImg from '../../assets/default-image.jpg';
import { newsApi } from '../card-news-container/card-news-container';
import { IArticle } from '../interfaces';

interface IParams {
  title: string;
  author: string;
  description: string;
  url: string;
  urlToImage: string;
  content: string;
}

const DetailsNews: FC = () => {
  // const { title }: { title: string } = useParams();
  const { title, author, description, url, urlToImage, content }: IParams = useParams();
  const titleDecode = decodeURIComponent(title);
  const authorDecode = decodeURIComponent(author);
  const descriptionDecode = decodeURIComponent(description);
  const urlDecode = decodeURIComponent(url);
  const urlToImageDecode = decodeURIComponent(urlToImage);
  const contentDecode = decodeURIComponent(content);

  // const [article, setArticle] = useState<IArticle[]>([]);

  // useEffect(() => {
  //   newsApi.getNews(title, '1', '100').then((data) => {
  //     setArticle(data);
  //   });
  // }, []);
  // console.log(article)

  // if (article[0]) {
  //   return (
  //     <section className="details">
  //     <h1 className="title_details">{article[0].content}</h1>
  //     {/* <h2 className="autor_details">By: {authorDecode === 'null' ? 'Unknown' : authorDecode}</h2>
  //     <div className="content_details">
  //       <div className="image_wrapper_details">
  //         <img
  //           className="image_details"
  //           src={urlToImageDecode === 'null' ? defaultImg : urlToImageDecode}
  //           alt="something news"
  //         />
  //       </div>
  //       <div className="content_wrap_details">
  //         <div className="discription_details">{descriptionDecode}</div>
  //         <div className="content_details"> {contentDecode}</div>
  //         <div className="read__more_details">
  //           <a href={urlDecode} target="_blank" rel="noreferrer" className="button read_details">
  //             Read more
  //           </a>
  //         </div>
  //       </div>
  //     </div> */}
  //   </section>
  //   )
  // } else {
  //   return (
  //     <div>LoAD...........</div>
  //   )
  // }

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
