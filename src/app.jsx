// import '@tarojs/async-await';
import Taro, { Component } from '@tarojs/taro';
import { Provider } from '@tarojs/redux';
import dva from './utils/dva';

import models from './models';
import Index from './pages/index';

import './app.scss';

const dvaApp = dva({
  initialState: {},
  models: models,
});
const store = dvaApp.getStore();

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  config = {
    darkmode: true,
    pages: [
      'pages/home/index',
      'pages/goods-detail/index',
      'pages/goods/index',
      'pages/message/index',
      'pages/mine/index',
      'pages/message-detail/index',
    ],
    tabBar: {
      color: '#9F9F9F',
      selectedColor: '#FFFFFF',
      list: [
        {
          text: '首页',
          pagePath: 'pages/home/index',
          iconPath: './public/home.png',
          selectedIconPath: './public/home-active.png',
        },
        {
          text: '宝贝',
          pagePath: 'pages/goods/index',
          iconPath: './public/goods.png',
          selectedIconPath: './public/goods-active.png',
        },
        {
          text: '消息',
          pagePath: 'pages/message/index',
          iconPath: './public/message.png',
          selectedIconPath: './public/message-active.png',
        },
        {
          text: '我的',
          pagePath: 'pages/mine/index',
          iconPath: './public/mine.png',
          selectedIconPath: './public/mine-active.png',
        },
      ],
    },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
    },
  };

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

// const UltiApp = dvaApp.start(<App />)

Taro.render(<App />, document.getElementById('app'));
