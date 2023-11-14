import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Alert
} from "react-native"
import HeaderWithBtn from "../components/HeaderWithBtn"
import { useState } from "react"
import DropDownBtn from '../components/DropDownBtn'
import BtnKeyboardNumbers from "../components/BtnKeyboardNumbers"
import BtnDefault from "../components/BtnDefault"

const windowHeight = Dimensions.get('window').height

export default (props: any)=> {
  const [money, setMoney] = useState('0')

  return <View style={styles.container}>
    <HeaderWithBtn
      onClick={() => props.navigation.navigate("Home")}
    />
    <Text style={styles.display}>${money}</Text>
    <View style={styles.dropDownContainer}>
      <DropDownBtn />
    </View>
    <View style={styles.keyboardContainer}>
      <View style={styles.keyboardSection}>
        <BtnKeyboardNumbers content={1} setMoney={setMoney}/>
        <BtnKeyboardNumbers content={2} setMoney={setMoney}/>
        <BtnKeyboardNumbers content={3} setMoney={setMoney}/>
      </View>
      <View style={styles.keyboardSection}>
        <BtnKeyboardNumbers content={4} setMoney={setMoney}/>
        <BtnKeyboardNumbers content={5} setMoney={setMoney}/>
        <BtnKeyboardNumbers content={6} setMoney={setMoney}/>
      </View>
      <View style={styles.keyboardSection}>
        <BtnKeyboardNumbers content={7} setMoney={setMoney}/>
        <BtnKeyboardNumbers content={8} setMoney={setMoney}/>
        <BtnKeyboardNumbers content={9} setMoney={setMoney}/>
      </View>
      <View style={styles.keyboardSection}>
        <BtnKeyboardNumbers content='00' setMoney={setMoney}/>
        <BtnKeyboardNumbers content={0} setMoney={setMoney}/>
        <BtnKeyboardNumbers content='icon' setMoney={setMoney}/>
      </View>
    </View>
    <BtnDefault
        onClick={() => Alert.alert('Btn funcionou!')}
        text="Transfer"
      />
  </View>
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center'
  },
  display:{
    marginTop: windowHeight * 0.05,
    fontFamily:'Rubik_500Medium',
    fontSize:36,
    color:'#2F1155'
  },
  dropDownContainer:{
    marginTop: windowHeight * 0.05,
    width:310,
    height:66
  },
  keyboardContainer:{
    marginBottom: windowHeight * 0.1,
  },
  keyboardSection:{
    width:260,
    marginTop: windowHeight * 0.05,
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'space-around'
  }
})
