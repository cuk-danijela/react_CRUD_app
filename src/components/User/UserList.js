import axios from "axios";
import { useEffect, useState } from "react";
import UserListCard from "../Card/UsersListCard";


function UserList() {

    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost:80/api/users/')
            .then(function (response) {
                console.log(response.data);
                setUsersList(response.data);
            });
    }

    const deleteUser = (id) => {
        axios.delete(`http://localhost:80/api/user/${id}/delete`)
            .then(function (response) {
                console.log(response.data);
                getUsers();
            });
    }

    return (
        <>
        <h1 className="text-center mb-5 mt-5">List of users</h1>
            <UserListCard usersList={usersList} deleteUser={deleteUser}/>
        </>
    )
}

export default UserList;