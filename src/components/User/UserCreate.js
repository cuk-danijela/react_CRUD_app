import { useState } from "react";
import axios from "axios";
import CreateUserForm from "../Form/CreateUserForm";
import { useNavigate } from "react-router-dom";

function UserCreate() {

    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    let [status, setStatus] = useState({});


    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:80/api/user/save', inputs)
            .then(function (response) {
                console.log(response.data);
                status = response.data.status;
                setStatus(status);
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            });

    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }));

        // if (value.length < 3) {
        //     setErrorMessage('Input must be at least 3 characters long');
        // } else {
        //     setErrorMessage('');
        // }

        // const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        // if (!emailRegex.test(value)) {
        //     setErrorMessage('Invalid email address');
        // } else {
        //     setErrorMessage('');
        // }

        // const phoneRegex = /^\+?\d{0,3}[- ]?\d{2,4}[- ]?\d{2,4}[- ]?\d{2,4}$/;
        // if (!phoneRegex.test(value)) {
        //     setErrorMessage('Invalid phone number');
        // } else {
        //     setErrorMessage('');
        // }
    }

    return (
        <>
            <h1 className="text-center mb-5 mt-5">Create new user</h1>
            <CreateUserForm handleSubmit={handleSubmit} handleChange={handleChange} errorMessage={errorMessage} status={status} />
        </>
    )
}

export default UserCreate;