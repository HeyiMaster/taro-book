import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { connect } from '@tarojs/redux';
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
  componentWillMount() {}

  componentDidMount() {
    this.props.dispatch({ type: 'index/fetchList', payload: '123' });
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: '首页',
    navigationStyle: 'custom',
    navigationBarTextStyle: 'white',
  };

  render() {
    const { list, modelLoading, fetchListLoading } = this.props;
    const isWeapp = process.env.TARO_ENV === 'weapp';
    return (
      <View className="index">
        {/* <HeNavigator title="合一大师" backgroundColor="#00B388" color="#FFF" /> */}
        {/* <View style={{width: '300px', margin: '0 auto'}}>

        </View> */}
        <HeNavigator backgroundColor="#00B388">
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ marginRight: isWeapp ? '10px' : 10, color: '#FFFFFF' }}>分享</Text>
            <View style={{ flex: 1 }}>
              <HeSearch placeholder="请输入关键词" />
            </View>
          </View>
        </HeNavigator>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ width: '48%', alignSelf: 'stretch' }}>
            <ImageCard src="http://walker-markdown.oss-cn-shenzhen.aliyuncs.com/uPic/cristofer-jeschke-AqLIkOzWDAk-unsplash.jpg" />
          </View>
          <View style={{ width: '48%' }}>
            <ImageCard src="http://walker-markdown.oss-cn-shenzhen.aliyuncs.com/uPic/milada-vigerova-p8Drpg_duLw-unsplash.jpg" />
          </View>
        </View>
      </View>
    );
  }
}
