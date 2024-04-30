import React, { useState } from 'react';
import { StyleSheet, TextInput, FlatList } from 'react-native';
import { Text, View } from '@/components/Themed';
import UserList from '@/components/UserList';
import { UserListProps } from '@/constants/types';

const img: string = require("../assets/images/favicon.png");

const data: UserListProps[] = [
    { imgsrc: img, name: "John Doe", lastseen: "Today 12:13" },
    { imgsrc: img, name: "Jane Smith", lastseen: "Yesterday 19:13" },
    { imgsrc: img, name: "Alice Johnson", lastseen: "Today 12:14" },
    { imgsrc: img, name: "Bob Thompson", lastseen: "Yesterday 19:14" },
    { imgsrc: img, name: "Eva Brown", lastseen: "Today 12:15" },
    { imgsrc: img, name: "Michael Clark", lastseen: "Yesterday 19:15" },
    { imgsrc: img, name: "Grace Lee", lastseen: "Today 12:16" },
    { imgsrc: img, name: "Thomas Rodriguez", lastseen: "Yesterday 19:16" },
    { imgsrc: img, name: "Olivia Martinez", lastseen: "Today 12:17" },
    { imgsrc: img, name: "William Moore", lastseen: "Yesterday 19:17" },
  ];
  

const UserSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<UserListProps[]>([]);

  const handleSearch = (query: string) => {
    const filteredResults = data.filter(user =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchQuery(query);
    setSearchResults(filteredResults);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleSearch}
        value={searchQuery}
        placeholder="Search users..."
      />
      <FlatList
        data={searchResults}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <UserList users={[item]} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '100%',
  },
});

export default UserSearch;
