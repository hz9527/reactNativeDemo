/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
var styles=require('./style/styles.js');
import Message from './views/message.js';
var Search=require('./views/search.js');
import Setting from './views/setting.js';
import Add from './views/add.js';
import {
  AppRegistry,
  TabBarIOS,
  View
} from 'react-native';
var that;
export default class rnProject extends Component {
  _press=(name)=>{
    this.setState({tab:name});
  };
  pressAdd=function(name){
    this.oldTab=this.state.tab;
    this.setState({tab:name,showAdd:true});
  }
  oldTab='index';
  state={tab:'index',showAdd:false};
  closeAdd=function(){
    //this.refs.add.props.show=false;
    var that=this;
    this.setState({showAdd:false});
    setTimeout(function(){
      that.setState({tab:that.oldTab});
    },100);
  }
  render() {
    return (
      <TabBarIOS
        // barTintColor='rgba(238,238,238,0.2)'
        // translucent={true}
        style={styles.tabbar}
        tintColor='#f90'
      >
        <TabBarIOS.Item
          icon={require('./images/icon/index.png')}
          title='首页'
          selected={this.state.tab=='index'}
          selectedIcon={require('./images/icon/indexActive.png')}
          onPress={this._press.bind(this,'index')}
        >
          <View></View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('./images/icon/message.png')}
          title='消息'
          selected={this.state.tab=='message'}
          selectedIcon={require('./images/icon/messageActive.png')}
          onPress={this._press.bind(this,'message')}
        >
          <Message></Message>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('./images/icon/add.png')}
          selected={this.state.tab=='add'}
          onPress={this.pressAdd.bind(this,'add')}
          renderAsOriginal={true}
        >
          <Add close={this.closeAdd.bind(this)} show={this.state.showAdd} />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('./images/icon/search.png')}
          title='搜索'
          selected={this.state.tab=='search'}
          selectedIcon={require('./images/icon/searchActive.png')}
          onPress={this._press.bind(this,'search')}
        >
          <Search/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('./images/icon/setting.png')}
          title='设置'
          selected={this.state.tab=='setting'}
          selectedIcon={require('./images/icon/settingActive.png')}
          onPress={this._press.bind(this,'setting')}
        >
          <Setting/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}


AppRegistry.registerComponent('rnProject', () => rnProject);
