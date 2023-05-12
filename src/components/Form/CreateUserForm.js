import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsCheckSquare } from "react-icons/bs";



function CreateUserForm({ handleSubmit, handleChange, inputs, errors, submitting }) {

    return (
        <div className='col-md-6 m-auto'>
            {Object.keys(errors).length === 0 && submitting ? (
                <div className="alert alert-success" role="alert">
                    The user has been successfully saved to the database!
                </div>
            ) : null}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="validationCustom01">
                    <Form.Label>Full name</Form.Label>
                    <Form.Control value={inputs.name} type="text" name="name" onChange={handleChange} placeholder="Enter user name" required />
                    {errors.name && <div className='error'>{errors.name}</div>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="validationCustom02">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={inputs.email} type="email" name="email" onChange={handleChange} placeholder="Enter email address" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    {errors.email && <div className='error'>{errors.email}</div>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="validationCustom03">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control value={inputs.phone} type="tel" name="phone" onChange={handleChange} placeholder="Enter phone number" required />
                    {errors.phone && <div className='error'>{errors.phone}</div>}
                </Form.Group>

                <div className="d-grid gap-2 col-6 mx-auto mt-5">
                    <Button variant="warning" type="submit">
                        Save user <BsCheckSquare />
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default CreateUserForm;
