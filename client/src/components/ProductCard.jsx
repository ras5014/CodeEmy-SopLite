import { formatPrice } from "../utils/formatPrice";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image-wrap">
        <img src={product.imageUrl} alt="Product" />
        <span>{product.category}</span>
      </div>
      <div className="product-content">
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-card-footer">
          <strong>{formatPrice(product.price)}</strong>
          <button className="button button-primary" type="button">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
