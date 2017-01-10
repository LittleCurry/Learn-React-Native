/**
 * Created by liyunpeng on 17/1/9.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    ListView,
    View,
    Image,
} from 'react-native';


export default class Item_MyListView extends React.Component{


    render(){
        return (
            <View style={{flex:1}}>
            </View>
        );
    }
}

AppRegistry.registerComponent('Item_MyListView', () => Item_MyListView);