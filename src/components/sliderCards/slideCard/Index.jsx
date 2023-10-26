import { Link } from "react-router-dom";

function SlideCard() {
  return (
    <>
      <div className="Cards-item">
        <div className="Cards-imagen">
          <img
            className="Cards-img"
            loading="lazy"
            src="https://cdn.shopify.com/s/files/1/2164/2083/products/dbda9022ef2097be06b2c21a204baa9d_800x.png?v=1557169334"
            alt="Nombre del produco"
          />
        </div>
        <Link className="Cards-info" to="/">
          <div className="Cards-title">
            <h3 className="Cards-name" title="Nombre del producto en la card">
              Nombre del producto
            </h3>
            <p
              className="Cards-description"
              title="Descripción del producto en la card"
            >
              Descripcion breve del producto
            </p>
          </div>
          <div className="Cards-price">
            <span className="Cards-priceSign">$</span>
            <span className="Cards-priceValue">200</span>
            <span className="Cards-priceCurrency">MXN</span>
          </div>
        </Link>
      </div>
    </>
  );
}

export default SlideCard;
