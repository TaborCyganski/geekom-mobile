import { StyleSheet, Image } from 'react-native';
import { Text, View } from '@/components/Themed';
import { UserListProps } from '@/constants/types';
import UserSearch from '@/components/UserSearch';

export default function ChatsScreen() {
  return (
    <View style={styles.container}>
      <UserSearch />    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
