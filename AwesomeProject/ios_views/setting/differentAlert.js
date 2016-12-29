/**
 * Created by liyunpeng on 16/12/28.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
    ScrollView,
    TouchableOpacity,
    AlertIOS
} from 'react-native';

//工具类
import Uitls from '../../common/utils';


class getView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <ScrollView style={styles.container}>

                <TouchableOpacity style={[styles.text_view, styles.text_margin]} onPress={this._showAlert()}>
                    <Text style={styles.text}>普通提示框</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.text_view]}>
                    <Text style={styles.text}>输入提示框</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.text_view]}>
                    <Text style={styles.text}>提示列表菜单</Text>
                </TouchableOpacity>


                <TouchableOpacity style={[styles.text_view, styles.text_view_bottom]}>
                    <Text style={styles.text}>分享弹出框</Text>
                </TouchableOpacity>

            </ScrollView>
        );
    }

    //显示邮箱信息
    _showAlert() {
        AlertIOS.alert('邮箱地址', '123456');
    }

}

class differentAlert extends Component {

    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                    component: getView,
                    title: '设置',
                    navigationBarHidden:true
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

module.exports = differentAlert;