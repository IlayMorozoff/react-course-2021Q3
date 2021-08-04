import NumberPages from '../number-pages/number-pages';

const Pagination = () => {
  return (
    <div className="pagination">
      <button type="button">Previous</button>
      <NumberPages />
      <button type="button">Next</button>
    </div>
  );
};

export default Pagination;
