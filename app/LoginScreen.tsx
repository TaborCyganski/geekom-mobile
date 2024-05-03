import { StyleSheet, TextInput, TouchableHighlight } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useEffect, useState } from 'react';

type ChildProps = {
  onChildValueChange: (value: boolean) => void;
};

export default function LoginScreen({ onChildValueChange }: ChildProps) {
  
  const [status, setStatus] = useState(Boolean);
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  
  useEffect(() => {
    onChildValueChange(status);
  }, )

  const handleChange = () => {
    if(input1 == "" && input2 == "") setStatus(true);
    else setStatus(false);
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.window}>
        <Text>Log In</Text>
        <TextInput style={styles.input} onChangeText={newInput => setInput1(newInput.trim())} defaultValue=''></TextInput>
        <TextInput style={styles.input} secureTextEntry={true} onChangeText={newInput => setInput2(newInput.trim())} defaultValue=''></TextInput>
        <TouchableHighlight style={styles.button} onPress={handleChange} underlayColor={"white"}>
          <Text style={{ fontSize: 20, width: 100, textAlign: "center"}}>Login</Text>  
        </TouchableHighlight>  
      </View>    
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
  window: {
    width: 300,
    height: 300,
    backgroundColor: "red",
    borderRadius: 20,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    gap: 40,
  },
  input: {
    width: 200,
    height: 50,
    backgroundColor: "blue",
    borderRadius: 15,
    textAlign: "center",
  },
  button: {
    borderRadius: 15,
    backgroundColor: "green",
  }
});
