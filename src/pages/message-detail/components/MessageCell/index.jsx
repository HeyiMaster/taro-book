import Taro from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { px } from '../../../../utils/common';
import './index.scss';

export default function MessageCell({ type = 'from', text, avatar = '' }) {
  const className = 'he-messsage-cell';
  const typedCalss = `${className}-${type}`;
  return (
    <View className={`${className} ${typedCalss}`}>
      <Image className={`${className}__avatar`} src={avatar} />
      <View
        className={`${typedCalss}__message-wrapper`}
        style={type === 'from' ? { marginRight: px(100) } : { marginLeft: px(100) }}
      >
        <View className="arrow" />
        <Text className={`${className}__message ${typedCalss}__message`}>{text}</Text>
      </View>
    </View>
  );
}
