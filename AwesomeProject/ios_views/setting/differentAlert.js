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
    Image,
    ScrollView,
    TouchableOpacity,
    TouchableHighlight,
    ListView,
    AlertIOS
} from 'react-native';


var REQUEST_URL = 'https://raw.githubusercontent.com/LeoMobileDeveloper/React-Native-Files/master/person.json';
//工具类
import Uitls from '../../common/utils';


var getView = React.createClass({
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
        return this.renderList()
    },

    renderList(){
        return (
            <Image source={require('../../images/background.png')} style={styles.backgroundImg}>
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
            // component: DetailScreen,
            passProps: {user:user},
        });
    },
});

class differentAlert extends Component {

    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                    component: getView,
                    title: 'thenGet',
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