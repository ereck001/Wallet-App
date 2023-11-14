
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

export default (props: any) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false)
  const windownHeight = Dimensions.get('window').height

  const shortScreenTitleStyle = windownHeight < 750 ?
    {
      marginTop: 90
    } :
    {
      marginTop: 110
    }

  const shortScreenMessageStyle = windownHeight < 750 ?
    {
      marginTop: 34
    } :
    {
      marginTop: 64
    }

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

  return <SafeAreaView style={styles.bkg}>
    <View style={styles.container}>
      {
        !isKeyboardVisible ?
          <View style={[styles.sectionTop, shortScreenTitleStyle]}>
            <Text style={styles.title}>
              Welcome back{"\n"}to Mabank Wallet
            </Text>
            <Text style={[styles.message, shortScreenMessageStyle]}>Sign up with</Text>
          </View> :
          <View style={{ marginTop: 50 }} />
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
          <Input placeholder="Password" />
        </View>
      </View>
      <View style={styles.sectionBottom}>
        <BtnDefault
          onClick={() => Alert.alert('Btn funcionou!')}
          text="Login"
        />
        <View style={styles.footerTextContainer}>
          <Text style={styles.footerText}>
            Don't have an account yet?
          </Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("SignUp")}
          >
            <Text style={styles.footerTextLink}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </SafeAreaView>
}

const styles = StyleSheet.create({
  bkg:{
    flex:1,
    backgroundColor: '#fff'
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  sectionTop: {
  },
  title: {
    width: 282,
    height: 84,
    fontSize: 24,
    fontFamily: 'Rubik_500Medium',
    color: '#2f1155',
    textAlign: 'center',
  },
  message: {
    textAlign: 'center',
    fontFamily: 'Quicksand_500Medium',
    color: '#bdbdbd'
  },
  sectionButtons: {
    flexDirection: "row"
  },
  sectionInputs: {
    marginTop: 38,
    height: 128,
    justifyContent: 'space-between'
  },
  sectionBottom: {
    width: '100%',
    alignItems: 'center',
    marginTop: 60
  },
  footerTextContainer: {
    marginLeft: 3,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  footerText: {
    fontSize: 13,
    fontFamily: 'Quicksand_500Medium',
    color: '#bdbdbd'
  },
  footerTextLink: {
    marginLeft: 3,
    fontSize: 13,
    fontFamily: 'Quicksand_500Medium',
    color: '#81C2FF'
  }
})

