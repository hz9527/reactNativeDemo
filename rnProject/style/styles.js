var React=require('react');
var ReactNative=require('react-native');
var {
  StyleSheet,
  PixelRatio,
  Dimensions
}=ReactNative;
const DeviceWidth=Dimensions.get('window').width;
module.exports=StyleSheet.create({
  //index style
  tabbar:{
    backgroundColor:'rgba(238,238,238,0.2)'
  },
  /***end index style*****************/


  //message style
  mes:{
    flexWrap:'wrap',
    alignItems:'flex-start'
  },
  msgItem:{
    flex:0,
    alignSelf:'center',
    marginTop:20,
    marginBottom:20,
  },
  msgSmall:{
    width:100,
    height:100,
  },
  msgBig:{
    width:300,
    height:300,
  },
  msgText:{
    alignSelf:'flex-end',
    paddingRight:20,
    paddingLeft:20,
  },
  /***end message style***************/
  //add style
  addModal:{
    paddingTop:30,
    flex:1,
    paddingBottom:20,
    flexWrap:'wrap',
  },
  addChoose:{
    flex:1,
    alignSelf:'center',
    flexDirection:'column',
    justifyContent:'center'
  },
  addImage:{
    width:100,
    height:75,
  },
  addClose:{
    alignSelf:'center'
  },
  /***end add style***************/
  //search style
  sehView:{
    flexWrap:'wrap',
    paddingTop:30,
    paddingBottom:50,
  },
  sehTitle:{
    flex:1,
    alignSelf:'center',
    height:20
  },
  sehModal:{
    backgroundColor:'rgba(100,100,100,0.3)',
    flex:1,
    paddingTop:200,
  },
  sehModalView:{
    alignSelf:'center',
    backgroundColor:'#fff',
    width:DeviceWidth/3*2,
    flexWrap:'wrap',
    padding:5,
    borderRadius:10,
  },
  sehModalText:{
    flexWrap:'wrap',
  },
  sehSlider:{
    width:DeviceWidth,
  },
  sehPicker:{
    width:DeviceWidth,
    flex:0,
  },
  /***end search style**************/


  //setting style
  setView:{
    paddingTop:30,
  },
  /***end setting style***********/
  //comment
  text:{
    fontSize:20,
    color:'#0ff'
  }
});
//export default styles;
