import { hello } from './hello-world';

describe('Hello World', () => {
  test('says hello', () => {
    expect(hello()).toEqual('Hello, World!');
  });
});



// from hello world:
export const hello = () => {
  return 'Hello, World!';
  };
  