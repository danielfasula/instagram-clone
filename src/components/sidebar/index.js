import useUser from '../../hooks/use-user'
import User from './user'
import Suggestions from './suggestions'

export default function Sidebar() {
    const {
        // @ts-ignore
        user: { fullName, username, userId }
    } = useUser()


    return (
        <div className="p-4">
            <User username={username} fullName={fullName} />
            <Suggestions userId={userId} />
        </div>
    );
}