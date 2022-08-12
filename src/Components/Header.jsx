import logo from '../img/openlibra-logo.png';
import { Link } from 'react-router-dom';
export function Header() {

    return(
        <>
            <Link to={'/'}>
                <img src={logo} alt="logo openlibra" height='50px' />
            </Link>
        </>
    )
}
