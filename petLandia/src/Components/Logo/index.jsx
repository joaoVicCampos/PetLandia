import './style.css'
import logo from '../../assets/Pet.png'

const Logo = () => {
    return (
        <div className='logo-container'>
            <img src={logo} alt="" className='logo' />
        </div>
    )
}


export default Logo