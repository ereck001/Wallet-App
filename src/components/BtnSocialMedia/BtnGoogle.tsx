import {
  Alert,
  Text,
  TouchableOpacity,
  StyleSheet,
  View
} from 'react-native'

import googleIcon from '../../assets/images/google.png'

import {Image} from 'expo-image'

export default () => {

  return <View style={styles.conantainerShadow}>
    <TouchableOpacity
      style={styles.container}
      onPress={() => Alert.alert('Google')}
    >
      <Image
        style={styles.image}
        source={googleIcon}
        contentFit="cover"
      />
      <Text  style={styles.text}>Google</Text>
    </TouchableOpacity>
  </View>
}
const styles = StyleSheet.create({
  conantainerShadow:{
    marginTop:22,
    width:133,
    height: 63,
    borderRadius:15,
    alignItems:'center',
    justifyContent:'center',
    //android shadows
    elevation:9,
    shadowColor: '#afafaf',
  },
  container:{
    flexDirection:'row',
    width:130,
    height: 60,
    borderRadius:15,
    alignItems:'center',
    justifyContent:'center',
    //ios shadows
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor:'white'

  },
  image:{
    width:24,
    height:24
  },
  text:{
    marginLeft:7,
    fontSize:16,
    fontFamily:'Quicksand_500Medium',
    color:'#bdbdbd'
  }
})
