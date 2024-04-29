import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import UserComponent from '@/components/UserComponent';


const imgsrc: any = require("../../assets/images/favicon.png");

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <UserComponent image={imgsrc} name='roman dmowski' lastSeen='today 12:12'/>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
