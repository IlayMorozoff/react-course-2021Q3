/* eslint-disable jsx-a11y/anchor-is-valid */
const CardNews = () => {
  return (
    <div className="card news">
      <div className="image">
        <img src="../../assets/react-logo.png" alt="news" />
      </div>
      <div className="autor">Michael Nedelman, CNN</div>
      <div className="title">Five takeaways on the science behind CDCs latest mask guidance</div>
      <div className="discription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, dolorem nam, reiciendis
        omnis exercitationem optio laboriosam nostrum impedit, nesciunt veritatis veritatis
        repudiandae perspiciatis eveniet nisi?
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
  );
};

export default CardNews;
