import { Tabs } from 'expo-router';
import React from 'react';
import Octicons from '@expo/vector-icons/Octicons';



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
    </Tabs>
  );
}
