import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const profile = () => {
  return (
    <View className="flex-1 bg-black p-6">
   
    <View className="items-center mb-6">
     
    </View>
    

    <View className="items-center mb-6">
      <Text className="text-white text-2xl font-semibold">John Doe</Text>
      <Text className="text-white text-lg mt-2">johndoe@example.com</Text>
      <Text className="text-white text-lg mt-2">+94 123 456 789</Text>
    </View>


    <TouchableOpacity
      className="w-full py-3 bg-red-600 rounded-xl justify-center items-center"
    >
      <Text className="text-white text-lg font-bold">Edit Profile</Text>
    </TouchableOpacity>


    <View className="mt-8 bg-gray-800 p-4 rounded-lg">
      <Text className="text-white text-xl font-semibold mb-4">Booking History</Text>
      <View className="bg-gray-700 p-4 rounded-lg mb-2">
        <Text className="text-white">Car Wash - 10th March 2025</Text>
        <Text className="text-white">Status: Completed</Text>
      </View>
      <View className="bg-gray-700 p-4 rounded-lg mb-2">
        <Text className="text-white">Car Wash - 5th March 2025</Text>
        <Text className="text-white">Status: Completed</Text>
      </View>
      <View className="bg-gray-700 p-4 rounded-lg">
        <Text className="text-white">Car Wash - 1st March 2025</Text>
        <Text className="text-white">Status: Pending</Text>
      </View>
    </View>
  </View>
  )
}

export default profile