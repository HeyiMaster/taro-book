import request from '../utils/request';

export function fetchList() {
  return request({
    url: 'api/home/list',
    method: 'GET',
  });
}

export function fetchBanner() {
  return request({
    url: 'api/home/banner',
    method: 'GET',
  });
}
