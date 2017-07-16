/**
 * 进度条样式文件
 * @author xdimh (http://weeklyweb.info/)
 * @log
 */


import {
  StyleSheet,
  Platform
} from 'react-native';

// App Globals
import * as appMixins from './mixins';

const styles = StyleSheet.create({
  barTxt : {
    fontSize:8,
    color:'#fff',
    zIndex:10,
    backgroundColor:'transparent',
    fontWeight:'bold'
  },
  slot : {
    justifyContent : 'center',
    alignItems : 'center',
    position:'relative',
    overflow : 'hidden',
    borderWidth : 1,
    borderStyle : 'solid',
    borderColor : '#ff5793',
    backgroundColor : '#ffd2e2',
    borderRadius : appMixins.height(13),
  },
  fill : {
    position:'absolute',
    top:0,
    alignSelf:'flex-start',
    backgroundColor : '#ff5793',
    ...Platform.select({
      android: {
        borderRadius : appMixins.height(12),
        borderTopRightRadius : 0,
        borderBottomRightRadius : 0,
      }
    })
  },
  fillHackStyleForAndroid : {
    ...Platform.select({
      android: {
        borderTopRightRadius : appMixins.height(12),
        borderBottomRightRadius : appMixins.height(12),
      }
    })
  }
});

export default styles;
