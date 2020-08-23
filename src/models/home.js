import * as homeService from '../services/home';

export default {
  namespace: 'home',
  state: {
    list: [],
    banner: []
  },
  effects: {
    *fetchBanner(_, { call, put }) {
      const { data } = yield call(homeService.fetchBanner);
      yield put({
        type: 'save',
        banner: data,
      });
    },
    *fetchList(_, { call, put }) {
      const { data } = yield call(homeService.fetchList);
      yield put({
        type: 'save',
        list: data,
      });
    },
  },
  reducers: {
    save(state, props) {
      return {
        ...state,
        ...props,
      };
    },
  },
};

