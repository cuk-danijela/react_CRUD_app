import axios from "axios";
import { useEffect, useState } from "react";
import UserListCard from "../Card/UsersListCard";
import { Link } from 'react-router-dom';
import { BsClipboardPlus } from "react-icons/bs";


function UserList() {

    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost:80/api/users/')
            .then(function (response) {
                // console.log(response.data);
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
            <div className="d-grid text-center mb-5">
                <Link to="user/create"><button className="btn btn-warning w-50" type="button">Create new user <BsClipboardPlus /></button></Link>
            </div>
            {usersList.length === 0 ? <div className="text-center"><h5>We are sorry, but there are no users in the database!</h5> <h5>If you want, you can create them by clicking the button above.</h5></div> :
                <UserListCard usersList={usersList} deleteUser={deleteUser} />}
        </>
    )
}

export default UserList;