import { Store } from "pullstate";

interface userData{
    userID: number | null,
    isLogged: boolean,
}

export const UserStore = new Store<userData>({
    userID: null,
    isLogged: false,
})