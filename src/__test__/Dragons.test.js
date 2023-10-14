import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Dragon from '../components/Dragon';
import store from '../redux/store';

describe('Dragons', () => {
  test('Render Dragons Component', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Dragon />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
