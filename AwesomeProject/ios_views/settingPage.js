import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
    Image,
    ScrollView,
    TouchableOpacity,
    AlertIOS
} from 'react-native';

//工具类
import Uitls from '../common/utils';
//详情模块
import About from './setting/about';
import Help from './setting/help';
import Detail from './setting/detail';
import ThenGet from './setting/thenGet';
import Alerts from './setting/differentAlert';
import PlayVideo from './../publicViews/playVideo';

//设置模块
class settingView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={styles.container}>

                <TouchableOpacity style={styles.image_view}>
                    <Image style={styles.icon} source={require('image!logo')} esizeMode="contain"/>
                    <Text style={styles.version}>V1.0.0</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.text_view,styles.text_margin]}
                    onPress={this._showDetail.bind(this, About, "功能介绍")}>
                    <Text style={styles.text}>功能介绍</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.text_view]}
                    onPress={this._showDetail.bind(this, Help, "帮助中心")}>
                    <Text style={styles.text}>帮助中心</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.text_view]}
                    onPress={this._showDetail.bind(this, Detail, "服务条款")}>
                    <Text style={styles.text}>服务条款</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.text_view]}
                    onPress={this._showAuthor}>
                    <Text style={styles.text}>关于</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.text_view, styles.text_view_bottom]}
                    onPress={this._showDetail.bind(this, ThenGet, "thenGet")}>
                    <Text style={styles.text}>thenGet</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.text_view, styles.text_view_bottom]}
                    onPress={this._showDetail.bind(this, Alerts, "listView")}>
                    <Text style={styles.text}>listView</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.text_view, styles.text_view_bottom]}
                    onPress={this._showDetail.bind(this, PlayVideo, "playVideo")}>
                    <Text style={styles.text}>playVideo</Text>
                </TouchableOpacity>


            </ScrollView>
        );
    }

    //显示详情
    _showDetail(module, title) {
        //路由跳转
        this.props.navigator.push({
            component: module,
            title: title,
            barTintColor: '#fff'
        });
    }

    //显示邮箱信息
    _showAuthor() {
        AlertIOS.alert('邮箱地址', '18241893015@163.com');
    }

}

class settingPage extends Component {

    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                    component: settingView,
                    title: '设置',
                    navigationBarHidden:false
                }}
                style={{flex: 1}}/>
        );
    }

}

//样式表
const styles = StyleSheet.create({
    container: {
        paddingLeft: 0,
        paddingRight: 0
    },
    image_view: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30
    },
    text_view: {
        borderTopWidth: Uitls.pixel,
        borderTopColor: "#ccc",
        height: 44,
        justifyContent: "center",
        paddingLeft: 20
    },
    text_margin: {
        marginTop: 30
    },
    text_view_bottom: {
        borderBottomWidth: Uitls.pixel,
        borderBottomColor: "#ccc"
    },
    text: {
        fontSize: 16,
        fontWeight: "400",
        color: "#666666"
    },
    version: {
        color: "#666666"
    },
    icon: {
        width: 88,
        height: 100
    }

});

module.exports = settingPage;