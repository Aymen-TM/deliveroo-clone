import { StyleSheet,TextInput, View } from 'react-native'
import React from 'react'
import {AdjustmentsIcon,SearchIcon} from 'react-native-heroicons/outline'
import Colors from '../utils/Colors'

const Search = () => {
  return (
    <View style={styles.container}>
        <View style={styles.searchContainer}>
            <SearchIcon style={styles.icon} size={20} color={Colors.primary} />
            <TextInput style={styles.search} placeholder="Restaurants and cuisins" placeholderTextColor={Colors.textGrey} />
        </View>

        <AdjustmentsIcon style={{marginTop:10}}  color={Colors.primary} /> 

    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
      
        alignItems:'center', 
    },
    searchContainer:{
        flex:1,
        flexDirection: 'row',
        alignItems:'center',
        padding: 8,
        backgroundColor:Colors.backgroundGrey,
        marginRight: 12,
        marginTop:12,
    },
    icon:{
        marginRight:10
    },
    search:{
       width:'100%',
       fontSize:16,
       fontWeight:"600"
    },

})