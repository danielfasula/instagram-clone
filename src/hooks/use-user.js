import { useState, useEffect, useContext } from 'react'
import UserContext from '../context/user'
import { getUserByUserId } from '../services/firebase'

export default function useUser() {
    const [activeUser, setActiveUser] = useState({})
    const { user } = useContext(UserContext)

    useEffect(() => {
        // function that calls to firebase to get the user data based on the id
        // debugger
        async function getUserObjByUserId() {
            const [res] = await getUserByUserId(user.uid);
            setActiveUser(res)
        }
        if (user?.uid) {
            getUserObjByUserId()
        }
        // debugger
    }, [user])
    return { user: activeUser };
}