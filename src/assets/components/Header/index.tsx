import { Link } from 'react-router-dom'
import "./styles.css"

const Header = () => {
    return(
        <>
            <header className='Header'>
                <Link to={"/"}>Home</Link>
                <Link to={"/sobre"}>Sobre</Link>
            </header>
        </>
    );
}

export default Header;