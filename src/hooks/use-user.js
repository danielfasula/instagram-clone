import { useState, useEffect } from 'react';
import { getUserByUserId } from '../services/firebase';

export default function useUser(userId) {
    const [activeUser, setActiveUser] = useState();

    useEffect(() => {
        async function getUserObjByUserId(userId) {
            const [user] = await getUserByUserId(userId);
            setActiveUser(user || {});
        }

        if (userId) {
            getUserObjByUserId(userId);
        }
    }, [userId]);

    return { user: activeUser, setActiveUser };
}


// import { useState, useEffect, useContext } from 'react'
// import UserContext from '../context/user'
// import { getUserByUserId } from '../services/firebase'

// export default function useUser() {
//     const [activeUser, setActiveUser] = useState({})
//     const { user } = useContext(UserContext)

//     useEffect(() => {
//         // function that calls to firebase to get the user data based on the id
//         // debugger
//         async function getUserObjByUserId() {
//             const [res] = await getUserByUserId(user.uid);
//             setActiveUser(res)
//         }
//         if (user?.uid) {
//             getUserObjByUserId()
//         }
//         // debugger
//     }, [user])
//     return { user: activeUser };
// }