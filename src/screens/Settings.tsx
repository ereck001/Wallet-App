import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
  } from "react-native"

  import HeaderWithBtn from "../components/HeaderWithBtn"
  import {
    ArrowRight2,
    Profile,
    Notification,
    Wallet2,
    KeySquare,
    CallCalling,
    LoginCurve
} from "iconsax-react-native"

  const windowHeight = Dimensions.get('window').height

  export default (props: any)=> {

    return <View style={styles.container}>
      <HeaderWithBtn onClick={
      () => props.navigation.navigate("Home")}/>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.itemContainer}
          onPress={() => props.navigation.navigate("UserSettings")}
        >
            <View style={styles.itemContainerLeftShadow}>
                <View style={styles.itemContainerLeft}>
                    <Profile
                        size={24}
                        color="#130138"
                    />
                </View>
            </View>
            <View style={styles.itemContainerRight}>
                <Text style={styles.text}>Profile</Text>
                <ArrowRight2
                    size={10}
                    color="#363853"
                    fontWeight={900}
                />
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.itemContainerLeftShadow}>
                <View style={styles.itemContainerLeft}>
                    <Notification
                        size={24}
                        color="#130138"
                    />
                </View>
            </View>
            <View style={styles.itemContainerRight}>
                <Text style={styles.text}>Notifications</Text>
                <ArrowRight2
                    size={10}
                    color="#363853"
                    fontWeight={900}
                />
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.itemContainerLeftShadow}>
                <View style={styles.itemContainerLeft}>
                    <Wallet2
                        size={24}
                        color="#130138"
                    />
                </View>
            </View>
            <View style={styles.itemContainerRight}>
                <Text style={styles.text}>Your Wallet</Text>
                <ArrowRight2
                    size={10}
                    color="#363853"
                    fontWeight={900}
                />
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.itemContainerLeftShadow}>
                <View style={styles.itemContainerLeft}>
                    <KeySquare
                        size={24}
                        color="#130138"
                    />
                </View>
            </View>
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
            <View style={styles.itemContainerLeftShadow}>
                <View style={styles.itemContainerLeft}>
                    <CallCalling
                        size={24}
                        color="#130138"
                    />
                </View>
            </View>
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
      <TouchableOpacity style={styles.footerIconContainer}
        onPress={() => props.navigation.navigate("Login")}
      >
        <LoginCurve
            size={36}
            color="#5B259F"
        />
        <Text style={styles.footerText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  }

  const styles = StyleSheet.create({
    container:{
      alignItems:'center'
    },
    title:{
      marginTop: windowHeight * 0.04,
      fontFamily:'Rubik_500Medium',
      fontSize:24,
      color:'#130138'
    },
    optionsContainer:{
        height: windowHeight * 0.45,
        width:'100%',
        marginTop:windowHeight * 0.04,
        justifyContent:'space-between'
    },
    itemContainer:{
        flexDirection:'row',
        marginHorizontal:35
    },
    itemContainerLeftShadow:{
        height:46,
        width:46,
        borderRadius:20,
        //android shadows
        elevation:9,
        shadowColor: '#afafaf',
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
        marginTop: windowHeight * 0.08,
        alignItems:'center'
    },
    footerText:{
        marginTop: windowHeight * 0.04,
        fontFamily:'Rubik_500Medium',
        fontSize:18,
        color:'#5B259F'
    }
  })
