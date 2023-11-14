import { Image } from "expo-image"
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Alert
} from "react-native"

import HeaderWithBtn from "../components/HeaderWithBtn"

type DataType = {
  name: string
  bank: string
  account: string
  status: boolean
  valid: number
}
const mockedData : DataType = {
  name:'Jaka mambang',
  bank:'Mabank',
  account:'... ... ... 2138',
  status: true,
  valid: 2025
}
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default (props :any) => {

  return <View style={styles.container}>
    <HeaderWithBtn onClick={ () => props.navigation.navigate("Home")}/>
    <Text style={styles.title}>Detail Card</Text>
    <Image
      style={styles.image}
      source={require('../assets/images/card.svg')}
    />
    <View style={styles.userDataSection}>
      <View style={styles.userDataTextContainer}>
        <Text style={styles.userDataLabel}>Name </Text>
        <Text style={styles.userDataText}>{mockedData.name}</Text>
      </View>
      <View style={styles.userDataTextContainer}>
        <Text style={styles.userDataLabel}>Bank</Text>
        <Text style={styles.userDataText}>{mockedData.bank}</Text>
      </View>
      <View style={styles.userDataTextContainer}>
        <Text style={styles.userDataLabel}>Account</Text>
        <Text style={styles.userDataText}>{mockedData.account}</Text>
      </View>
      <View style={styles.userDataTextContainer}>
        <Text style={styles.userDataLabel}>Status</Text>
        <Text style={styles.userDataText}>
          { mockedData.status ? 'Active' : 'Inactive' }
        </Text>
      </View>
      <View style={styles.userDataTextContainer}>
        <Text style={styles.userDataLabel}>Valid</Text>
        <Text style={styles.userDataText}>
          {mockedData.valid - 5} - {mockedData.valid}
        </Text>
      </View>
    </View>
    <TouchableOpacity
    style={styles.btnDeleteCard}
      onPress={()=> Alert.alert('Cartão deletado')}
    >
      <Text style={styles.btnDeleteCardText}>
        Delete Card
      </Text>
    </TouchableOpacity>
  </View>
}
const styles = StyleSheet.create({
  container:{
    alignItems:'center'
  },
  title:{
    textAlign:'center',
    marginTop: 20,
    fontSize:24,
    color:'#130138',
    fontFamily:'Rubik_500Medium'
  },
  image:{
    marginTop: windowHeight * 0.06,
    height:219.53,
    width:311
  },
  userDataSection:{
    width:windowWidth * 0.6,
    height:windowHeight * 0.24,
    marginTop: windowHeight * 0.05,
    justifyContent:'space-between'
  },
  userDataTextContainer:{
    flexDirection:'row'
  },
  userDataLabel:{
    width:'40%',
    fontSize:16,
    fontFamily: 'Quicksand_500Medium',
    color: '#bdbdbd'
  },
  userDataText:{
    width:'60%',
    fontSize:16,
    fontFamily: 'Quicksand_500Medium',
    color: '#000000'
  },
  btnDeleteCard:{
    marginTop: windowHeight * 0.05
  },
  btnDeleteCardText:{
    fontFamily:'Rubik_500Medium',
    fontSize:18,
    textAlign:'center',
    color:'#5B259F'
  }
})
