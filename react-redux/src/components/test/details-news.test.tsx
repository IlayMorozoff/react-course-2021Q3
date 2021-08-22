import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import store from '../../store';
import DetailsNews from '../details-news/details-news';
import { IArticle } from '../interfaces';

const data: IArticle[] = [
  {
    author: 'Ilya Morozov',
    content: 'CONTENT',
    description: 'dsadsadsadsa',
    title: 'dsadsadsadas',
    url: 'URL',
    urlToImage: 'www.getByText.ru',
    id: Math.random() + 1,
    totalResults: 1,
  },
];

const article: { status: string; totalResults: number; articles: Array<IArticle> } = {
  status: 'ok',
  totalResults: 4552,
  articles: data,
};

(window as any).fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(article),
    status: 200,
  }),
);

describe('details news', () => {
  it('details news renders correctly and works correctly', async () => {
    const history = createMemoryHistory();
    const { findByTestId } = render(
      <Router history={history}>
        <Provider store={store}>
          <DetailsNews />
        </Provider>
      </Router>,
    );
    const detailsPage = await findByTestId('details');
    expect(detailsPage.innerHTML).toMatch('www.getByText.ru');
  });
});
