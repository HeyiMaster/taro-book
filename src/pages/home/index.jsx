import Taro, { Component } from '@tarojs/taro';
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { px } from '../../utils/common';
import HeNavigator from '../../components/HeNavigator';
import HeSearch from '../../components/HeSearch';
import ImageCard from './components/ImageCard';
import './index.scss';

@connect(({ index, loading }) => ({
  ...index,
  modelLoading: loading.models.index,
  fetchListLoading: loading.effects['index/fetchList'],
}))
export default class Index extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'index/fetchList', payload: '123' });
  }

  config = {
    navigationStyle: 'custom',
  };

  render() {
    return (
      <View className="index">
        {/* <HeNavigator title="Taro" backgroundColor="#00B388" color="#FFF" /> */}
        <HeNavigator>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ marginRight: px(10) }}>分享</Text>
            <View style={{ flex: 1 }}>
              <HeSearch placeholder="请输入关键词" />
            </View>
          </View>
        </HeNavigator>
        <View
          style={{
            borderRadius: px(10),
            overflow: 'hidden',
            height: px(150),
            marginBottom: px(10),
          }}
        >
          <Swiper
            style={{
              height: px(150),
              marginBottom: px(10),
            }}
            indicatorColor="#999"
            indicatorActiveColor="#333"
            circular
            indicatorDots
            autoplay
          >
            <SwiperItem>
              <Image
                mode="widthFix"
                style={{ width: '100%' }}
                src="http://walker-markdown.oss-cn-shenzhen.aliyuncs.com/uPic/cristofer-jeschke-AqLIkOzWDAk-unsplash.jpg"
              />
            </SwiperItem>
            <SwiperItem>
              <Image
                mode="widthFix"
                style={{ width: '100%' }}
                src="http://walker-markdown.oss-cn-shenzhen.aliyuncs.com/uPic/milada-vigerova-p8Drpg_duLw-unsplash.jpg"
              />
            </SwiperItem>
          </Swiper>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ width: '48%' }}>
            <ImageCard
              src="http://walker-markdown.oss-cn-shenzhen.aliyuncs.com/uPic/cristofer-jeschke-AqLIkOzWDAk-unsplash.jpg"
              title="商品标题1"
              desc="商品描述111"
            />
            <ImageCard
              src="http://walker-markdown.oss-cn-shenzhen.aliyuncs.com/uPic/milada-vigerova-p8Drpg_duLw-unsplash.jpg"
              title="商品标题2"
              desc="商品描述222"
            />
          </View>
          <View style={{ width: '48%' }}>
            <ImageCard
              src="http://walker-markdown.oss-cn-shenzhen.aliyuncs.com/uPic/milada-vigerova-p8Drpg_duLw-unsplash.jpg"
              title="商品标题3"
              desc="商品描述333"
            />
            <ImageCard
              src="http://walker-markdown.oss-cn-shenzhen.aliyuncs.com/uPic/cristofer-jeschke-AqLIkOzWDAk-unsplash.jpg"
              title="商品标题4"
              desc="商品描述444"
            />
          </View>
        </View>
      </View>
    );
  }
}
