import Request from '../utils/request';

export function fetchList() {
  return Request({
    url: 'http://localhost:8888/api/user/1',
    method: 'GET',
  });
}

export function fetchUsers() {
  return Request({
    url: 'https://cnodejs.org/api/v1/topics',
    method: 'GET',
  });
}
