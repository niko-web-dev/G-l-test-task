import React from "react";
import { withStore } from "../../state/withStore";

import "./product-list.scss";

import { Product } from "../product";
import ControlBtns  from "../controlBtns";

import { REMOVE_PRODUCT } from "../../state/stores/ProductsStore";


class ProductList extends React.Component {

  deleteProduct = (id) => {
     this.props.dispatch(REMOVE_PRODUCT, {id});
  };

  render() {
    const { products, dispatch } = this.props;

    return (
      <>
        <ControlBtns
          products={products}
          dispatch={dispatch}
        />
        <div className="product-list">
          {products.map((product) => (
            <Product
                key={product.id}
                product={product}
                deleteProduct={this.deleteProduct}
            />
          ))}
        </div>
      </>
    );
  }
}

export default withStore("products", (data) => data)(ProductList);
