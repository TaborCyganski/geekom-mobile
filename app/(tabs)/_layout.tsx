import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveBackgroundColor : "blue", // add themed colors
      }}>
      <Tabs.Screen
        name="chats"
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
  );
}
