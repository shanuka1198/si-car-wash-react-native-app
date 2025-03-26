import { useRouter } from "expo-router";
import { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'


export const AuthContext=createContext();

 const AuthProvider=({children})=>{
    const[user,setUser]=useState(null);
    const[isLoad,setIsLoad]=useState(true);
    const router = useRouter();

    useEffect(() => {
       
        const loadUser = async () => {
          try {
            const token = await AsyncStorage.getItem('userToken');
            const userData = await AsyncStorage.getItem('user');
            if (token && userData) {
              setUser(JSON.parse(userData));
            }
          } catch (error) {
            console.error('Error loading user:', error);
          }
          setIsLoad(false);
        };
        loadUser();
      }, []);

    const login = async (token, userData) => {
        try {
          await AsyncStorage.setItem('userToken', token);
          await AsyncStorage.setItem('user', JSON.stringify(userData));
          setUser(userData);
        } catch (error) {
          console.error('Login Error:', error);
        }
      };

      const logOut=async()=>{
        await AsyncStorage.removeItem('userToken');
        await AsyncStorage.removeItem('user');
        router.replace('/')
      }


    return(
        <AuthContext.Provider value={{user,isLoad,login,logOut}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider;