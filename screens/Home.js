import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'

const Home = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle:"test"
        })
    
    }, [])




  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });