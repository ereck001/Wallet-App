
import { StatusBar } from 'expo-status-bar'

import SignUp from './screens/SignUp'
import Login  from './screens/Login'
import DetailCard from './screens/DetailCard'
import Transfer from './screens/Transfer'
import AddCard from './screens/AddCard'
import Notifications from './screens/Notifications'

import { Rubik_500Medium } from "@expo-google-fonts/rubik"
import { Quicksand_500Medium, Quicksand_700Bold } from "@expo-google-fonts/quicksand"
import { useFonts } from "expo-font"
import { SafeAreaView } from 'react-native'

export default () => {
  const [fontsLoaded] = useFonts({
    Rubik_500Medium,
    Quicksand_500Medium,
    Quicksand_700Bold
  })

  if (!fontsLoaded)
    return null
  return <SafeAreaView>
    <StatusBar style='dark'/>
    <Notifications />
  </SafeAreaView>
}

