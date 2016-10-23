var React=require('react');
var ReactNative=require('react-native');
var styles=require('../style/styles.js');
var {
  View,
  Text,
  Modal,
  Switch,
  PickerIOS,
  Slider,
  ProgressViewIOS,
  StatusBar,
  SegmentedControlIOS,
  TouchableHightlight,
  ScrollView,
  Alert
}=ReactNative;
//由父级控制显示与隐藏即可
var MODAL=React.createClass({
  show:function(){
    console.log('modal has showed')
  },
  render:function(){
    return (
        <View style={styles.sehModal}>
            <View style={styles.sehModalView}>
              <Text
                numberOfLines={5}
                style={[styles.text,styles.sehModalText]}
                onPress={this.props.press}
              >
                this is a modal
                my props:
                animationType
                translucent
                visible onShow
                and so on
              </Text>
            </View>
        </View>
    )
  }
})
module.exports=React.createClass({
  getInitialState:function(){
    return {modalState:false,pickerSwitch:false,sliderProgess:0,statusBarStyle:'default',
      statusBarHide:false
    }
  },
  showModal:function(){
    console.log('press')
    this.setState({modalState:true})
  },
  hideModal:function(){
    console.log('hide')
    this.setState({modalState:false})
  },
  changePS:function(){
    this.setState({pickerSwitch:!this.state.pickerSwitch})
  },
  changeSP:function(v){
    this.setState({sliderProgess:v})
  },
  selectStatusBar:function(v){
    console.log(v)
    if(v=='hide'){
      this.setState({statusBarHide:true})
    }else if(v=='show'){
      this.setState({statusBarHide:false})
    }else{
      this.setState({statusBarStyle:v})
    }
  },
  changeSegmented:function(v){
    Alert.alert('message','selected button is '+v)
  },
  render:function(){
    return (
      <ScrollView style={styles.sehView}>
        <Text style={styles.sehTitle}>modal demo</Text>
        <Text style={[styles.text]}
          onPress={this.showModal}
        >press me show modal</Text>
        <Modal
          animationType='slide'
          transparent={true}
          onShow={this.show}
          visible={this.state.modalState}
          >
          <MODAL press={this.hideModal}/>
        </Modal>
        <Text style={styles.sehTitle}>switch&pickerIOS demo</Text>
        <Switch
          value={this.state.pickerSwitch}
          onValueChange={this.changePS}
        />
        <View>
        <PickerIOS
          style={{width:300}}
          selectedValue={this.state.pickerSwitch}
          onValueChange={this.changePS}
          itemStyle={{fontSize:20,color:'#333',textAlign:'center'}}
        >
          <PickerIOS.Item
            key='0'
            label='open'
            value={true}
          />
          <PickerIOS.Item
            key='1'
            label='close'
            value={false}
          />
        </PickerIOS>
        </View>
        <Text style={styles.sehTitle}>slider&progressViewIOS demo</Text>
        <Slider value={this.state.sliderProgess}
          style={styles.sehSlider}
          step={5}
          onValueChange={this.changeSP}/>
        <ProgressViewIOS
          style={styles.sehSlider}
          progress={this.state.sliderProgess}
        />
        <ProgressViewIOS
          style={[styles.sehSlider,{marginTop:10}]}
          progress={this.state.sliderProgess}
          progressViewStyle='bar'
        />
        <Text style={styles.sehTitle}>statusBar&pickerIOS demo</Text>
        <StatusBar
          barStyle={this.state.statusBarStyle}
          animated={true}
          hidden={this.state.statusBarHide}
        />
        <PickerIOS
          style={styles.sehPicker}
          selectedValue={this.state.statusBarHide?'hide':'show'}
          onValueChange={this.selectStatusBar}
        >
          <PickerIOS.Item
            key='21'
            value='hide'
            label='statusBar hide'
          />
          <PickerIOS.Item
            key='31'
            value='show'
            label='statusBar show'
          />
        </PickerIOS>
        <PickerIOS
          style={styles.sehPicker}
          selectedValue={this.state.statusBarStyle}
          onValueChange={this.selectStatusBar}
        >
          <PickerIOS.Item
            key='01'
            value='default'
            label='statusBar defalut'
          />
          <PickerIOS.Item
            key='11'
            value='light-content'
            label='statusBar light-content'
          />
        </PickerIOS>
        <Text style={styles.sehTitle}>statusBar&pickerIOS demo</Text>
        <SegmentedControlIOS
          values={['button1','button2','button3']}
          selectedIndex={0}
          onValueChange={this.changeSegmented}
        />
      </ScrollView>
    )
  }
})
