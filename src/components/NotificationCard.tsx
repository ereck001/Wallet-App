import {
  Alert,
  Text,
  TouchableOpacity,
  StyleSheet,
  View
} from 'react-native'

import { ArrowCircleUp } from 'iconsax-react-native'

export default () => {

  return <View style={styles.conantainerShadow}>
    <TouchableOpacity
      style={styles.container}
      onPress={() => Alert.alert('Notification')}
    >
      <View style={styles.textSection}>
        <Text style={styles.text}>29 June 2021, 7.14 PM</Text>
        <Text style={styles.mainText}>You received Rp 100.000 from Alexandr Gibson Jogja</Text>
        <Text style={styles.text}>‘Pay debt’</Text>
      </View>
      <View>
        <ArrowCircleUp
          size={20}
          color='#56BE15'
        />
      </View>

    </TouchableOpacity>
  </View>
}
const styles = StyleSheet.create({
  conantainerShadow:{
    marginTop:22,
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
