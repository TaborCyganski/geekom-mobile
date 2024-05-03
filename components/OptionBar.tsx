import { Link } from "expo-router";
import { View, Text } from "./Themed";
import { StyleSheet } from "react-native";
export const OptionBar  = (props: {to: any, text: string}) => {
    return(
        <View style={styles.container}>
            <Link href={props.to}>
                <Text>{props.text}</Text>
            </Link>
        </View>
    );
} 
const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 50,
        textAlign: "center",
        backgroundColor: 'red'
    },
    link: {
        flex: 1,
    }
})