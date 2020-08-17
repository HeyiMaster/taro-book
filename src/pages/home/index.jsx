import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import HeNavigator from '../../components/HeNavigator';
import HeSearch from '../../components/HeSearch';
// import MNavigator from '../../components/mnavigator/index';
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
  };

  render() {
    const { list, modelLoading, fetchListLoading } = this.props;
    return (
      <View className="index">
        {/* <HeNavigator title="合一大师" backgroundColor="#00B388" color="#FFF" /> */}
        {/* <View style={{width: '300px', margin: '0 auto'}}>

        </View> */}
        <HeNavigator>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ marginRight: '10px' }}>分</Text>
            <View style={{ width: '100%' }}>
              <HeSearch placeholder="请输入关键词" />
            </View>
          </View>
        </HeNavigator>
      </View>
    );
  }
}
