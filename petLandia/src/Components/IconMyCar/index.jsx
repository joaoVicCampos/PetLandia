import { Link } from 'react-router-dom';
import './style.css'

const MyCar = () => {
    return (
        <div>
            <Link to="/carrinho" className="text-light">
                <i className="fas fa-shopping-cart"></i>
            </Link>
        </div>
    );
};

export default MyCar;
