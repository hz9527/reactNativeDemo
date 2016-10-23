import React,{Component} from 'react';
import styles from '../style/styles.js';
import {
  View,
  Text,
  Vibration,
  AppState,
  Switch,
  AlertIOS
}from 'react-native';
export default class Setting extends Component{
  state={vibration:false,geolcation:false,data:'none'}
  showAppState=function(){
    AlertIOS.alert('message',AppState.currentState);
  };
  watchId=null;
  vibrationOrCancel=function(o,v){
    if(v===true){
      Vibration.vibrate([0,1000,3000]);
    }else{
      Vibration.cancel();
    }
    this.setState({vibration:!this.state.vibration})
  };
  showOrHideGeo=function(){
    var that=this;
    if(!this.state.geolcation){
      this.watchId=navigator.geolocation.watchPosition(function(pos){
        that.setState({data:JSON.stringify(pos)});
        console.log(JSON.stringify(pos))
      },function(pos){
        AlertIOS.alert('message','failed')
      })
    }else{
      navigator.geolocation.clearWatch(this.watchId);
    }
    this.setState({geolcation:!this.state.geolcation})
  }
  render(){
    return (
      <View style={styles.setView}>
        <Text style={styles.sehTitle}>a button contol AlertIOS and show appState</Text>
        <Text
          style={styles.text}
          onPress={this.showAppState}
        >press and show appState</Text>
        <Text style={styles.sehTitle}>a switch contol Vibration</Text>
        <Switch
          value={this.state.vibration}
          onValueChange={this.vibrationOrCancel.bind(this)}/>
        <Text style={styles.sehTitle}>a switch contol Geolocation</Text>
        <Switch
          value={this.state.geolcation}
          onValueChange={this.showOrHideGeo.bind(this)}
        />
        {this.state.geolcation?(
          <View>
            <Text>
              {this.state.data}
            </Text>
          </View>
        ):null}
      </View>
    )
  }
}
