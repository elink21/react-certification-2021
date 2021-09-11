import user from './users.json';

export default function loginApi(username, password) {
  if (username === 'wizeline'  && password === 'Rocks!') {
    return true;
  }
  return false;
}
