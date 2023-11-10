import { Text, TouchableOpacity, StyleSheet } from "react-native"
import { CloseCircle } from "iconsax-react-native"
import React from "react"

export default (props: any) => {

  function handleContent(){
    if (typeof props.content === 'number'){
      return <Text style={styles.text}>
        {props.content.toString()}
      </Text>
    } else if ( props.content === 'icon'){
      return <CloseCircle
        size={24}
        color="#292D32"
      />
    } else {
      return <Text style={styles.text}>
        {props.content}
      </Text>
    }
  }

  function handleOnClick(): void{
    if (typeof props.content === 'number'){
      props.setMoney((money: string) => Number(money + props.content.toString()))
    }else if ( props.content === 'icon'){
      props.setMoney('0')
    }
  }

  return <TouchableOpacity
      onPress={handleOnClick}
    >
    {handleContent()}
  </TouchableOpacity>
}
const styles = StyleSheet.create({
  text:{
    fontSize:24,
    fontFamily:'Quicksand_500Medium'
  }
})
