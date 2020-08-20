import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import HeNavigator from '../../components/HeNavigator';
import HeaderCard from './components/HeaderCard';

export default function MessageDetail() {
  const className = 'message';
  return (
    <View className={className}>
      <HeNavigator title="合一" backgroundColor="#F5F5F5" />
      <HeaderCard />
    </View>
  );
}

MessageDetail.config = {
  navigationStyle: 'custom',
};
