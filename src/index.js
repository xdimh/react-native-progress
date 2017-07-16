/**
 * 进度条逻辑
 * @author xdimh (http://weeklyweb.info/)
 * @log
 * @example
 * @property
 * start 进度条起始位置,可选默认为0
 * end 进度条终止位置,可选默认为1
 * showPercentage 是否显示百分比
 * animated 是否开启动画
 * borderStyle 进度条槽边框样式用来覆盖默认样式
 * fillStyle 进度条填充样式用来覆盖默认样式
 * percentageStyle 进度条如果显示百分比,百分比样式
 * width 进度条宽度
 * height 进度条高度
 * easing 动画类型
 * duration 动画时间
 */

import React, {Component, PropTypes} from 'react';
import {
  View,
  Animated,
  Easing,
  Text,
  Platform
} from 'react-native';

import styles from './style';
import BarText from './bar-text.js';

const AnimatedBarText = Animated.createAnimatedComponent(BarText);

export default class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finish : false,
      progress : new Animated.Value(props.start)
    };
  }

  static defaultProps = {
    start : 0,
    end : 1,
    animated : true,
    showPercentage : true,
    width : 96,
    height : 14,
    duration : 1000,
    easing : Easing.linear
  };

  static propTypes = {
    start : PropTypes.number,
    end : PropTypes.number,
    width : PropTypes.number.isRequired,
    height : PropTypes.number,
    showPercentage : PropTypes.bool,
    animated : PropTypes.bool,
    borderStyle : PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.number
    ]),
    fillStyle : PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.number
    ]),
    percentageStyle : PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.number
    ])
  };

  startMotion() {
    let end = this.props.end;

    Animated.timing(this.state.progress, {
      easing: this.props.easing ,
      duration: this.props.duration,
      toValue: end
    }).start((result) => {

    });
  }

  componentDidMount() {
    if(this.props.animated) {
      this.startMotion();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    let props = this.props;
    if (props.end >= 0 && props.end <= 1 && props.end != prevProps.end && props.animated) {
      this.startMotion();
    }
  }

  componentWillUnMount() {
    this.state.progress.stopAnimation();
  }

  /**
   * 对大于1的数据进行修正
   * @param val
   * @returns {*}
   */

  amendData(val) {
    if(val > 1) {
      return 1;
    } else {
      return val;
    }
  }

  renderPercentage() {
    let props = this.props;
    if(props.showPercentage) {
      if(props.animated) {
        return (<AnimatedBarText ratio={this.state.progress}/>);
      } else {
        return (<Text style={[styles.barTxt,props.percentageStyle || {}]}>{(this.amendData(props.end)  * 100).toFixed(0) + '%'}</Text>);
      }
    } else {
      return null;
    }
  }

  renderFill(fillWidth) {
    let props = this.props;
    if(props.animated) {
      return (
        <Animated.View style={[styles.fill,props.fillStyle || {},this.amendData(props.end) == 1 ? styles.fillHackStyleForAndroid : {},{width : fillWidth,height:props.height-2 }]} />
      )
    } else {
      return (
        <View style={[styles.fill,props.fillStyle || {}, this.amendData(props.end) == 1 ? styles.fillHackStyleForAndroid : {},{width : props.end * props.width,height:props.height-2}]} />
      )
    }
  }

  render() {
    let props = this.props,
      startWidth = 0, endWidth = 1*props.width,
      end = props.end;
    if(Platform.OS === 'android') {
      if(end != 0) {
        startWidth = 5;
      }
      if(end <= 0.99) {
        endWidth = 0.96 * props.width;
      } else {
        endWidth = 0.99 * props.width;
      }
    }

    if(Platform.OS === 'ios') {
      if(end <= 0.99) {
        endWidth = 0.96 * props.width;
      }
    }

    let fillWidth = this.state.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [startWidth, endWidth],
    });
    return (
      <View style={[styles.slot,props.borderStyle || {},{ width: props.width,height:props.height }]}>
        {this.renderPercentage()}
        {this.renderFill(fillWidth)}
      </View>
    )
  }
}
