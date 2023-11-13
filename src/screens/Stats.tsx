import { View, Text, StyleSheet} from 'react-native'

export default () => <View style={styles.container}>
    <Text >Stats</Text>
</View>

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
})