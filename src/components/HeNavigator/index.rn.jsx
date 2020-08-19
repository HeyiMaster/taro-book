import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { StatusBar, SafeAreaView } from 'react-native';

import './index.rn.scss';

export default function HeNavigator({ title, children, style, backgroundColor, color, theme = 'dark' }) {
  const className = 'he-navigator';
  return (
    <View className={className} style={{ backgroundColor }}>
      <StatusBar barStyle={`${theme}-content`} />
      <SafeAreaView>
        <View className={`${className}__wrapper`} style={style}>
          {title ? (
            <View className={`${className}__wrapper__inner`}>
              <View className={`${className}__left`}>
                <Text style={{ color }}>＜</Text>
              </View>
              <View className={`${className}__title__wrapper`}>
                <Text className={`${className}__title`} style={{ color }}>
                  {title}
                </Text>
              </View>
            </View>
          ) : (
            <View>{children}</View>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
}
