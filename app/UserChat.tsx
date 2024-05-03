import { View, StyleSheet, Image, FlatList, TextInput, TouchableHighlight, TouchableOpacity } from "react-native";
import { MonoTextH1, MonoTextH3 } from "../components/StyledText";
import { Link } from "expo-router";
import { ChatMessage } from "@/components/ChatMessage";
import { useEffect, useState } from "react";
import { UserStore } from "./UserStore";

type UserProps = {
    name: string;
    lastSeen: string;
    image: any,
}

type message = {
    content: string,
    sentDate: string,
    received: boolean
}



const UserChat = () => {
    const info: UserProps = UserStore.useState((s) => s.userProps);    
    const [messages, setMessages] = useState<message[]>([{content: 'siema cr???', sentDate: "today 15:15", received: true},{content: 'odpisz dziwkoos', sentDate: "today 15:21", received: true}]);
    const [current, setCurrent] = useState<message>();
    const [xd, setXd] = useState<boolean>(false);
    const [user, setUser] = useState<UserProps>();

    useEffect(() => {
        setUser(info);
    })

    const handleSending = () => {
        if(current?.content) {
            setMessages(value => [...value,current]);
            setCurrent({content: '', sentDate: '', received: false});
        }
    }

    const handleInput = (text: string) => {
        setCurrent({content: text, received: false, sentDate: 'today: 16:23'});
    }


    
       

    //FIX: naprawic wysylanie pustych wiadomosci
    return (
        <View style={styles.container} >
            <View style={styles.info}>
                <Image
                    source={user?.image}
                />
                <View>
                    <MonoTextH1>{user?.name}</MonoTextH1>
                    <MonoTextH3>{user?.lastSeen}</MonoTextH3>
                </View>
            </View>
            <View style={styles.chat}>
            <FlatList
                data={messages}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    item.received == true ? <View style={styles.receivedMessage}><ChatMessage content={item.content} sentDate={item.sentDate}/></View> : <View style={styles.sentMessage}><ChatMessage content={item.content} sentDate={item.sentDate}/></View>
        )}
      />   
            </View>
            <View style={styles.send}>
                <TextInput value={current?.content} onChangeText={(text: string) => handleInput(text)}/>
                <TouchableOpacity onPress={handleSending} style={styles.xd}></TouchableOpacity>        
            </View>          
        </View>
    );
}
export default UserChat;

const styles = StyleSheet.create({
    container: {
        flex: 1,      
        textAlign: "center",
        alignItems: "center",
        backgroundColor: "#dddddd",
    },
    info: {
        flex:1,
        flexDirection: 'row',
        alignItems: "center",
        minWidth: 400,
    },
    chat: {
        flex: 6,
        borderColor: 'blue',
        borderWidth: 1,
        minWidth: 400,
    },
    receivedMessage: {
        alignItems: "flex-start",
    },
    sentMessage: {
        alignItems: "flex-end"
    },
    send: {
        flex: 1,
        backgroundColor: "red",
        minWidth: 400
    },
    xd: {
        width: 50,
        height: 50,
        backgroundColor: 'green'
    }
})