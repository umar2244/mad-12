import { StyleSheet, Text, View , Image,TouchableOpacity} from 'react-native'
import React from 'react'
import Login from './Login'

const Home = ({navigation}) => {
  const move =()=>{

    navigation.navigate(Login)
  }
  return (
    <View style={styles.main}>
      <View style={styles.home}>
      <Image
      style={styles.pic}
      resizeMode="center"
      source={require("./asstest/pic1.jpg")}
      />

      <Text   style={styles.head} >
        WellCome TO CodeWOrld 
        </Text>
        <Text   style={styles.par} >
        We have skilled person that You need just clcik on the button 
        and hired the person that you need.   
        </Text>
<TouchableOpacity    style={styles.button} onPress={move} >

    <Text   style={styles.bu}>
        Continue
    </Text>
</TouchableOpacity>
         
      </View>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
 
    main:{
 height:"100%",
 display:"flex",
 justifyContent:"Space-between",
 paddingHorizontal:20,
 backgroundColor:"white",
 textAlign:"center",
  },

  home:{

    display:"flex",
    justifyContent:"center",
    paddingHorizontal:20,
    backgroundColor:"white",
    textAlign:"center",
     },

  pic:{
height:"undefined",
width:"100%",
aspectRatio:1,
display:"flex",

marginTop:30,

  },

  head:{

fontSize:30,
fontWeight:"bold",
textAlign:"center",
color:"grey",

  },

  par:{

    fontSize:12,
    fontWeight:"bold",
    textAlign:"center",
    color:"grey",
    
      },

      button: {
        alignItems: "center",
        backgroundColor: "grey",
        padding: 10,
        borderRadius:5,
        marginTop:40,
      },

bu:{

    fontSize:20,
    fontWeight:"bold",
    color:"white"

}


})