import { getContext, setContext } from "svelte";

const USER_CTX = 'USER_CTX';

/**
 * @param {any} initialData
 */
export function setUserState(initialData = {name: 'mdriaz'}) {
    const userState = $state(initialData);
    setContext(USER_CTX, userState);

    return userState;
}

export function getUserState() {
    return getContext(USER_CTX);
}