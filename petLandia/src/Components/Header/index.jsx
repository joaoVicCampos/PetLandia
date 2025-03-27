import MyCar from '../IconMyCar/index.jsx'
import OptHeader from '../OptHeader/index.jsx'
import Logo from '../Logo/index.jsx'
import './style.css'

const Header = () => {
    return (
        <div className='header-container'>
            <Logo />
            <OptHeader />
            <MyCar />
        </div>
    )
}

export default Header