import { UserStore } from "@/app/UserStore";
import { View, Text} from "@/components/Themed";
import { StyleSheet, TouchableHighlight } from "react-native";
import { Link } from "expo-router";

export const Logout = () => {

    const handlePress = () => {
        UserStore.update((s)=> {s.isLogged = !s.isLogged})
        console.log(UserStore.getRawState())
        console.log('logged out')
    }

    return(
        <TouchableHighlight style={styles.continer} onPress={handlePress}>
            <Link href="/">
            <View>
                <Text>log out</Text>
            </View>
            </Link>
        </TouchableHighlight>
    );
}
const styles = StyleSheet.create({
    continer: {
        width: 100,
        height: 40,
        backgroundColor: "red",
        textAlign: "center",
    }
})