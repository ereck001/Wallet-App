import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
  } from "react-native"
  import { Image } from "expo-image"
  import HeaderWithBtn from "../components/HeaderWithBtn"
  import {
    ArrowRight2,
    Trash,
    Edit2
} from "iconsax-react-native"

  type UserData ={
    id:number
    user:string
    email:string
    role:string
    image?:string
  }

  const MockedData:UserData = {
    id: Math.random() * 10**17,
    user:'Joey',
    email:'joey@aol.com',
    role:'user',
    image:'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833572.jpg?w=740&t=st=1699892279~exp=1699892879~hmac=fb9df3f2417e6c25487977a78c7f3275aafc32fe53a1f2ec3b817687c2ac02f7',
}
  const windowHeight = Dimensions.get('window').height

  export default (props: any)=> {

    return <View style={styles.container}>
      <HeaderWithBtn
        onClick={() => props.navigation.navigate("Settings")}
      />
      <TouchableOpacity style={styles.avatarContainer}>
        <Image  style={styles.avatar}
            source={MockedData.image}
        />
        <View style={styles.avatarMask}>
            <View style={styles.avatarMaskTop}/>
            <View style={styles.avatarMaskBottom}>
                <Text style={styles.avatarText}>change</Text>
            </View>
        </View>
      </TouchableOpacity>
      <View  style={styles.titleContainer}>
        <Text style={styles.title}>{MockedData.user}</Text>
        <TouchableOpacity style={styles.titleIcon}>
            <Edit2 size={24} color="#60708F"/>
        </TouchableOpacity>
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.itemContainerRight}>
                <Text style={styles.text}>Connected Account</Text>
                <ArrowRight2
                    size={10}
                    color="#363853"
                    fontWeight={900}
                />
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.itemContainerRight}>
                <Text style={styles.text}>Privacy and security</Text>
                <ArrowRight2
                    size={10}
                    color="#363853"
                    fontWeight={900}
                />
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.itemContainerRight}>
                <Text style={styles.text}>Login Settings</Text>
                <ArrowRight2
                    size={10}
                    color="#363853"
                    fontWeight={900}
                />
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.itemContainerRight}>
                <Text style={styles.text}>Service Center</Text>
                <ArrowRight2
                    size={10}
                    color="#363853"
                    fontWeight={900}
                />
            </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.footerIconContainer}>
        <Trash
            size={36}
            color="#5B259F"
        />
        <Text style={styles.footerText}>Delete Account</Text>
      </TouchableOpacity>
    </View>
  }

  const styles = StyleSheet.create({
    container:{
      alignItems:'center'
    },
    avatarContainer:{
        marginTop: windowHeight * 0.1,
        height:96,
        width:96,
        borderRadius: 48
    },
    avatar:{
        height:96,
        width:96,
        borderRadius: 48
    },
    avatarMask:{
        height:'100%',
        width:'100%',
        position: 'absolute',
        borderRadius: 48,
        overflow:'hidden'
    },
    avatarMaskTop:{
        flex:7.5
    },
    avatarMaskBottom:{
        flex:2.5,
        backgroundColor: 'rgba(47,17,85,0.8)',
    },
    avatarText:{
        textAlign:'center',
        fontSize:13,
        fontFamily:'Quicksand_500Medium',
        color:'#fff'
    },
    titleContainer:{
        flexDirection:'row',
        paddingHorizontal:36
    },
    title:{
      marginTop: windowHeight * 0.02,
      fontFamily:'Rubik_500Medium',
      fontSize:24,
      color:'#130138'
    },
    titleIcon:{
        position:'absolute',
        bottom:2,
        right:2
    },
    optionsContainer:{
        height: windowHeight * 0.22,
        width:'100%',
        marginTop:windowHeight * 0.06,
        justifyContent:'space-between'
    },
    itemContainer:{
        flexDirection:'row',
        marginHorizontal:35
    },
    itemContainerLeft:{
        height:44,
        width:44,
        borderRadius:20,
        padding:10,
        backgroundColor:'#fff',
        //ios shadows
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3
    },
    itemContainerRight:{
        flex:1,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal:15
    },
    text:{
      fontFamily:'Quicksand_500Medium',
      fontSize:16,
    },
    footerIconContainer:{
        marginTop: windowHeight * 0.12,
        alignItems:'center'
    },
    footerText:{
        marginTop: windowHeight * 0.04,
        fontFamily:'Rubik_500Medium',
        fontSize:18,
        color:'#5B259F'
    }
  })
