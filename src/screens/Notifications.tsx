import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native"

import HeaderWithBtn from "../components/HeaderWithBtn"
import NotificationCard from "../components/NotificationCard"

const windowHeight = Dimensions.get('window').height

export default ()=> {

  return <View style={styles.container}>
    <HeaderWithBtn />
    <Text style={styles.title}>Notification</Text>
    <ScrollView contentContainerStyle={styles.list}>
      <Text style={styles.text}>New</Text>
      <NotificationCard />
    </ScrollView>
  </View>
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center'
  },
  title:{
    marginTop: windowHeight * 0.05,
    fontFamily:'Rubik_500Medium',
    fontSize:24,
    color:'#130138'
  },
  list:{
    alignItems:'center',
    marginTop: windowHeight * 0.05,
    height: windowHeight * 0.68,
    width: '100%'
  },
  text:{
    fontFamily:'Quicksand_500Medium',
    fontSize:16,
  }
})
