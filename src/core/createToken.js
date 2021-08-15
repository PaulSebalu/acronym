import { Token } from './utils';

const devToken = () => {
  const token = Token.createToken('development');
  // eslint-disable-next-line no-console
  console.log(`Use the token, ${token} to test the endpoints`);
};

devToken();
