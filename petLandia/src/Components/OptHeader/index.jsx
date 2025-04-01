import './style.css'
import { NavLink } from 'react-router-dom';

const headerOptions = ['HOME', 'PRODUTOS', 'ADOTE', 'CATEGORIAS'];

const OptHeader = () => {
    return (
        <nav>
            <ul className="nav">
                {headerOptions.map((option) => (
                    <li key={option} className="nav-item">
                        <NavLink
                            to={option.toLowerCase() === 'home' ? '/' : `/${option.toLowerCase()}`}
                            className="nav-link text"
                            activeClassName="active-link"
                        >
                            {option}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default OptHeader;
