import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditUserForm from "../Form/EditUserForm";

function UserEdit() {

    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);
    const { id } = useParams();
    let [status, setStatus] = useState({});

    useEffect(() => {
        getUser();
    }, []);

    function getUser() {
        axios.get(`http://localhost:80/api/user/${id}`)
            .then(function (response) {
                setInputs(response.data);
            });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:80/api/user/${id}/edit`, inputs)
            .then(function (response) {
                status = (response.data.status);
                setStatus(status);
                setTimeout(() => {
                    navigate('/');
                }, 2000);

            });

    }

    return (
        <>
            <h1 className="text-center mb-5 mt-5">Edit user</h1>
            <EditUserForm inputs={inputs} handleChange={handleChange} handleSubmit={handleSubmit} status={status}/>
        </>
    )
}

export default UserEdit;