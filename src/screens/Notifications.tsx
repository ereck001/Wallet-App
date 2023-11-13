import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native"

import HeaderWithBtn from "../components/HeaderWithBtn"
import NotificationCard from "../components/NotificationCard"

type NotificationType = {
  id:number
  isNew: boolean
  header:string
  body: string
  footer: string
  isReceived:boolean
}

const MockedData: Array<NotificationType> = [
  {
    id: Math.random() * 10**17,
    isNew: true,
    header: "29 June 2021, 7.14 PM",
    body:"You received Rp 100.000 from Alexandr Gibson Jogja",
    footer:"‘Pay debt’",
    isReceived:true
  },
  {
    id: Math.random() * 10**17,
    isNew: true,
    header: "29 June 2021, 9.02 AM",
    body:"You spent Rp 32.000 for Coffe Cetar back Tugu Sentral",
    footer:"‘Buy drink’",
    isReceived:false
  },
  {
    id: Math.random() * 10**17,
    isNew: false,
    header: "28 June 2021, 8.32 PM",
    body:"You spent Rp 210.000 for pay Tokosbla ijo mera",
    footer:"‘Buy items’",
    isReceived:false
  },
  {
    id: Math.random() * 10**17,
    isNew: false,
    header: "28 June 2021, 8.32 PM",
    body:"You spent Rp 210.000 for pay Tokosbla ijo mera",
    footer:"‘Buy items’",
    isReceived:false
  },
  {
    id: Math.random() * 10**17,
    isNew: false,
    header: "28 June 2021, 8.32 PM",
    body:"You spent Rp 210.000 for pay Tokosbla ijo mera",
    footer:"‘Buy items’",
    isReceived:false
  },
]
const windowHeight = Dimensions.get('window').height

export default (props:any)=> {

  return <View style={styles.container}>
    <HeaderWithBtn onClick={
      () => props.navigation.navigate("Home")}
    />
    <Text style={styles.title}>Notification</Text>
    <ScrollView contentContainerStyle={styles.list}>
      <Text style={styles.text}>New</Text>
      {
        MockedData
          .filter(x => x.isNew)
          .map(x => <NotificationCard 
          key={x.id}
          isNew={x.isNew}
          isReceived={x.isReceived}
          headerText={x.header}
          bodyText={x.body}
          footerText={x.footer}
        />)
      }
      <Text style={styles.text}>Recent</Text>
      {
        MockedData
          .filter(x => !x.isNew)
          .map(x => <NotificationCard 
          key={x.id}
          isNew={x.isNew}
          isReceived={x.isReceived}
          headerText={x.header}
          bodyText={x.body}
          footerText={x.footer}
        />)
      }
      <Text style={{marginTop: 200}}>{"\n"}</Text>
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
    marginTop: windowHeight * 0.04,
    width: '100%'
  },
  text:{
    marginTop: 18,
    fontFamily:'Quicksand_500Medium',
    fontSize:16,
  }
})
