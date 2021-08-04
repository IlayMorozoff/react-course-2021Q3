import './counter-page.css';

const CounterPages = () => {
  return (
    <div className="pages_counters">
      <div className="total_page counter">
        <div className="title_total title">Pages Total</div>
        <div className="page_number">23</div>
      </div>
      <div className="total_page counter">
        <div className="title_total title">New per Page</div>
        <div className="page_number">5</div>
      </div>
      <div className="total_page counter">
        <div className="title_total title">Current Page</div>
        <div className="page_number">1</div>
      </div>
    </div>
  );
};

export default CounterPages;
