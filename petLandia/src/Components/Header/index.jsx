import { Link } from 'react-router-dom';
import './style.css'
import MyCar from '../IconMyCar/index.jsx';
import OptHeader from '../OptHeader/index.jsx';
import Logo from '../Logo/index.jsx';

const Header = () => {
    return (
        <header className="container-fluid bg-dark text-light py-1 shadow-sm">
            <div className="row align-items-center">
                <div className="col-md-2">
                    <Logo />
                </div>
                <div className="col-md-5">
                    <OptHeader />
                </div>
                <div className="col-md-5 d-flex justify-content-end align-items-center gap-3">
                    <MyCar />
                    <Link to="/login" className="btn btn-outline-light">
                        Já possui cadastro? Faça seu login
                    </Link>
                    <Link to="/registro" className="btn btn-light">
                        registre-se
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
