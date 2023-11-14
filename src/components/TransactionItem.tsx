import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from "react-native"
import { Image } from "expo-image"
import { ReactNode } from "react"

export default (props: any) => {

  function getImage(): ReactNode { //apenas pra teste  (imagens locais)
    switch (props.title) {
      case "Netflix":
        return <View>
          <Image source={require("../assets/images/netflix-logo.svg")}
            style={styles.image}
          />
        </View>
      case "Paypal":
        return <View>
          <Image source={require("../assets/images/paypal-logo.svg")}
            style={styles.image}
          />
        </View>
      case "Paylater":
        return <View>
          <Image source={require("../assets/images/paylater-logo.svg")}
            style={styles.image}
          />
        </View>

      default: return
    }
  }

  return <TouchableOpacity
    style={styles.container}
  >
    {getImage()}
    {/* <View>   //apenas pra teste  (imagens locais)
      <Image source={uri("...")}
        style={styles.image}
      />
    </View> */}
    <View style={styles.itemBody}>
      <Text style={styles.itemTitle}>{props.title}</Text>
      <Text style={styles.itemDescription}>{props.desc}</Text>
    </View>
    <View>
      <Text style={styles.txtNum}>${props.val}</Text>
    </View>

  </TouchableOpacity>
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: 65,
    width: 65,
  },
  itemBody: {
    marginTop: 8,
    justifyContent: 'flex-start',
    width: '70%',
  },
  itemTitle: {
    fontFamily: 'Rubik_500Medium',
    fontSize: 16,
    color: '#000'
  },
  itemDescription: {
    fontFamily: 'Quicksand_500Medium',
    fontSize: 13,
    color: '#bdbdbd'
  },
  txtNum: {
    fontFamily: 'Rubik_500Medium',
    fontSize: 16,
    color: '#363853'
  }
})
