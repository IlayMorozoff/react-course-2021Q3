import NumberPages from '../number-pages/number-pages';
import './pagination.css';

const Pagination = () => {
  return (
    <div className="pagination">
      <button className="button pagination_btn" type="button">
        Prev
      </button>
      <NumberPages />
      <button className="button pagination_btn" type="button">
        Next
      </button>
    </div>
  );
};

export default Pagination;
