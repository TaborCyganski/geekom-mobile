import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import UserComponent from '@/components/UserComponent';


export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>tu bedzie settings</Text>
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
