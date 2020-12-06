import React from "react";
import "./product.scss";

export class Product extends React.Component {
  render() {
    const { product, deleteProduct  } = this.props;
    const price = product.price.toLocaleString("ru", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
      currency: "RUB",
      style: "currency",
    });

    return (
      <div className="product">
        <div className="product-info">
          <h3 className="product-info-title">
            {product.title} - <span>{product.id}</span>
          </h3>
          <p className="product-info-description">{product.description}</p>
          <div>
            <span className="product-info-price">{price}</span>
          </div>
        </div>
        <div className="product-image-frame">
          <img
            className="product-image"
            src="https://s1.ticketm.net/dam/a/3ea/a7473588-64b1-4fac-ad26-596f70b993ea_647801_TABLET_LANDSCAPE_LARGE_16_9.jpg"
            alt=""
          />
          <button
              className="product-remode"
              onClick={() => deleteProduct(product.id)}>
            X
          </button>
        </div>
      </div>
    );
  }
}
