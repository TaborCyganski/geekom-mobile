import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import UserComponent from '@/components/UserComponent';
import LoginScreen from '../LoginScreen';
import { Logout } from '../(settings)/Logout';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { OptionBar } from '@/components/OptionBar';
export default function SettingsScreen() {
  
  const [options, setOptions] = useState<string[]>(['Profile','cos','cos2']);
  
  return (
    <View style={styles.container}>
        
        <FlatList
          data={options}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <OptionBar to={item} text={item}/>
          )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
