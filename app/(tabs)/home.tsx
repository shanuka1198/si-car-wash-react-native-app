import { View, Text, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import SwiperComponent from '@/component/SwiperComponent';

const Home = () => {

  const [fontsLoaded] = useFonts({
    'JosefinSans': require('../../assets/fonts/JosefinSans-VariableFont_wght.ttf'),
  });


  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView className='relative w-full h-auto bg-zinc-200'>
 
 <View className="relative p-5">
      <ImageBackground
        source={require('../../assets/images/19.jpg')}
        style={{ width: "100%", height: 500, borderRadius: 30, overflow: "hidden" }}
      >
       
        <View 
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            opacity: 0.75
          }}
        />
      </ImageBackground>
    </View>
  
    
    <View className="absolute w-full h-[700px] top-[320px] font-bold">
      <Text style={{ fontFamily: 'JosefinSans', fontSize: 50, fontStyle: 'italic' }} className="text-white font-bold left-7">
        S.I.CAR WASH
      </Text>
      <View className="w-[280px] mx-7 h-1 opacity-60 bg-red-700"></View>
      <Text className="text-white mx-6">"Sri Lanka’s Leading Car Wash Service"</Text>
      <Text className="text-white mx-7" style={{ fontSize: 8 }}>Shine Bright, Drive Right!</Text>
      

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
  

    <View className="p-10">
      <SwiperComponent/>
    </View>
  </ScrollView>
  
  );
};

export default Home;
