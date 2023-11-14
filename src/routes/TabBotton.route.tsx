import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Stats from '../screens/Stats'
import Notifications from '../screens/Notifications'
import Settings from '../screens/Settings'
import {
    Wallet2,
    Chart2,
    NotificationBing,
    Setting
 } from 'iconsax-react-native'
 import {Dimensions} from 'react-native'

const Tab = createBottomTabNavigator();

export default () => {
  const windowHeight = Dimensions.get('window').height
  return (
    <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
            headerShown:false,
            tabBarShowLabel: false,
            tabBarStyle:{
                backgroundColor: "#2F1155",
                height: 78,
                width:327,
                borderRadius:30,
                position: 'absolute',
                bottom: windowHeight * 0.05,
                alignItems:'center',
                marginHorizontal: '10%'
            }
        }}
    >
      <Tab.Screen name="Home" component={Home}
        options={{tabBarIcon:() => <Wallet2 size={28} color='#fff'/>}}
      />
      <Tab.Screen name="Stats" component={Stats}
        options={{tabBarIcon:() => <Chart2 size={28} color='#fff'/>}}
      />
      <Tab.Screen name="Notifications" component={Notifications}
        options={{
            tabBarStyle:{display:'none'},
            tabBarIcon:() => <NotificationBing size={28} color='#fff'/>
        }}
      />
      <Tab.Screen name="Settings" component={Settings}
        options={{
            tabBarStyle:{display:'none'},
            tabBarIcon:() => <Setting size={28} color='#fff'/>
        }}
      />
    </Tab.Navigator>
  );
}
