import Taro from '@tarojs/taro';
import { View, Text, Input } from '@tarojs/components';

import './index.scss';

export default function HeSearch({ style, placeholder }) {
  const className = 'he-search';
  return (
    <View className={className} style={style}>
      <View>
        <Text>🔍</Text>
      </View>
      <Input placeholder={placeholder} placeholderClass={`${className}__input__placeholder`} />
    </View>
  );
}
