import {
    useState,
} from 'react';

import {
    Link
} from 'react-router-dom';


function CartButton () {
    const [ active, setActive ] = useState(false);
    const handleActiveDrawerClick = () => setActive(!active);

    active ?  document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'scroll';


    return (
        <>
            <button className="Header-button" title="Ir al carrito de compras" id="Carrito" onClick={handleActiveDrawerClick}>
                <svg className="Header-buttonSvg Header-buttonSvg--cart" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                </svg>
                <span className="Header-counter">0</span>
            </button>


            <section className={active ? 'Drawer active' : 'Drawer'}>
                <div className="Drawer-exit" onClick={handleActiveDrawerClick}></div>
                <div className="Drawer-content">
                    <div className="Drawer-wrapper">
                        <div className="Drawer-header">
                            <button className="Drawer-backBtn" title="Regresar" onClick={handleActiveDrawerClick}>
                                <svg className="Drawer-backIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                                </svg>
                            </button>
                            <h2 className="Drawer-title">Carito de compras</h2>
                        </div>
                        <p className="Drawer-text">Si tienes dudas sobre como comprar dirigete a nuestra
                            <Link className="Drawer-text--a" to="/" title="Ir a como comprar">
                                guía de compra
                            </Link>
                        </p>
                        <div className="Drawer-body">
                            <div className="Drawer-empty">
                                Tu carrito esta vacio
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CartButton;