import {Link} from 'react-router-dom';

const NavBar = ({dataToEdit}) => {
    return(
<div>
    <ul>
        <li>
            <Link to='/about'>About</Link>
        </li>
        <li>
            <Link to='/topic'>Topics</Link>
        </li>
        <li>
            <Link to='/home'>Home</Link>
        </li>
        <li>
            <Link to='/error'>Error</Link>
        </li>
        <li>
            <Link to='/sesion'>{dataToEdit ? "Editar":"Iniciar Sesion"}</Link>
        </li>
        <li>
            <Link to='/datos'>Registro</Link>
        </li>
    </ul>
</div>
)
}
export default NavBar;