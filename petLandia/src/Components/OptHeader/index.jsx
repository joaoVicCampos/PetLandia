import './style.css'
import { Link } from 'react-router-dom';

const headerOptions = ['HOME', 'PRODUTOS', 'ADOTE', 'CATEGORIAS'];

const OptHeader = () => {
    return (
        <nav>
            <ul className="nav">
                {headerOptions.map((option) => (
                    <li key={option} className="nav-item">
                        <Link
                            to={option.toLowerCase() === 'home' ? '/' : `/${option.toLowerCase()}`}
                            className="nav-link text"
                        >
                            {option}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default OptHeader;
