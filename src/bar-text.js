/**
 * 进度条百分比显示
 * @author xdimh (http://weeklyweb.info/)
 * @log
 */


import React, {
  Component,
  PropTypes
} from 'react';
import {
  Text
} from 'react-native';
import styles from './style';

export default class BarText extends Component {
  static defaultProps = {};

  static propTypes = {
    ratio : PropTypes.number.isRequired
  };

  /**
   * 构造器函数
   * @param {Object} props 属性
   */
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * 渲染函数
   */
  render() {
    let { ratio } = this.props;
    return (
      <Text style={[styles.barTxt,this.props.style || {}]}>{(ratio * 100).toFixed(0) + '%'}</Text>
    )
  }
}
