import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { BsPersonCheck, BsEnvelopeAt, BsTelephoneForward, BsPencilSquare, BsFillPersonXFill, BsClipboardPlus } from "react-icons/bs";
import { Link } from 'react-router-dom';



function UserListCard({ usersList, deleteUser }) {

    return (
        <div className='row d-flex justify-content-center gap-3'>
            <div className="d-grid text-center mb-5">
                <Link to="user/create"><button className="btn btn-warning w-50" type="button">Create new user <BsClipboardPlus /></button></Link>
            </div>
            {usersList.map((user, key) => (
                <Card className="col-md-3" border="warning" key={key}>
                    <Card.Header className='bg-transparent'>
                        <Badge bg="secondary">{user.id}</Badge>
                        <div className='d-inline float-right'>
                            <Link to={`user/${user.id}/edit`}> 
                            <Button variant="warning" className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Update user" size="sm">
                                <BsPencilSquare />
                            </Button></Link>
                            <Button onClick={() => deleteUser(user.id)} variant="warning" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete user" size="sm">
                                <BsFillPersonXFill />
                            </Button>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title><BsPersonCheck /> {user.name}</Card.Title>
                        <h6 className='fw-normal'><BsEnvelopeAt /> {user.email}</h6>
                        <h6 className='fw-normal'><BsTelephoneForward /> {user.phone}</h6>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default UserListCard;