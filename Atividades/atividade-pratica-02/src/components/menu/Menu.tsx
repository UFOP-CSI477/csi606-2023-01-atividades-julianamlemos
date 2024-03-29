import { Link } from 'react-router-dom';
import './menu.css'

const Menu = () => {

  

    return(
        <div>
            <h2>Menu</h2>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/estados'>Estados</Link></li>
                <li><Link to='/cidades'>Cidades</Link></li>
                <li><Link to='/pessoas'>Pessoas</Link></li>
                <li><Link to='/locais'>Enderecos</Link></li>
                <li><Link to='/doacoes'>Compras</Link></li>
            </ul>
        </div>
    );

}

export default Menu;
