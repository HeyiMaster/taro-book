import Taro from '@tarojs/taro';
import { create } from 'dva-core';
// import { createLogger } from 'redux-logger';
import createLoading from 'dva-loading';

export default function createApp(opt) {
  // redux日志
  // opt.onAction = [createLogger()];
  const app = create(opt);
  app.use(createLoading({}));

  // 适配支付宝小程序
  // if (Taro.getEnv() === Taro.ENV_TYPE.ALIPAY) {
  //   global = {};
  // }

  if (!global.registered) opt.models.forEach(model => app.model(model));
  global.registered = true;

  app.start();

  const store = app._store;
  app.getStore = () => store;

  // dispatch = store.dispatch;

  // app.dispatch = dispatch;
  return app;
}
