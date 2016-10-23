var React=require('react');
var ReactNative=require('react-native');
var styles=require('../style/styles.js')
var {
  ScrollView,
  Image,
  Text,
  AlertIOS
}=ReactNative;
module.exports=React.createClass({
  loadStart:function(){
    console.log('start load image');

  },
  load:function(){
    AlertIOS.alert('message','load message successful')
  },
  loadEnd:function(){
    console.log('load end')
  },
  pressToTop:function(){
    this.refs.scroll.scrollTo({y:0,animated:true});
  },
  render:function(){
    return (
      <ScrollView
        style={styles.msg}
        scrollToTop={true}
        ref='scroll'
      >
        <Image source={require('../images/user/user1.jpg')}
        style={[styles.msgItem,styles.msgSmall]} />
        <Image source={require('../images/user/user2.jpg')}
        style={[styles.msgItem,styles.msgBig]} />
        <Image source={require('../images/user/user3.jpeg')}
        style={[styles.msgItem,styles.msgBig]} >
          <Text style={styles.text}>这一张是背景图片</Text>
        </Image>
        <Image source={{uri:'https://img10.360buyimg.com/imgzone/jfs/t1798/106/1309313565/138263/e429478c/55e69fc2N031b4a64.jpg'}}
          style={[styles.msgItem,styles.msgBig]}
          defalutSource={require('../images/user/user4.jpg')}
          onLoadStart={this.loadStart}
          onLoad={this.load}
          onLoadEnd={this.loadEnd}
        />
        <Text
          style={[styles.text,styles.msgText]}
          onPress={this.pressToTop}
          numberOfLines={2}
        >click status can to top,click me to top too</Text>
      </ScrollView>
    )
  }
});
