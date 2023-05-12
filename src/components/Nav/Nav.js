
import { Link } from 'react-router-dom';


function Navigation() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" to="/">List users</Link>
                            <Link className="nav-link" to="user/create">Create user</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navigation;

