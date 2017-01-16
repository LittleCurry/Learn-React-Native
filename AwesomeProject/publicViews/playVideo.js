/**
 * Created by liyunpeng on 17/1/13.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
    Video
} from 'react-native';




class Vlcplayer extends Component {

    render() {
        const uri = 'http://cdn.goluk.cn/video/t1_2.mp4';
        return (
            <View>
                <SimpleVideo uri={uri} buttonSize={50} />
                <Text>A Simple Player</Text>
                <View style={{marginTop:50}} />
                <Video uri={uri} />
                <Text>A full-featured player</Text>
            </View>
        );
    }
}

module.exports = Vlcplayer