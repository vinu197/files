import React from 'react';
import{View, Button, Text,TextInput} from 'react-native';

const Register = ({navigation}) => {
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>

        <Text style={{fontSize:30, fontWeight:'bold'}}> Register Here </Text>

        <TextInput style={{borderWidth:1,borderColor:'#ccc',   width:250,padding:10,margin:5}} placeholder="Enter Name" maxLength={10}/>
        <TextInput style={{borderWidth:1,borderColor:'#ccc',   width:250,padding:10,margin:5}} placeholder="Enter Email ID"/>
        <TextInput style={{borderWidth:1,borderColor:'#ccc',   width:250,padding:10,margin:5}} placeholder="Enter Contact Number" maxLength={10}/>
 <TextInput style={{borderWidth:1,borderColor:'#ccc',   width:250,padding:10,margin:5}} placeholder="Enter Address" maxLength={30}/>


 <Button onPress={()=> navigation.navigate('Login')} 
        title='Register Screen'>
            </Button>

        </View>
    )
}

export default Register;