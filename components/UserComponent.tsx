import { View, StyleSheet, Image } from "react-native";
import { MonoTextH1, MonoTextH3 } from "./StyledText";
import { Link } from "expo-router";
import { UserStore } from "@/app/UserStore";

type UserProps = {
    name: string;
    lastSeen: string;
    image: any,
    xd: boolean
}

const UserComponent = (props: UserProps) => {

    const handlePress = () => {
        UserStore.update((s) => {
            s.userProps = props;
        })
    }

    return (
        <Link style={styles.link} href={"/UserChat"} onPress={handlePress}>
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
        </Link>
    );
}
export default UserComponent;

const styles = StyleSheet.create({
    link: {
        marginTop: 30,
    },
    container: {
        flexDirection: "row",
        height: 90,
        width: 320,      
        textAlign: "center",
        alignItems: "center",
        backgroundColor: "#dddddd",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 20,
    },
    image: {
        flex: 2,
        alignItems: "center",
    },
    text: {
        flex: 6,
        
    },
})