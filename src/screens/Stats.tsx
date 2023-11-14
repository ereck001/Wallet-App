import { View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { Image, ImageBackground } from 'expo-image'
import BkgImg from '../assets/images/example.svg'
import TransactionItem from '../components/TransactionItem'

const windowheight = Dimensions.get('window').height
const listHeight = windowheight < 765 ?
{ height: 120 } :
false

type TransactionDataType = {
  id: number
  title: string
  description: string
  image: string
  value: number
}

const mockedTrData: TransactionDataType[] = [
  {
    id: Math.random() * 10 ** 17,
    title: "Netflix",
    description: "Month subscription",
    image: "../assets/images/netflix-logo.svg",
    value: 12
  },
  {
    id: Math.random() * 10 ** 17,
    title: "Paypal",
    description: "Tax",
    image: "../assets/images/paypal-logo.svg",
    value: 10
  },
  {
    id: Math.random() * 10 ** 17,
    title: "Paylater",
    description: "Buy item",
    image: "../assets/images/paylater-logo.svg",
    value: 2
  }
]


export default () => <View style={{flex:1, backgroundColor: '#fff'}}>
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.titleText}>Income Stats</Text>
    </View>
    <View style={styles.cardImage}>
      <ImageBackground
        style={styles.bkgImage}
        source={BkgImg}
        contentFit='cover'
      >
        <View>
          <Text style={styles.textImage}>$ 2100</Text>
        </View>
      </ImageBackground>
    </View>
    <View style={styles.balance}>
      <Text style={styles.balaceLabel}>Total Balance</Text>
      <Text style={styles.balaceValue}>$ {"13.248"}</Text>
    </View>
    <View style={styles.lastTransactionSection}>
      <View style={styles.lastTrSectionHeader}>
        <Text style={styles.lastTrText}>Transaction</Text>
        <TouchableOpacity>
          <Text style={styles.lastTrTextBtn}>Latest</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={[styles.Trlist, listHeight]}>
        {
          mockedTrData.map(x => {
            return <TransactionItem
              key={x.id.toString()}
              img={x.image}
              title={x.title}
              desc={x.description}
              val={x.value}
            />
          })
        }
      </ScrollView>
    </View>
  </View>
</View>

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  header: {
    width: '80%',
    justifyContent: 'space-between',
    marginTop: windowheight * 0.08,
    flexDirection: 'row'
  },
  titleText: {
    fontFamily: 'Rubik_500Medium',
    fontSize: 18,
    color: '#130138'
  },
  statusText: {
    fontFamily: 'Quicksand_500Medium',
    fontSize: 16,
    color: '#BDBDBD'
  },
  avatar: {
    height: 56,
    width: 56,
    borderRadius: 28
  },
  cardImage: {
    marginTop: windowheight * 0.02,
    width: 296,
    height: 212,
  },
  bkgImage:{
    width: '100%',
    height: '100%',
    alignItems:'center',
    paddingTop: 56
  },
  textImage:{
    fontFamily: 'Quicksand_500Medium',
    fontSize:14,
    color:'#fff',
    marginRight:6
  },
  balance:{
    marginTop: windowheight * 0.06,
    height: 70,
    width: 200,
    alignItems:'center',
    justifyContent:'space-between'
  },
  balaceLabel:{
    fontFamily: 'Quicksand_500Medium',
    fontSize: 16,
    color: '#8B98B1'
  },
  balaceValue:{
    fontFamily: 'Rubik_500Medium',
    fontSize: 36,
    color: '#9038FF'
  },
  lastTransactionSection: {
    marginTop: windowheight * 0.04,
    width: 310
  },
  lastTrSectionHeader: {
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  lastTrText: {
    fontFamily: 'Rubik_500Medium',
    fontSize: 18,
    color: '#130138'
  },
  lastTrTextBtn: {
    fontFamily: 'Quicksand_500Medium',
    fontSize: 13,
    color: '#8438FF'
  },
  Trlist: {
    marginTop: 20,
    overflow:'scroll',
    marginBottom: windowheight * 0.2,
  }
})
