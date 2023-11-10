import {
  TouchableOpacity,
  Text,
  StyleSheet
} from "react-native"

export default (props: any) => {

  return <TouchableOpacity
  style={styles.container}
    onPress={props.onClick}
  >
    <Text style={styles.text}>
      {props.text}
    </Text>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#5B259F',
    height: 63,
    width:193,
    borderRadius:15
  },
  text:{
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Quicksand_700Bold'
  }
})
