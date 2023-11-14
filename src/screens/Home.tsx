import { View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { Image, ImageBackground } from 'expo-image'
import BkgImg from '../assets/images/home-background-card.svg'
import {
  Convert,
  ExportCurve,
  MoneySend,
  AddCircle
} from 'iconsax-react-native'
import TransactionItem from '../components/TransactionItem'

const windowheight = Dimensions.get('window').height
const listHeight = windowheight < 765 ?
{ height: 120 } :
false

type UserDataType = {
  id: number
  user: string
  email: string
  role: string
  image?: string
}
type TransactionDataType = {
  id: number
  title: string
  description: string
  image: string
  value: number
}

const mockedUserData: UserDataType = {
  id: Math.random() * 10 ** 17,
  user: 'Joey',
  email: 'joey@aol.com',
  role: 'user',
  image: 'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833572.jpg?w=740&t=st=1699892279~exp=1699892879~hmac=fb9df3f2417e6c25487977a78c7f3275aafc32fe53a1f2ec3b817687c2ac02f7',
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


export default (props:any) => <View style={{flex:1, backgroundColor: '#fff'}}>
  <View style={styles.container}>
    <View style={styles.header}>
      <View>
        <Text style={styles.titleText}>Wallet</Text>
        <Text style={styles.statusText}>Active</Text>
      </View>
      <Image style={styles.avatar}
        source={mockedUserData.image} />
    </View>
    <TouchableOpacity style={styles.cardImage}
      onPress={() => props.navigation.navigate("DetailCard")}
    >
      <ImageBackground
        style={styles.bkgImage}
        source={BkgImg}
        contentFit='cover'
      >
        <View>
          <Text style={styles.cardLeftTextTop}>Balance</Text>
          <Text style={styles.cardLeftTextBottom}>$ 1.234</Text>
        </View>
        <View>
          <Text style={styles.cardRightTextTop}>Card</Text>
          <Text style={styles.cardRightTextBottom}>Mabank</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
    <View style={styles.screenSection}>
      <View>
        <View style={styles.iconContainerShadow}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => props.navigation.navigate("Transfer")}
          >
            <Convert size={28} color="#2F1155" />
          </TouchableOpacity>
        </View>
        <Text style={styles.iconLabel}>Transfer</Text>
      </View>
      <View>
        <View style={styles.iconContainerShadow}>
          <TouchableOpacity style={styles.iconContainer}>
            <ExportCurve size={28} color="#2F1155" />
          </TouchableOpacity>
        </View>
        <Text style={styles.iconLabel}>Payment</Text>
      </View>
      <View>
        <View style={styles.iconContainerShadow}>
          <TouchableOpacity style={styles.iconContainer}>
            <MoneySend size={28} color="#2F1155" />
          </TouchableOpacity>
        </View>
        <Text style={styles.iconLabel}>Payout</Text>
      </View>
      <View>
        <View style={styles.iconContainerShadow}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => props.navigation.navigate("AddCard")}
          >
            <AddCircle size={28} color="#2F1155" />
          </TouchableOpacity>
        </View>
        <Text style={styles.iconLabel}>Top up</Text>
      </View>
    </View>
    <View style={styles.lastTransactionSection}>
      <View style={styles.lastTrSectionHeader}>
        <Text style={styles.lastTrText}>Last Transaction</Text>
        <TouchableOpacity>
          <Text style={styles.lastTrTextBtn}>View All</Text>
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
    marginTop: windowheight * 0.1,
    flexDirection: 'row'
  },
  titleText: {
    fontFamily: 'Rubik_500Medium',
    fontSize: 24,
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
    marginTop: windowheight * 0.04,
    overflow: 'hidden',
    width: 310,
    height: 140,
    backgroundColor: '#45197D',
    borderRadius: 50
  },
  bkgImage: {
    width: 310,
    height: 140,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  cardLeftTextTop: {
    fontFamily: 'Quicksand_700Bold',
    fontSize: 16,
    color: '#fff'
  },
  cardLeftTextBottom: {
    fontFamily: 'Quicksand_700Bold',
    fontSize: 24,
    color: '#fff'
  },
  cardRightTextTop: {
    fontFamily: 'Quicksand_700Bold',
    fontSize: 16,
    color: '#fff'
  },
  cardRightTextBottom: {
    fontFamily: 'Quicksand_700Bold',
    fontSize: 24,
    color: '#fff'
  },
  screenSection: {
    height: 80,
    width: 292,
    marginTop: windowheight * 0.04,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  iconContainerShadow: {
    height: 51,
    width: 51,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    //android shadows
    elevation: 9,
    shadowColor: '#afafaf',
  },
  iconContainer: {
    height: 48,
    width: 48,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    //ios shadows
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  iconLabel: {
    marginTop: 18,
    fontFamily: 'Quicksand_500Medium',
    fontSize: 13,
    color: '#8438FF'
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
