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

// import { Video } from 'react-native-video';
// import VideoPlayer from 'react-native-video-player';

// const VIMEO_ID = '179859217';




class Vlcplayer extends Component {

    render() {
        const uri = 'http://cdn.goluk.cn/video/t1_2.mp4';
        /*
         <SimpleVideo uri={uri} buttonSize={50} />
         <Text>A Simple Player</Text>
         <View style={{marginTop:50}} />
         <Video uri={uri} />
         <Text>A full-featured player</Text>
         */
        // 播不出视频的原意和video-player的安装使用有关
        //
        //
        //
        return (
            <View>


            </View>
        );
    }
}

module.exports = Vlcplayer