import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Aavatar from './Aavatar'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Search from './Search';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <View style={styles.TopContent}>
                <Aavatar />
                <View style={{marginLeft:5}}>
                    <Text style={styles.header4}>Deliver Now!</Text>
                    <View style={styles.textIcon}>
                        <Text style={styles.header1}>Current Location</Text>
                        <MaterialIcons name="keyboard-arrow-down" size={24} color="#00CCbb" />
                    </View>
                </View>
            </View> 
            <View>
                <FontAwesome5 name="user" size={24} color="#00CCbb" />
            </View>
        </View>
        <Search />
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        padding:10
        
    },
    topContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    TopContent:{
        flexDirection: 'row',
        justifyContent:"center",
        alignItems:"center",
        
    },
    header4:{
        fontSize: 16,
        color:"#b4b4b7"
    },
    header1:{
        fontWeight:'bold',
        fontSize:16,
        marginTop:-5,
    
    },
    textIcon:{
        flexDirection: 'row',
        justifyContent:"center",
        alignItems:"center",
    }
})