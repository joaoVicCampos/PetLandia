import './style.css'
import { Link } from 'react-router-dom'

const MyCar = () => {
    return (
        <div className="cart-icon">
            <Link to="/carrinho">
                <i className="fas fa-shopping-cart"></i>
            </Link>
        </div>
    )
}

export default MyCar