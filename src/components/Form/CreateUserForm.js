import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsCheckSquare } from "react-icons/bs";



function CreateUserForm({ handleSubmit, handleChange, errorMessage, status }) {

    return (
        <div className='col-md-6 m-auto'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="validationCustom01">
                    <Form.Label>Full name</Form.Label>
                    <Form.Control type="text" name="name" onChange={handleChange} placeholder="Enter user name" required />
                    {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="validationCustom02">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" onChange={handleChange} placeholder="Enter email address" required />
                    {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="validationCustom03">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="tel" name="phone" onChange={handleChange} placeholder="Enter phone number" required />
                    {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                </Form.Group>

                {(() => {
                    switch (status) {
                        case 0:
                            return <div className="alert alert-danger" role="alert">
                                Unfortunately, an error occurred while saving the user!
                            </div>
                        case 1:
                            return <div className="alert alert-success" role="alert">
                                The user has been successfully saved to the database!
                            </div>
                        default:
                            return null
                    }
                })()}

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
