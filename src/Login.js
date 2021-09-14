import React from 'react';
import{View, Button, Text, TextInput} from 'react-native';

const Login = ({navigation}) => {
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:30, fontWeight:'bold'}}> Login Page </Text>

        <TextInput style={{borderWidth:1,borderColor:'#ccc',   width:250,padding:10,margin:5}} placeholder="Enter Name" maxLength={10}/>
        <TextInput style={{borderWidth:1,borderColor:'#ccc',   width:250,padding:10,margin:5}} placeholder="Enter Password" maxLength={8} secureTextEntry={true}/>



        <Button onPress={()=> navigation.navigate('Listing')} 
        title='Login'>
            </Button>
        </View>
    )
}

export default Login;