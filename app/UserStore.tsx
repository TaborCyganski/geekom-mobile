import { Store } from "pullstate";

interface userData{
    userID: number | null,
    isLogged: boolean,
    conversationID: number | null,
    userProps: {
        name: string,
        lastSeen: string,
        image: any,
        xd: boolean
    },
}


export const UserStore = new Store<userData>({
    userID: null,
    isLogged: false,
    conversationID: null,
    userProps: {
        name: '',
        lastSeen: '',
        image: '',
        xd: false,
    },
})
 