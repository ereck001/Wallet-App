import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Stats from '../screens/Stats'

import TabRoute from './TabBotton.route'
import UserSettings from '../screens/UserSettings'
import Transfer from '../screens/Transfer'
import Login from '../screens/Login'
import SignUp from '../screens/SignUp'
import AddCard from '../screens/AddCard'
import DetailCard from '../screens/DetailCard'


const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator
        initialRouteName='Tab'
        screenOptions={{
            headerShown:false,
        }}
    >
      <Stack.Screen name="Tab" component={TabRoute} />
      <Stack.Screen name="Transfer" component={Transfer} />
      <Stack.Screen name="UserSettings" component={UserSettings} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="AddCard" component={AddCard} />
      <Stack.Screen name="DetailCard" component={DetailCard} />
    </Stack.Navigator>
  );
}
