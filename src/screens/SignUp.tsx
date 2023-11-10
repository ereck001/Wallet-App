
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Keyboard,
  Dimensions,
  Alert,
  TouchableOpacity
} from "react-native"

import Input from "../components/Input"
import BtnGoogle from "../components/BtnSocialMedia/BtnGoogle"
import BtnFacebook from "../components/BtnSocialMedia/BtnFacebook"
import BtnDefault from "../components/BtnDefault"
import { useState, useEffect } from "react"

export default () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false)
  const windownHeight = Dimensions.get('window').height

  const shortScreenTitleStyle = windownHeight < 750 ?
  {
    marginTop:60
  } :
  {}

  const shortScreenMessageStyle = windownHeight < 750 ?
  {
    marginTop:34
  } :
  {}

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      }
    );

    // Remove os listeners quando o componente é desmontado
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return <SafeAreaView style={styles.container}>
    {
      !isKeyboardVisible ?
      <View style={[ styles.sectionTop, shortScreenTitleStyle ]}>
        <Text style={styles.title}>
          Immediately feel the ease of transacting just by registering
        </Text>
        <Text style={[styles.message, shortScreenMessageStyle]}>Sign up with</Text>
      </View> :
      <View style={{marginTop: 50}}/>
    }
    <View >
      {
        !isKeyboardVisible ?
        <View style={styles.sectionButtons}>
          <BtnGoogle />
          <View style={{ width: 20 }} />
          <BtnFacebook />
        </View> :
        false
      }

      <View style={styles.sectionInputs}>
        <Input placeholder="Username" />
        <Input placeholder="Email" />
        <Input placeholder="Password" />
      </View>
    </View>
    <View style={styles.sectionBottom}>
      <BtnDefault
        onClick={() => Alert.alert('Btn funcionou!')}
        text="Register"
      />
      <View style={styles.footerTextContainer}>
        <Text style={styles.footerText}>
          You have account?
        </Text>
        <TouchableOpacity
          onPress={()=> Alert.alert('Login')}
        >
          <Text style={styles.footerTextLink}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  </SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  sectionTop: {
    marginTop: 90
  },
  title: {
    width: 282,
    height: 84,
    fontSize: 24,
    fontFamily: 'Rubik_500Medium',
    color: '#2f1155',
    textAlign: 'center'
  },
  message: {
    marginTop: 64,
    textAlign: 'center',
    fontFamily: 'Quicksand_500Medium',
    color: '#bdbdbd'
  },
  sectionButtons: {
    flexDirection: "row"
  },
  sectionInputs: {
    marginTop: 38,
    height: 202,
    justifyContent: 'space-between'
  },
  sectionBottom: {
    marginTop:60
  },
  footerTextContainer:{
    marginLeft:3,
    marginTop:10,
    flexDirection:'row',
    justifyContent: 'center'
  },
  footerText:{
    fontSize:13,
    fontFamily: 'Quicksand_500Medium',
    color: '#bdbdbd'
  },
  footerTextLink:{
    fontSize:13,
    fontFamily: 'Quicksand_500Medium',
    color: '#81C2FF'
  }
})

