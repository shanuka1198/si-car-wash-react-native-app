import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';

const Home = () => {

  const [fontsLoaded] = useFonts({
    'JosefinSans': require('../../assets/fonts/JosefinSans-VariableFont_wght.ttf'),
  });


  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView className="relative w-full h-[300px]">
  
    <Image
      className="rounded-3xl" 
      source={require('../../assets/images/19.jpg')}
      style={{ width: 'auto', height: 700, borderBottomLeftRadius: 10,borderBottomRightRadius:10 }} // Adding borderRadius to the style
    />
    
    <View 
    className="absolute w-full opacity-75 h-[700px] bg-black" 
    style={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}></View>
    
    <View className="absolute w-full h-[750px] flex justify-center">
      <Text style={{ fontFamily: 'JosefinSans', fontSize: 50, fontWeight: '800' }} className="text-white font-bold left-7">
        S.I.CAR WASH
      </Text>
      <View className="w-[280px] mx-7 h-1 opacity-60 bg-red-700"></View>
      <Text className="text-white mx-7">"Sri Lanka’s Leading Car Wash Service"</Text>
      
      <View className="flex-1 justify-start items-start">
        <TouchableOpacity 
          style={{
            width: 100,
            height: 35,
            borderRadius: 30, 
            justifyContent: 'center',
            alignItems: 'center',
            margin: 35,
            borderWidth: 2, 
            borderColor: '#9B1C1C', 
          }}
        >
          <Text className="text-white">Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  </ScrollView>
  );
};

export default Home;
