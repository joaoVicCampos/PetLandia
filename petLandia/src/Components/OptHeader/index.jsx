import './style.css'
import { Link } from 'react-router-dom'

const headerOptions = ['HOME', 'PRODUTOS', 'DETAILS', 'CHECKOUT']

const OptHeader = () => {
    return (
        <div className='options'>
            {headerOptions.map((option) => (
                <Link key={option} to={`/${option.toLowerCase()}`}>
                    <p>{option}</p>
                </Link>
            ))}
        </div>
    )
}

export default OptHeader