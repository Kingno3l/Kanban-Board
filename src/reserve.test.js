import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import ReservedDragons from './components/ReservedDragons';
import { configureStore } from '@reduxjs/toolkit';
import dragonsReducer from './redux/dragons/dragonsSlice';

const localStorageMock = {
  getItem: jest.fn(),
};

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

global.localStorage.getItem = jest.fn();

test('ReservedDragons component renders correctly with reserved dragons', () => {
  jest.spyOn(require('react-redux'), 'useSelector').mockImplementation(() => [
    { id: 1, name: 'Dragon 1' },
    { id: 2, name: 'Dragon 2' },
  ]);

  localStorageMock.getItem.mockReturnValue('reserved');

  const store = configureStore({
    reducer: {},
  });

  const { getByText, getByTestId } = render(
    <Provider store={store}>
      <ReservedDragons />
    </Provider>,
  );
});
