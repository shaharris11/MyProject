import { Link } from "react-router-dom";



export default function Navigation() {
    return (
        <nav id="navBar">
            <Link to='/'>Home</Link>
            <Link to='/characters'>Characters</Link>
            <Link to='/monsters'>Monsters</Link>
            <Link to='/places'>Places</Link>
        </nav>
    )
}