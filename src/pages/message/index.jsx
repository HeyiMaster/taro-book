import Taro, { useCallback } from '@tarojs/taro';
import { View, Button } from '@tarojs/components';

export default function Message() {
  const className = 'message';
  const handleClick = useCallback(() => {
    Taro.navigateTo({ url: '/pages/message-detail/index?id=taro' });
  }, []);
  return (
    <View className={className}>
      <Button onClick={handleClick}>去聊天</Button>
    </View>
  );
}

Message.config = {
  navigationBarTitleText: '消息'
};
