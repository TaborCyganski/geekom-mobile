import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { Ionicons } from '@expo/vector-icons';
import { UserStore } from '../UserStore';
import { useState, useEffect } from 'react';
import LoginScreen from '../LoginScreen';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const [isLogged, setIsLogged] = useState<boolean>(false);

  const handleLoginStatus = (status: boolean) => {
    UserStore.update((s) => {s.isLogged = status})
    setIsLogged(status);
  }
  console.log(isLogged)
  useEffect(() => {

  }, [isLogged])

  return (
    isLogged ?
    <Tabs
      screenOptions={{
        tabBarActiveBackgroundColor : "blue", // add themed colors
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'chats',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <Entypo name="chat" size={32} color="black" />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'settings',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <Ionicons name="settings-sharp" size={32} color="black" />,
        }}
      />
    </Tabs>
    : 
    <LoginScreen onChildValueChange={handleLoginStatus}/>
  );
}
