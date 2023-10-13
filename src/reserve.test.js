import '@testing-library/jest-dom/extend-expect';

const localStorageMock = {
  getItem: jest.fn(),
};

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

global.localStorage.getItem = jest.fn();

test('ReservedDragons component renders correctly with reserved dragons', () => {
  jest.spyOn(import('react-redux'), 'useSelector').mockImplementation(() => [
    { id: 1, name: 'Dragon 1' },
    { id: 2, name: 'Dragon 2' },
  ]);

  localStorageMock.getItem.mockReturnValue('reserved');
});
