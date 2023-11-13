import { 
    TouchableOpacity, 
    View, 
    Text,
    StyleSheet
} from "react-native"
import { Image } from "expo-image"

export default (props: any) => {

    
    return <TouchableOpacity 
        style={styles.container}    
    >
        <View>
            <Image source={require("../assets/images/netflix-logo.svg")}
                style={styles.image}                
            />
        </View>
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
    container:{
        flexDirection:'row',
        justifyContent: 'space-between',        
    },
    image:{
        height:65,
        width:65,        
    },
    itemBody:{
        justifyContent: 'center',
        width:'70%',
    },
    itemTitle:{
        fontFamily:'Rubik_500Medium',
        fontSize: 16,
        color:'#000'
    },
    itemDescription:{
        fontFamily:'Quicksand_500Medium',
        fontSize:13,
        color:'#bdbdbd'
    },
    txtNum:{
        fontFamily:'Rubik_500Medium',
        fontSize: 16,
        color:'#363853'
    }
})