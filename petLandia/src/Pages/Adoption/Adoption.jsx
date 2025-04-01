import './style.css'
import { useEffect, useState } from "react"
import { getCats } from "../../Services/cats.jsx"
import { getDogs } from '../../Services/dogs.jsx'



const Adoption = () => {
    const [cats, setCats] = useState([])
    const [dogs, setDogs] = useState([])

    const fecthPets = async () => {
        try {
            const [catsData, dogsData] = await Promise.all([getCats(), getDogs()])
            setCats(catsData)
            setDogs(dogsData)
        } catch (error) {
            console.error('Erro ao buscar pets', error)
        }
    }


    useEffect(() => {
        fecthPets()
    }, [])
    return (
        <div>
            <section className='cats-container'>
                <div className="adoption-container py-5 text-light" style={{ backgroundColor: "#3E342B" }}>
                    <div className="container-cat">
                        <h1 className="text-center fw-bold mb-4">Encontre seu novo amigo!</h1>
                        <p className="text-center mb-5">Adote um pet e mude uma vida. Escolha o seu companheiro abaixo!</p>

                        <div className="row">
                            {cats.length > 0 ? (
                                cats.map((cat) => (
                                    <div key={cat.id} className="col-md-4 mb-4 d-flex align-items-stretch">
                                        <div className="card text-center text-light shadow-sm cat-card">
                                            <img
                                                src={cat.image?.url || "https://via.placeholder.com/200"}
                                                className="card-img-top"
                                                alt={cat.name}
                                            />
                                            <div className="card-body d-flex flex-column">
                                                <h3 className="card-title">{cat.name}</h3>
                                                <p className="card-text flex-grow-1">{cat.description}</p>
                                                <button className="btn btn-adopt mt-auto text-light">Adotar </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center">Carregando gatinhos...</p>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <section className='dogs-container'>
                <div className="adoption-container py-5 text-light" style={{ backgroundColor: "#3E342B" }}>
                    <div className="container-dog">
                        <h1 className="text-center fw-bold mb-4">Encontre um cãozinho para adoção!</h1>
                        <p className="text-center mb-5">Os cachorros também esperam por um lar! Escolha o seu companheiro abaixo.</p>

                        <div className="row">
                            {dogs.length > 0 ? (
                                dogs.map((dog) => (
                                    <div key={dog.id} className="col-md-4 mb-4 d-flex align-items-stretch">
                                        <div className="card text-center text-light shadow-sm dog-card">
                                            <img
                                                src={dog.image || "https://via.placeholder.com/200"}
                                                className="card-img-top-dog"
                                                alt={dog.breed}
                                            />
                                            <div className="card-body d-flex flex-column">
                                                <h3 className="card-title text-light">{dog.breed}</h3>
                                                <p className="card-text flex-grow-2">{dog.description}</p>
                                                <button className="btn btn-adopt mt-auto text-light">Adotar</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center">Carregando cachorrinhos...</p>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Adoption