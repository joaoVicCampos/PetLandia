import { Link } from "react-router"

const Register = () => {
    return (
        <div>
            <button><Link to={'/login'}>Já possui cadastro? Faça seu login</Link></button>
            Register
        </div>
    )
}

export default Register