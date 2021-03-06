import { firebase, FieldValue } from '../lib/firebase'

export async function doesUsernameExist(username) {
    const res = await firebase
        .firestore()
        .collection('users')
        .where('username', '==', username)
        .get();

    return res.docs.map((user) => user.data().lenth > 0);
}

export async function getUserByUserId(userId) {
    const res = await firebase
        .firestore()
        .collection('users')
        .where('userId', '==', userId)
        .get();

    debugger
    const user = res.docs.map((item) => ({
        ...item.data(),
        docId: item.id
    }));
    return user
}