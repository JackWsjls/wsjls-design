import React from 'react';
import './index.scss';
interface Props {
    /**
     * 返回上一页面点击事件
     */
    onNavigateBack?: () => void;
    /**
     * 导航栏标题
     */
    title?: string;
    /**
     * (default: 20px) 状态栏高度
     */
    statusBarHeight?: number;
    /**
     * (default: iOS 44px, Android 48px) 导航栏高度
     */
    height?: number;
    /**
     * (default: #fff) 导航栏背景颜色，如 #000000
     */
    backgroundColor?: string;
    /**
     * (default: black) 导航栏标题颜色
     */
    textColor?: string;
    /**
     * (default: 17px) 导航栏标题字体大小
     */
    fontSize?: number;
    /**
     * (default: bold) 导航栏标题字重
     */
    fontWeight?: number | 'normal' | 'bold' | 'bolder' | 'lighter';
    /**
     * (default: #000000) 前景颜色值，包括按钮、状态栏的颜色，仅支持 #ffffff 和 #000000
     */
    navigationBarTextStyle?: '#ffffff' | '#000000';
}
export default class NavBar extends React.PureComponent<Props> {
    static defaultProps: Props;
    constructor(props: Props | Readonly<Props>);
    handleNavigateBack: () => void;
    render(): JSX.Element;
}
export {};
