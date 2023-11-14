
import StackRoute from './routes/Stack.route'

import { Rubik_500Medium } from "@expo-google-fonts/rubik"
import { Quicksand_500Medium, Quicksand_700Bold } from "@expo-google-fonts/quicksand"
import { useFonts } from "expo-font"


export default () => {
  const [fontsLoaded] = useFonts({
    Rubik_500Medium,
    Quicksand_500Medium,
    Quicksand_700Bold
  })

  if (!fontsLoaded)
    return null
  return  <StackRoute />
}

