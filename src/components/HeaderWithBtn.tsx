import { TouchableOpacity, StyleSheet } from "react-native"
import { ArrowCircleLeft } from "iconsax-react-native"

export default (props: any) => {

  return <TouchableOpacity style={styles.header}
    onPress={props.onClick}
  >
  <ArrowCircleLeft
    color="#45197D"
    size={36}
  />
</TouchableOpacity>
}
const styles = StyleSheet.create({
  header:{
    width:'100%',
    marginTop: 40,
    paddingLeft: 32,
    alignItems:'flex-start',
  }
})
