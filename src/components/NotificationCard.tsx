import {
  Alert,
  Text,
  TouchableOpacity,
  StyleSheet,
  View
} from 'react-native'

import { ArrowCircleUp, ArrowCircleDown } from 'iconsax-react-native'

export default (props: any) => {

  return <View style={styles.conantainerShadow}>
    <TouchableOpacity
      style={styles.container}
      //onPress={() => Alert.alert('Notification')}
    > 
      {
        props.isNew ?
        <Text style={styles.dot}>.</Text> :
        false
      }
      <View style={styles.textSection}>
        <Text style={styles.text}>{props.headerText}</Text>
        <Text style={styles.mainText}>{props.bodyText}</Text>
        <Text style={styles.text}>{props.footerText}</Text>
      </View>
      <View>
        {
          props.isReceived ?
          <ArrowCircleUp
            size={20}
            color='#56BE15'
          /> :
          <ArrowCircleDown
            size={20}
            color='#FF3333'
          />
        }
      </View>
    </TouchableOpacity>
  </View>
}
const styles = StyleSheet.create({
  conantainerShadow:{
    marginTop:12,
    width:313,
    height: 90,
    borderRadius:15,
    alignItems:'center',
    justifyContent:'center',
    //android shadows
    elevation:9,
    shadowColor: '#afafaf',
  },
  container:{
    flexDirection:'row',
    width: 310,
    height: 88,
    borderRadius:15,
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:20,
    paddingVertical:12,
    //ios shadows
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor:'white'

  },
  dot:{
    fontSize:80,
    color: '#f00',
    position: 'absolute',
    top: 1,
    right: 8,
    marginTop: -78
  },
  textSection:{
    height:'100%',
    justifyContent:'space-around',
  },
  text:{    
    marginLeft:7,
    fontSize:10,
    fontFamily:'Quicksand_500Medium',
    color:'#BDBDBD'
  },
  mainText:{
    marginLeft:7,
    fontSize:13,
    fontFamily:'Quicksand_500Medium',
    color:'#363853',
    //flexWrap:'wrap',
    width: 200
  }
})
