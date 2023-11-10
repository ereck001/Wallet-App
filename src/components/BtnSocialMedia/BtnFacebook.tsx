import {
  Alert,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

import fbIcon from '../../assets/images/facebook.png'

import {Image} from 'expo-image'

export default () => {

  return <TouchableOpacity
      style={styles.container}
      onPress={() => Alert.alert('Facebook')}
    >
      <Image
        style={styles.image}
        source={fbIcon}
        contentFit="cover"
      />
      <Text  style={styles.text}>Facebook</Text>
    </TouchableOpacity>
}
const styles = StyleSheet.create({
  container:{
    marginTop:22,
    opacity: 1,
    flexDirection:'row',
    width:130,
    height: 60,
    borderRadius:15,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#4368C7'
  },
  image:{
    width:24,
    height:24
  },
  text:{
    marginLeft:7,
    fontSize:16,
    fontFamily:'Quicksand_500Medium',
    color:'#ffffff'
  }
})
