import * as homeService from '../services/home';

export default {
  namespace: 'index',
  state: {
    list: ['walker', 'xiaoming'],
  },
  effects: {
    *fetchList({ payload }, { call, put }) {
      console.log('payload: ', payload);
      const { data } = yield call(homeService.fetchList, {});
      // console.log('data: ', data);
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
    increase() {},
  },
};
