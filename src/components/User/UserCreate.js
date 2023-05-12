/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";
import CreateUserForm from "../Form/CreateUserForm";
import { useNavigate } from "react-router-dom";

function UserCreate() {

    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        phone: ""
    });
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const validateValues = (inputValues) => {
        let errors = {};
        if (inputValues.name.length < 3) {
            errors.name = "User name is too short!";
        }
        if (inputValues.email.length < 5) {
            errors.email = "User email address is too short!";
        }
        if (inputValues.phone.length > 20) {
            errors.phone = "User phone number is too long!";
        }
        return errors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validateValues(inputs));
        setSubmitting(true);
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const finishSubmit = () => {
        console.log(inputs);
        axios.post('http://localhost:80/api/user/save', inputs)
            .then(function (response) {
                console.log(response.data);
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            });
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitting) {
            finishSubmit();
        }
    }, [errors]);


    return (
        <>
            <h1 className="text-center mb-5 mt-5">Create new user</h1>
            <CreateUserForm handleSubmit={handleSubmit} handleChange={handleChange} errors={errors} submitting={submitting} inputs={inputs}/>
        </>
    )
}

export default UserCreate;