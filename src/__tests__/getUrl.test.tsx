import getUrl from '../helpers/getUrl';

const data = {
  filename: undefined,
};

it('return null if data.filename is undefined', () => {
  const value = getUrl(data);
  expect(value).toEqual(null);
});