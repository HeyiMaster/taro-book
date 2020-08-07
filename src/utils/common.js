import Taro from '@tarojs/taro';

/**
 * 安全区域
 */
function getSafeArea() {
  console.log('Taro.getSystemInfoSync(): ', Taro.getSystemInfoSync());
  const isWeapp = Taro.getEnv() === 'WEAPP';
  const { safeArea, statusBarHeight, screenHeight } = Taro.getSystemInfoSync();
  if (isWeapp) {
    /**
     * 获取安全区域位置，top
     */
    const { top: topGap, bottom, height } = safeArea;
    /**
     * 安全区域到屏幕底部区域，用于适配全面屏
     */
    const bottomGap = screenHeight - bottom;
    return {
      topGap,
      bottomGap,
      height,
    };
  } else {
    return { topGap: statusBarHeight, bottomGap: 0, height: screenHeight };
  }
}

/**
 * 获取菜单胶囊信息
 */
function getMenuArea() {
  return Taro.getMenuButtonBoundingClientRect();
}
export { getSafeArea, getMenuArea };
