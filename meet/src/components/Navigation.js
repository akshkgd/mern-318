import { Link } from "react-router-dom";
function Navigation(){
    return(
        <nav>
            <h2 className="logo">Ck Meet</h2>
            <div>
                <Link to='/' className="links">Home</Link>
                <Link to='/home' className="links">My Meetings</Link>
                <Link to='/add-meeting' className="links">Add Meeting</Link>
            </div>
        </nav>
    )
}

export default Navigation;