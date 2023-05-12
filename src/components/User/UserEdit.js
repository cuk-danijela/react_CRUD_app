/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditUserForm from "../Form/EditUserForm";

function UserEdit() {

    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        phone: ""
    });
    const { id } = useParams();
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
        setErrors(validateValues(inputs));
        setSubmitting(true);
    }

    const finishSubmit = () => {
        console.log(inputs);
        axios.put(`http://localhost:80/api/user/${id}/edit`, inputs)
            .then(function (response) {
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
            <h1 className="text-center mb-5 mt-5">Edit user</h1>
            <EditUserForm inputs={inputs} handleChange={handleChange} handleSubmit={handleSubmit} errors={errors} submitting={submitting}/>
        </>
    )
}

export default UserEdit;