import { Image } from "expo-image"
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from "react-native"
import HeaderWithBtn from "../components/HeaderWithBtn"

const windowHeight = Dimensions.get('window').height

export default (props :any)=> {
  return <View style={styles.container}>
    <HeaderWithBtn
      onClick={() => props.navigation.navigate("Home")}
    />
    <Text style={styles.title}>Add Card</Text>
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={require('../assets/images/card.svg')}
      />
    </View>
    <Text style={styles.bottomText}>
      Add a new card {"\n"} on your wallet for easy life
    </Text>
  </View>
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center'
  },
  title:{
    textAlign:'center',
    marginTop: windowHeight * 0.05,
    fontSize:24,
    color:'#130138',
    fontFamily:'Rubik_500Medium'
  },
  imageContainer:{
    marginTop: windowHeight * 0.08
  },
  image:{
    marginTop: windowHeight * 0.06,
    height:240,
    width:340,
    transform: [{ rotate: '270deg' }],
  },
  bottomText:{
    marginTop: windowHeight * 0.14,
    fontSize:16,
    fontFamily: 'Quicksand_500Medium',
    color:'#000',
    textAlign:'center'
  }
})
