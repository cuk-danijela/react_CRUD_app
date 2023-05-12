import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsCheckSquare } from "react-icons/bs";



function EditUserForm({ inputs, handleSubmit, handleChange, status }) {

    return (
        <div className='col-md-6 m-auto'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full name</Form.Label>
                    <Form.Control value={inputs.name || ''} type="text" name="name" onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={inputs.email || ''} type="email" name="email" onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control value={inputs.phone || ''} type="tel" name="phone" onChange={handleChange} />
                </Form.Group>

                {(() => {
                    switch (status) {
                        case 0:
                            return <div className="alert alert-danger" role="alert">
                                Unfortunately, an error occurred while updating the user!
                            </div>
                        case 1:
                            return <div className="alert alert-success" role="alert">
                                The user data has been successfully updated to the database!
                            </div>
                        default:
                            return null
                    }
                })()}


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
