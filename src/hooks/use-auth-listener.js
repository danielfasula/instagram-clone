import { useState, useEffect, useContext } from 'react';
import FirebaseContext from '../context/firebase';

export default function useAuthListener() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged((authUser) => {
            if (authUser) {
                // we have a user...therefore we can store the user in localstorage
                localStorage.setItem('authUser', JSON.stringify(authUser));
                setUser(authUser);
            } else {
                // we don't have an authUser, therefore clear the localstorage
                localStorage.removeItem('authUser');
                setUser(null);
            }
        });

        return () => listener();
    }, [firebase]);

    return { user };
}

// import { useState, useEffect, useContext } from 'react'
// import FirebaseContext from '../context/firebase'

// export default function useAuthListener() {
//     // NOTE
//     // Uncaught SyntaxError: Unexpected token u in JSON at position 0
//     const checkLocalStorage = () => {
//         const authUser = JSON.parse(localStorage.getItem('authUser'))
//         if (authUser !== {}) {
//             return ''
//         } else {
//             return authUser
//         }
//     }

//     const [user, setUser] = useState(checkLocalStorage)
//     // JSON.parse(localStorage.getItem('authUser'))
//     const { firebase } = useContext(FirebaseContext)

//     useEffect(() => {
//         const listener = firebase.auth().onAuthStateChanged((authUser) => {
//             // we have a user, therefore we can store the user in localstorage
//             if (authUser) {
//                 localStorage.setItem('authUser', JSON.stringify(authUser))
//                 setUser(authUser)
//             } else {
//                 // we don't have an authUser, therefore clear the localstorage
//                 localStorage.removeItem('authUser')
//                 setUser(null)
//             }
//         })

//         return () => listener()

//     }, [firebase])


//     return { user }
// }