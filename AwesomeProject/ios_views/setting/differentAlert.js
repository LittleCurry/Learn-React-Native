/**
 * Created by liyunpeng on 16/12/28.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ListView,
} from 'react-native';

import Item_MyListView from './Item_MyListView';

export default class DifferentAlert extends React.Component{

    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this._genRows()),
        };


    }

    _genRows(){
        const dataBlob = [];
        for(let i = 0 ; i< 200 ; i ++ ){
            dataBlob.push("aa"+i);
        }
        return dataBlob;
    }

    _pressRow(rowID){
        alert("hellow"+rowID);
    }

    _renderRow(rowData, sectionID, rowID){
        return (
            <TouchableOpacity onPress={()=>this._pressRow(rowID)}>
                <View>
                    <Text>{"rowData:"+rowData+"   rowId:"+rowID}</Text>
                    <Item_MyListView info={rowData}></Item_MyListView>
                </View>
            </TouchableOpacity>
        );
    }

    render(){
        return (
            <View style={{flex:1,}}>
                <ListView dataSource={this.state.dataSource} renderRow={this._renderRow.bind(this)}/>
            </View>
        );
    }
}

React.AppRegistry.registerComponent('DifferentAlert', function() { return DifferentAlert });
// AppRegistry.registerComponent('DifferentAlert', () => DifferentAlert);


