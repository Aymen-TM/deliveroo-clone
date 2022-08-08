import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Aavatar = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/images/deliveroo.png')}  />
    </View>
  )
}

export default Aavatar

const styles = StyleSheet.create({
    container:{
        width:40,
        height:40,
        borderRadius:20,
        overflow: 'hidden',
        
    },
    image:{
        width:"100%",
        height:"100%"
    }
})