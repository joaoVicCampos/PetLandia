import "./style.css";
import { Link } from "react-router";

const Home = () => {
    return (
        <div className="home-container">
            <section className="hero bg-dark text-light py-5">
                <div className="container text-center">
                    <h1 className="display-4">O melhor para seu pet, em um só lugar!</h1>
                    <p className="lead">
                        Produtos de qualidade para cães e gatos, com entrega rápida e segura.
                    </p>
                    <Link to="/produtos?categoria=racoes" className="btn btn-primary">
                        Ver Produtos 🛒
                    </Link>
                </div>
            </section>
            <section className="featured py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Produtos em Destaque!</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img
                                    src="https://via.placeholder.com/150"
                                    className="card-img-top"
                                    alt="Ração Premium"
                                />
                                <div className="card-body text-center">
                                    <h3 className="card-title">Ração Premium</h3>
                                    <p className="card-text">R$ 99,90</p>
                                    <button className="btn btn-primary">Comprar</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img
                                    src="https://via.placeholder.com/150"
                                    className="card-img-top"
                                    alt="Brinquedo para Cães"
                                />
                                <div className="card-body text-center">
                                    <h3 className="card-title">Brinquedo para Cães</h3>
                                    <p className="card-text">R$ 39,90</p>
                                    <button className="btn btn-primary">Comprar</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img
                                    src="https://via.placeholder.com/150"
                                    className="card-img-top"
                                    alt="Cama para Gatos"
                                />
                                <div className="card-body text-center">
                                    <h3 className="card-title">Cama para Gatos</h3>
                                    <p className="card-text">R$ 129,90</p>
                                    <button className="btn btn-primary">Comprar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default Home;
