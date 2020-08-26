import * as homeService from '../services/home';

export default {
  namespace: 'home',
  state: {
    list: [],
    banner: [],
  },
  effects: {
    *fetchBanner(_, { call, put }) {
      // const { data } = yield call(homeService.fetchBanner);
      const data = [
        {
          url:
            'http://walker-markdown.oss-cn-shenzhen.aliyuncs.com/uPic/milada-vigerova-p8Drpg_duLw-unsplash.jpg',
        },
        {
          url:
            'http://walker-markdown.oss-cn-shenzhen.aliyuncs.com/uPic/cristofer-jeschke-AqLIkOzWDAk-unsplash.jpg',
        },
      ];
      yield put({
        type: 'save',
        banner: data,
      });
    },
    *fetchList(_, { call, put }) {
      // const { data } = yield call(homeService.fetchList);
      const data = [
        {
          title: '美丽的商品',
          desc: '商品描述111',
          url:
            'http://walker-markdown.oss-cn-shenzhen.aliyuncs.com/uPic/milada-vigerova-p8Drpg_duLw-unsplash.jpg',
        },
        {
          title: '漂亮的商品',
          desc: '商品描述111',
          url:
            'http://walker-markdown.oss-cn-shenzhen.aliyuncs.com/uPic/cristofer-jeschke-AqLIkOzWDAk-unsplash.jpg',
        },
        {
          title: '善良的商品',
          desc: '商品描述111',
          url:
            'http://walker-markdown.oss-cn-shenzhen.aliyuncs.com/uPic/milada-vigerova-p8Drpg_duLw-unsplash.jpg',
        },
        {
          title: '好看的商品',
          desc: '商品描述111',
          url:
            'http://walker-markdown.oss-cn-shenzhen.aliyuncs.com/uPic/cristofer-jeschke-AqLIkOzWDAk-unsplash.jpg',
        },
        {
          title: '好用的商品',
          desc: '商品描述111',
          url:
            'http://walker-markdown.oss-cn-shenzhen.aliyuncs.com/uPic/milada-vigerova-p8Drpg_duLw-unsplash.jpg',
        },
        {
          title: '好喜欢的商品',
          desc: '商品描述111',
          url:
            'http://walker-markdown.oss-cn-shenzhen.aliyuncs.com/uPic/cristofer-jeschke-AqLIkOzWDAk-unsplash.jpg',
        },
      ];
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
