import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity
} from "react-native"

import {
  Profile,
  Sms,
  KeySquare,
  Eye,
  EyeSlash
} from 'iconsax-react-native'
import { useState } from "react"


export default ({placeholder}: any) => {
  const [ showPassword, setShowPassword ] = useState(false)

  function getIcon(placeholder:string){
    switch(placeholder){
      case 'Username':
        return <Profile
          style={styles.icon}
          color="#555"
          size={24}
        />
      case 'Email':
        return <Sms
          style={styles.icon}
          color="#555"
          size={24}
        />
      case 'Password':
        return <KeySquare
          style={styles.icon}
          color="#555"
          size={24}
        />
      default:
          return null
    }
  }

  function toggleShowPassword(){
    setShowPassword(!showPassword)
  }

  return <View style={styles.container}>
    {getIcon(placeholder)}
    <TextInput
      inputMode={placeholder === 'Email'? 'email' : 'text'}
      secureTextEntry={placeholder === 'Password' && !showPassword ? true : false}
      style={styles.text}
      placeholder={placeholder}
      placeholderTextColor="#555"
    />
    {
      placeholder === 'Password'?
      <TouchableOpacity
        onPress={toggleShowPassword}
      >
        {
          showPassword ?
          <EyeSlash
            style={styles.icon}
            color="#555"
            size={24}
          /> :
          <Eye
            style={styles.icon}
            color="#555"
            size={24}
          />
        }
      </TouchableOpacity> :
      false
    }
  </View>
}
const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    backgroundColor: '#f2f2f2',
    width: 310,
    height:54,
    borderRadius:15
  },
  icon:{
    margin:15
  },
  text:{
    flex:1,
    fontSize:16,
    fontFamily:'Quicksand_500Medium'
  }
})
