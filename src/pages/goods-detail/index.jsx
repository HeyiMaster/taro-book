import Taro, { useCallback } from '@tarojs/taro';
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components';
import { SafeAreaView } from 'react-native';
import Iconfont from '@/components/Iconfont';
import { px } from '@/utils/common';
import './index.scss';

function getTop() {
  const isWeapp = process.env.TARO_ENV === 'weapp';
  if (isWeapp) {
    const { top, height } = Taro.getMenuButtonBoundingClientRect();
    return { top: px(top), height: px(height) };
  } else {
    const { statusBarHeight } = Taro.getSystemInfoSync();
    return { top: px(statusBarHeight), height: px(30) };
  }
}

function getBottom() {
  const isWeapp = process.env.TARO_ENV === 'weapp';
  if (isWeapp) {
    const {
      safeArea: { bottom },
      screenHeight,
    } = Taro.getSystemInfoSync();
    return screenHeight - bottom;
  } else {
    return 0;
  }
}

export default function GoodsDetail() {
  const className = 'he-goods-detail';
  const { windowHeight } = Taro.getSystemInfoSync();
  const swiperHeight = windowHeight / 2;
  const { top, height } = getTop();
  // 返回上一页
  const goBack = useCallback(() => {
    Taro.navigateBack();
  }, []);
  // 预览图片
  const previewImage = useCallback(current => {
    const urls = [
      'https://walker-markdown.oss-cn-shenzhen.aliyuncs.com/uPic/milada-vigerova-p8Drpg_duLw-unsplash.jpg',
      'https://walker-markdown.oss-cn-shenzhen.aliyuncs.com/uPic/cristofer-jeschke-AqLIkOzWDAk-unsplash.jpg',
    ];
    Taro.previewImage({ urls, current });
  }, []);
  const ButtonContent = (
    <View className={`${className}__button-content`}>
      <View className={`${className}__button-swap`}>
        <Text className={`${className}__button-swap-text`}>申请换</Text>
      </View>
      <View className={`${className}__button-buy`}>
        <Text className={`${className}__button-buy-text`}>毛毛买</Text>
      </View>
    </View>
  );
  return (
    <View className={className} style={{ flex: 1 }}>
      <View className={`${className}__action`} style={{ top, height }}>
        <View className={`${className}__action-item`} onClick={goBack}>
          <Iconfont name="icon-fanhui-xianxing" color="#FFFFFF" size={32} />
        </View>
        <View className={`${className}__action-item`}>
          <Iconfont name="icon-iconfontzhizuobiaozhun20" color="#FFFFFF" size={32} />
        </View>
        <View className={`${className}__action-item`}>
          <Iconfont name="icon-xihuan" color="#FFFFFF" size={32} />
        </View>
        <View className={`${className}__action-item`}>
          <Iconfont name="icon--_liaotian" color="#FFFFFF" size={32} />
        </View>
      </View>
      <View
        style={{
          overflow: 'scroll',
          WebkitOverflowScrolling: 'touch',
          height: px(windowHeight),
        }}
      >
        <Swiper
          className={`${className}__swiper`}
          style={{
            height: px(swiperHeight),
            marginBottom: px(10),
          }}
          indicatorColor="#999"
          indicatorActiveColor="#333"
          circular
          indicatorDots
          autoplay
        >
          <SwiperItem
            onClick={() =>
              previewImage(
                'https://walker-markdown.oss-cn-shenzhen.aliyuncs.com/uPic/milada-vigerova-p8Drpg_duLw-unsplash.jpg',
              )
            }
          >
            <Image
              mode="aspectFill"
              style={{ width: '100%', height: px(swiperHeight) }}
              src="https://walker-markdown.oss-cn-shenzhen.aliyuncs.com/uPic/milada-vigerova-p8Drpg_duLw-unsplash.jpg"
            />
          </SwiperItem>
          <SwiperItem
            onClick={() =>
              previewImage(
                'https://walker-markdown.oss-cn-shenzhen.aliyuncs.com/uPic/cristofer-jeschke-AqLIkOzWDAk-unsplash.jpg',
              )
            }
          >
            <Image
              mode="aspectFill"
              style={{ width: '100%', height: px(swiperHeight) }}
              src="https://walker-markdown.oss-cn-shenzhen.aliyuncs.com/uPic/cristofer-jeschke-AqLIkOzWDAk-unsplash.jpg"
            />
          </SwiperItem>
        </Swiper>
        <View
          style={{
            position: 'relative',
            zIndex: 2,
          }}
        >
          <View
            className={`${className}__content`}
            style={{
              marginTop: process.env.TARO_ENV === 'rn' ? -30 : px(swiperHeight - 20),
            }}
          >
            <Text className={`${className}__content-title`}>商品详情</Text>
            <View className={`${className}__content-desc`}>
              <Text className={`${className}__content-desctext`}>
                商品详细描述，这件衣服很喜欢，如果你也喜欢我们可以聊聊，一起来换
              </Text>
            </View>
          </View>
        </View>
      </View>
      {process.env.TARO_ENV === 'rn' ? (
        <SafeAreaView
          style={{
            height: 80,
            width: '100%',
            position: 'absolute',
            bottom: 0,
          }}
        >
          <View style={{ flex: 1 }}>{ButtonContent}</View>
        </SafeAreaView>
      ) : (
        <View className={`${className}__button`} style={{ bottom: px(getBottom() + 10) }}>
          {ButtonContent}
        </View>
      )}
    </View>
  );
}

GoodsDetail.config = {
  navigationStyle: 'custom',
  disableScroll: true,
};
