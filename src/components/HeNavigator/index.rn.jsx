import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { StatusBar } from 'react-native';

import './index.rn.scss';

export default function HeNavigator({ title, children, style, backgroundColor, color }) {
  const className = 'he-navigator';
  const { statusBarHeight } = Taro.getSystemInfoSync();
  return (
    <View className={className} style={{ backgroundColor }}>
      <StatusBar barStyle="light-content" />
      <View className={`${className}__wrapper`} style={{ ...style, paddingTop: statusBarHeight }}>
        {title ? (
          <View className={`${className}__wrapper__inner`}>
            <View className={`${className}__left`}>
              <Text style={{ color }}>＜</Text>
            </View>
            <View
              className={`${className}__title__wrapper`}
            >
              <Text className={`${className}__title`} style={{ color }}>
                {title}
              </Text>
            </View>
          </View>
        ) : (
          <View>{children}</View>
        )}
      </View>
    </View>
  );
}
