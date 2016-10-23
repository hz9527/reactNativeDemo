import React,{Component} from 'react';
import styles from '../style/styles.js';
import {
  Modal,
  View,
  Image,
  CameraRoll,
  TouchableOpacity,
  Text
}from 'react-native';

export default class Add extends Component{
  choosePicture=function(){
    console.log(CameraRoll)
  }
  render(){
    return (
      <Modal
        visible={this.props.show}
        animationType='fade'

      >
      <View style={styles.addModal}>
        <TouchableOpacity
          style={styles.addChoose}
          onPress={this.choosePicture}
        >
          <Image style={styles.addImage} source={require('../images/icon/picture.png')}/>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addClose}
          onPress={this.props.close}
        >
          <Image source={require('../images/icon/close.png')}/>
        </TouchableOpacity>
      </View>
      </Modal>
    )
  }
}
