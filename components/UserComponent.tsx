import { View, StyleSheet, Text, Image } from "react-native";
import { MonoTextH1, MonoTextH3 } from "./StyledText";

type UserProps = {
    name: string;
    lastSeen: string;
    image: any,
}

const UserComponent = (props: UserProps) => {
    return (
        <View style={styles.container} >
            
            <View style={styles.image}>
            <Image
                source={props.image}
            />
            </View>
            <View style={styles.text}>
                <MonoTextH1>{props.name}</MonoTextH1>
                <MonoTextH3>{props.lastSeen}</MonoTextH3>
            </View>
            
        </View>
    );
}
export default UserComponent;

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        display: "flex",
        flexDirection: "row",
        height: 90,
        width: 300,      
        textAlign: "center",
        alignItems: "center",
        backgroundColor: "#dddddd",
        borderColor: "black",
        borderWidth: 1,
    },
    image: {
        flex: 3,
        alignItems: "center",
    },
    text: {
        flex: 7,
        
    },
})