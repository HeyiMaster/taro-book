import Request from '../utils/request';

export function fetchList() {
  return Request({
    url: 'https://cnodejs.org/api/v1/topics',
    method: 'GET',
  });
}

export function fetchUsers() {
  return Request({
    url: 'https://cnodejs.org/api/v1/topics',
    method: 'GET',
  });
}
