
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import "../global.css"
import { AuthContext } from './context/authContext'
import { useRouter } from 'expo-router'
import axios from 'axios'
import {jwtDecode} from 'jwt-decode'

const index = () => {
  const [inputUser, setInputUser] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const { login } = useContext(AuthContext);
  const router = useRouter();

  function loginUser() {
      axios.post("http://192.168.1.144:8080/api/v1/auth/user/login", {
          username: inputUser,
          password: inputPassword
      }).then((result) => {
          const token = result.data;
          const user = jwtDecode(token);
          login(token, user);
          router.replace("/(tabs)/home");
          alert("Login successful");
      }).catch(() => {
          alert("Username or password is incorrect");
      });
  }

  return (
    <View>
    <View className='flex justify-center items-center top-32'>
        <Image source={require('../assets/images/15.png')} style={{ width: 300, height: 250 }} />
    </View>
    <View className='flex justify-center items-center gap-8 h-[450px]'>
        <Text className='text-2xl font-bold'>Welcome to the S I CARWASH</Text>
        <TextInput
            placeholder='Enter Your Name'
            onChangeText={setInputUser}
            placeholderTextColor={'#727d7e'}
            className='p-6 text-lg text-black flex w-[330px] h-10 border-zinc-300 border-2 rounded-2xl' />
        <TextInput
            placeholder='Enter Password'
            onChangeText={setInputPassword}
            placeholderTextColor={'#727d7e'}
            secureTextEntry
            className='p-6 text-lg text-black w-[330px] h-10 border-zinc-300 border-2 rounded-2xl' />
        <TouchableOpacity onPress={loginUser}  className='w-[200px] flex justify-center items-center h-12 bg-blue-500 rounded-2xl'>
            <Text className='text-white font-medium text-lg'>Log In</Text>
        </TouchableOpacity>
        <View className='flex justify-center flex-row'>
            <Text>Don't have an account?</Text>
            <TouchableOpacity>
                <Text className='text-blue-700 font-bold mx-2'>Sign Up</Text>
            </TouchableOpacity>
        </View>
    </View>
</View>

  )
}

export default index