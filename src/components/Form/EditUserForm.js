import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsCheckSquare } from "react-icons/bs";



function EditUserForm({ inputs, handleSubmit, handleChange, errors, submitting }) {

    return (
        <div className='col-md-6 m-auto'>
            {Object.keys(errors).length === 0 && submitting ? (
                <div className="alert alert-success" role="alert">
                    The user has been successfully updated to the database!
                </div>
            ) : null}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full name</Form.Label>
                    <Form.Control value={inputs.name || ''} type="text" name="name" onChange={handleChange} />
                    {errors.name && <div className='error'>{errors.name}</div>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={inputs.email || ''} type="email" name="email" onChange={handleChange} />
                    {errors.email && <div className='error'>{errors.email}</div>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control value={inputs.phone || ''} type="tel" name="phone" onChange={handleChange} />
                    {errors.phone && <div className='error'>{errors.phone}</div>}
                </Form.Group>

                <div className="d-grid gap-2 col-6 mx-auto mt-5">
                    <Button variant="warning" type="submit">
                        Edit user <BsCheckSquare />
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default EditUserForm;
