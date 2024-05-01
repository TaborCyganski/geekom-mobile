import React from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import UserComponent from "./UserComponent";
import { UserListProps } from "@/constants/types";

const UserList = (props: { users: UserListProps[] }) => {
    return (
        <ScrollView contentContainerStyle={styles.container} >
            {props.users.map((item: UserListProps, index: number) => (
                <UserComponent key={index} image={item.imgsrc} name={item.name} lastSeen={item.lastseen} />
            ))}
        </ScrollView>
    );
}

export default UserList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
})
