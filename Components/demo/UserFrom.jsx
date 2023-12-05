import { useState } from "react";
import UserCard from "./UserCard";

const defaultUsers = [
    { id: 1, name: 'nisim', age: 42, isChad: true },
    { id: 2, name: 'shlomo', age: 666, isChad: false },
    { id: 3, name: 'david', age: 23, isChad: false },
];

export default function UserForm() {
    const [users, setUsers] = useState(defaultUsers);
    const [nameInputVal, setNameInputVal] = useState('');
    const [ageInputVal, setAgeInputVal] = useState(0);
    const [isChad, setIsChad] = useState(true);

    const usersCards =
        users.map(u => <UserCard key={u.id} user={u} />);

    function handleAddingUserCard() {
        const insertedUser = {
            name: nameInputVal,
            age: ageInputVal,
            isChad,
        };

        setUsers(users.concat(insertedUser));
    }

    return <div className="page">
        <div className="user-form">
            <label>name</label>
            <input type="text" value={nameInputVal}
                onChange={e => setNameInputVal(e.target.value)} />
            <label>age</label>
            <input type="number" value={ageInputVal}
                onChange={e => Number(setAgeInputVal(e.target.value))} />
            <label>is chad</label>
            <input type="checkbox" checked={isChad}
             onChange={e => setIsChad(e.target.checked)} />
        </div>

        <button onClick={handleAddingUserCard}>
            create user card
        </button>

        <div className="users-board">
            {usersCards}
        </div>
    </div>;
}