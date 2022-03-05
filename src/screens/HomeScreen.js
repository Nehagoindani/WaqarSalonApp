import React from 'react';
import { Text, View, StyleSheet,Button,TouchableOpacity, Image} from 'react-native';

const HomeScreen=({navigation})=> {
 
  return(
    <View style={styles.MainContainer}>
        <TouchableOpacity
           onPress={()=>navigation.navigate('Login')}
          >
        <View style={{justifyContent:'center',alignItems:'center'}} >
      
            <Image
            style={styles.img} source={require("../Images/ww.jpg")}></Image>
            <Text style={{fontWeight:'bold',color:'white',fontSize:22}}>Founded by Waqar Hussain </Text>
            <Text></Text>
            <Text></Text>
            <View style={styles.btnView}>
               <View style={{margin:10,width:100}}>
            <Button
            title='Admin'
            onPress={()=>navigation.navigate('AdminLogin')}
            color={'#d6994b'}
            ></Button>
            </View>
            <View style={{margin:10,width:100}}>
             <Button
            title='Client'
            onPress={()=>navigation.navigate('Login')}
            color={'#d6994b'}
            ></Button>
            </View>

            </View>
           
          
        </View>
        </TouchableOpacity>
  </View>

  )
}

const styles= StyleSheet.create({
    MainContainer:{
        flex:1,
        backgroundColor:'black',
        shadowColor: 'white',
        alignItems:'center',
        justifyContent:'center',
       
      
    },
    btnView:{
        margin:5,
        flexDirection:'row', justifycontent: 'space-evenly'
    },
    img:{
  
        margin:20,
        width:200,
        height:230

    }
})
export default HomeScreen;
