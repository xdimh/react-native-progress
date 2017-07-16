/**
 * 样式值根据屏幕宽度自适应文件
 * @author xdimh (http://weeklyweb.info/)
 * @log
 */

'use strict';

import {
    Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');
const iPhone6Width = 375;  // iPhone6 窗口宽度
const iPhone6Height = 667; // iPhone6 窗口高度
const windowWidthScale = width / iPhone6Width;
const windowHeightScale = height / iPhone6Height;


// CalcPixelWidth & CalcPixelHeight
export const calcPixelWidth = pixel => {
    return windowWidthScale * pixel;
};

export const calcPixelHeight = pixel => {
    return windowHeightScale * pixel;
};


// Width & Height
export const width = width => {
    return calcPixelWidth(width);
};

export const height = height => {
    return calcPixelWidth(height);
};


// Top & Right & Bottom & Left
export const top = top => {
    return calcPixelWidth(top);
};

export const right = right => {
    return calcPixelWidth(right);
};

export const bottom = bottom => {
    return calcPixelWidth(bottom);
};

export const left = left => {
    return calcPixelWidth(left);
};


// Margin
export const margin = margin => {
    return calcPixelWidth(margin);
};

export const marginTop = marginTop => {
    return calcPixelWidth(marginTop);
};

export const marginRight = marginRight => {
    return calcPixelWidth(marginRight);
};

export const marginBottom = marginBottom => {
    return calcPixelWidth(marginBottom);
};

export const marginLeft = marginLeft => {
    return calcPixelWidth(marginLeft);
};

export const marginVertical = marginVertical => {
    return calcPixelWidth(marginVertical);
};

export const marginHorizontal = marginHorizontal => {
    return calcPixelWidth(marginHorizontal);
};


// Padding
export const padding = padding => {
    return calcPixelWidth(padding);
};
export const paddingTop = paddingTop => {
    return calcPixelWidth(paddingTop);
};

export const paddingRight = paddingRight => {
    return calcPixelWidth(paddingRight);
};

export const paddingBottom = paddingBottom => {
    return calcPixelWidth(paddingBottom);
};

export const paddingLeft = paddingLeft => {
    return calcPixelWidth(paddingLeft);
};

export const paddingVertical = paddingVertical => {
    return calcPixelWidth(paddingVertical);
};

export const paddingHorizontal = paddingHorizontal => {
    return calcPixelWidth(paddingHorizontal);
};


// FontSize & LineHeight
export const fontSize = fontSize => {
    return calcPixelWidth(fontSize);
};

export const lineHeight = (fontSize, lineHeight) => {
    lineHeight = lineHeight || 1.5;
    return parseInt(calcPixelWidth(fontSize) * lineHeight);
};


// borderRadius
export const borderRadius = borderRadius => {
    return calcPixelWidth(borderRadius);
};
