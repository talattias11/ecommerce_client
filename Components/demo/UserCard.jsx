const chadUrl =
    'https://fscourse.shaharbest.com/img/chads/original.webp';
const notChadUrl =
    'https://fscourse.shaharbest.com/img/wojak/glasses.webp';

export default function UserCard({ user }) {
    return <div className="user-card">
        <h3>{user.name}</h3>
        <h3>{user.age}</h3>
        <UserAvatar user={user} />
    </div>
}

function UserAvatar({ user }) {
    return <img src={user.isChad ? chadUrl : notChadUrl}
        alt={user.name} />;
}