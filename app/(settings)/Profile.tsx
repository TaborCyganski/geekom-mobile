import { Link } from "expo-router";
import { View, Text } from "@/components/Themed";
import { StyleSheet } from "react-native";
const Profile  = () => {
    return(
        <View style={styles.container}>
            <Text>tu jest tex strona tego typu</Text>                    
        </View>
    );
}
export default Profile; 
const styles = StyleSheet.create({
    container: {
        flex: 1,
 
        textAlign: "center",
    },
    link: {
        flex: 1,
    }
})