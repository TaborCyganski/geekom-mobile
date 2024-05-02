import { View, StyleSheet, Text  } from "react-native";

type MessageProps = {
    content: string,
    sentDate: string,
}

export const ChatMessage = (props: MessageProps) => {
    return(
        <View style={styles.container}>
            <Text>{props.content}</Text>
            <View> 
                <Text>{props.sentDate}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: "black",
        borderWidth: 1, 
    }
})