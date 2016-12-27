/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    ListView,
    Text,
    View,
    Image,
    ActivityIndicatorIOS,
    Navigator,
    TouchableHighlight,
    TouchableOpacity,
    NavigatorIOS,
} from 'react-native';

var REQUEST_URL = 'https://raw.githubusercontent.com/LeoMobileDeveloper/React-Native-Files/master/person.json';

var ListScreen = React.createClass({

    getInitialState: function() {
        return {
            loaded: false,
            users: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
        };
    },

    componentDidMount() {
        this.fetchData();
    },
    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    users: this.state.users.cloneWithRows(responseData),
                    loaded: true,
                });
            })
            .done();
    },

    render(){
        if (!this.state.loaded) {
             return this.renderLoadingView()
        }
        return this.renderList()
    },

    renderLoadingView() {
        return (
            // 注释很奇怪, 普通注释直接报错, 只能用下面的方式注释
        /*<ActivityIndicatorIOS
            style={[styles.centering, {height: 80}]}
            size="large"
            color="#ffffff"
        />
            <View style={styles.horizontal}>
                <ActivityIndicatorIOS color="#0000ff" />
                <ActivityIndicatorIOS color="#aa00aa" />
                <ActivityIndicatorIOS color="#aa3300" />
                <ActivityIndicatorIOS color="#00aa00" />
            </View> */
        
            <Image source={require('./images/background.png')} style={styles.backgroundLoading}>

            </Image>
        );
    },

    renderList(){
        return (
            <Image source={require('./images/background.png')} style={styles.backgroundImg}>
                <ListView
                    dataSource={this.state.users}
                    renderRow={this.renderRow}
                    style={styles.fullList}
                    renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator} />}
                />
            </Image>
        );
    },

    renderRow(user){
        return (
            <TouchableHighlight
                onPress={() => this.rowClicked(user)}
                underlayColor = '#ddd'>
                <View style={styles.rightCongtainer}>
                    <Text style={styles.whiteText}>{user.nickname}</Text>
                    <Text style={styles.whiteText}>{user.realname}</Text>
                </View>
            </TouchableHighlight>
        );
    },

    rowClicked(user){
        console.log(user);
        this.props.navigator.push({
            title: "详情页",
            component: DetailScreen,
            passProps: {user:user},
        });
    },

});

var DetailScreen = React.createClass({
    render(){
        return (
            <View style= {styles.container}>
                <Text style={styles.blackText}>{this.props.user.nickname}</Text>
                <Text style={styles.blackText}>{this.props.user.realname}</Text>
            </View>
        );
    }
});

export default class AwesomeProject extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    title: '主页',
                    component: ListScreen,
                }}
            />
        );
    }
}

const styles = StyleSheet.create({
    backgroundImg:{
        flex:1,
        width: null,
        height: null,
        flexDirection: 'row'
    },
    backgroundLoading:{
        flex:1,
        width: null,
        height: null,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    thumbnail: {
        width: 60,
        height: 60,
    },
    rightCongtainer:{
        flex:1,
    },
    fullList:{
        flex:1,
        paddingTop: 64,
    },
    separator: {
        height: 0.5,
        backgroundColor: 'rgba(255,255,255,0.5)',
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    whiteText:{
        fontSize:20,
        color:'rgb(255,255,255)',
        backgroundColor:'rgba(255,255,255,0)',
        textAlign:'left',
        marginLeft:10,
    },
    blackText:{
        fontSize:20,
        color:'rgb(0,0,0)',
        backgroundColor:'rgba(255,255,255,0)',
        textAlign:'center',
        marginLeft:10,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);