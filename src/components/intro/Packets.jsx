import {
    Link
} from 'react-router-dom';

function Packets () {
    return (
        <>
            <section className="Packets Section">
                <div className="Packets-wrapper Wrapper">
                    <div className="Packets-grid">
                        <div className="Packets-item">
                            <div className="Packets-image">
                                <img className="Packets-img" loading="lazy" src="https://images.unsplash.com/photo-1623828721568-ea0ab39dbec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="/" />
                            </div>
                            <div className="Packets-info">
                                <div className="Packets-title">
                                    <span className="Packets-line"></span>
                                    <h3 className="Packets-h3">Nombre del paquete</h3>
                                </div>
                                <div className="Packets-more">
                                    <Link className="Packets-button" to="/"> Ver más </Link>
                                </div>
                            </div>
                        </div>
                        <div className="Packets-item">
                            <div className="Packets-image">
                                <img className="Packets-img" loading="lazy" src="https://images.unsplash.com/photo-1599629954294-14df9ec8bc05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" alt="/" />
                            </div>
                            <div className="Packets-info">
                                <div className="Packets-title">
                                    <span className="Packets-line"></span>
                                    <h3 className="Packets-h3">Nombre del paquete</h3>
                                </div>
                                <div className="Packets-more">
                                    <Link className="Packets-button" to="/"> Ver más </Link>
                                </div>
                            </div>
                        </div>
                        <div className="Packets-item">
                            <div className="Packets-image">
                                <img className="Packets-img" loading="lazy" src="https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="/" />
                            </div>
                            <div className="Packets-info">
                                <div className="Packets-title">
                                    <span className="Packets-line"></span>
                                    <h3 className="Packets-h3">Nombre del paquete</h3>
                                </div>
                                <div className="Packets-more">
                                    <Link className="Packets-button" to="/"> Ver más </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Packets;