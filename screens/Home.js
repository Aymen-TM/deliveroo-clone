import {StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useLayoutEffect } from 'react'
import HomeHeader from '../components/HomeHeader'

const Home = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown:false,
        })
    
    }, [])




  return (
    <SafeAreaView style={styles.container}>
            <HomeHeader />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
  });