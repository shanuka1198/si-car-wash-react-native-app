import { Tabs } from 'expo-router';
import React from 'react';
import Octicons from '@expo/vector-icons/Octicons';
import Feather from '@expo/vector-icons/Feather';



export default function TabLayout() {
  

  return (
    <Tabs>
      <Tabs.Screen 
        name="home" 
        options={{ 
          title: "Home", tabBarStyle:{backgroundColor:'black'},
          tabBarIcon: ({ size}) => ( 
            <Octicons name="home" size={size} color={'white'} />
          ), tabBarLabelStyle: { color: 'white' },
            headerStyle: { backgroundColor: 'black' },
          headerTintColor: 'white'
         
        }} 
        
      />
        <Tabs.Screen 
        name="profile" 
        options={{ 
          title: "Profile", tabBarStyle:{backgroundColor:'black'},
          tabBarIcon: ({ size}) => ( 
            <Feather name="user" size={size} color="white"/>
          ), tabBarLabelStyle: { color: 'white' },
            headerStyle: { backgroundColor: 'black' },
          headerTintColor: 'white',
          
        }} 
        
      />
    </Tabs>
  );
}
